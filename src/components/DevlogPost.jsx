import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getDevlogBySlug } from '../utils/devlogUtils'

function DevlogPost() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [devlog, setDevlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadDevlog() {
      try {
        setLoading(true)
        setError(null)
        const devlogData = await getDevlogBySlug(slug)
        
        if (!devlogData) {
          setError('Devlog not found')
        } else {
          setDevlog(devlogData)
        }
      } catch (err) {
        console.error('Error loading devlog:', err)
        setError('Failed to load devlog')
      } finally {
        setLoading(false)
      }
    }
    
    loadDevlog()
  }, [slug])

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="bg-daanpurple min-h-screen w-full">
        <div className="flex items-center justify-center p-4 pt-20">
          <div className="text-daanwhite text-xl">Loading devlog...</div>
        </div>
      </div>
    )
  }

  if (error || !devlog) {
    return (
      <div className="bg-daanpurple min-h-screen w-full">
        <div className="flex items-center justify-center p-4 pt-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-daanwhite mb-4">
              {error || 'Devlog Not Found'}
            </h1>
            <p className="text-daanwhite/60 mb-6">
              The devlog you're looking for doesn't exist or couldn't be loaded.
            </p>
            <Link 
              to="/devlog"
              className="inline-flex items-center gap-2 bg-daangreen/20 border border-daangreen text-daangreen hover:bg-daangreen hover:text-daanpurple px-4 py-2 rounded font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to DevLog
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-daanpurple min-h-screen w-full">
      <div className="flex items-center justify-center p-4 pt-8">
        <div className="flex flex-col max-w-4xl w-full mx-auto">
          
          {/* Navigation */}
          <div className="mb-6">
            <Link 
              to="/devlog"
              className="inline-flex items-center gap-2 text-daanwhite/60 hover:text-daanwhite transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to DevLog
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-daanwhite mb-4">
              {devlog.title}
            </h1>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <p className="text-daanwhite/60">
                {formatDate(devlog.date)}
              </p>
              
              {devlog.tags.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  {devlog.tags.map(tag => (
                    <span 
                      key={tag}
                      className="bg-daangreen text-daanpurple px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            
            
          </header>

          {/* Article Content */}
          <article className="prose prose-invert prose-lg max-w-none">
            <div 
              className="devlog-content text-daanwhite/90 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: devlog.html }}
            />
          </article>

          {/* Footer Navigation */}
          <footer className="mt-12 pt-8 border-t border-daanwhite/20">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <Link 
                to="/devlog"
                className="inline-flex items-center gap-2 bg-daangreen/20 border border-daangreen text-daangreen hover:bg-daangreen hover:text-daanpurple px-4 py-2 rounded font-medium transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                All DevLogs
              </Link>
              
              <Link 
                to="/"
                className="inline-flex items-center gap-2 bg-daanwhite/20 border border-daanwhite text-daanwhite hover:bg-daanwhite hover:text-daanpurple px-4 py-2 rounded font-medium transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default DevlogPost 