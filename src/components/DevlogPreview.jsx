import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { loadDevlogs } from '../utils/devlogUtils'

function DevlogPreview({ maxPosts = 3 }) {
  const [devlogs, setDevlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadLatestDevlogs() {
      try {
        const allDevlogs = await loadDevlogs()
        setDevlogs(allDevlogs.slice(0, maxPosts))
      } catch (error) {
        console.error('Error loading devlogs for preview:', error)
      } finally {
        setLoading(false)
      }
    }
    
    loadLatestDevlogs()
  }, [maxPosts])

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })
  }

  const getColorScheme = (index) => {
    const greenScheme = { bg: 'bg-daangreen/20', border: 'border-daangreen', text_button: 'text-daanwhite', text_tag: 'text-daangreen', tagBg: 'bg-daangreen/30' };
    return greenScheme;
  }

  if (loading) {
    return (
      <div className="flex gap-4 md:gap-6 min-w-max md:min-w-0">
        <div className="bg-daanwhite/10 border-2 border-daanwhite/20 rounded-lg p-4 w-72 min-h-56 flex flex-col shrink-0">
          <div className="text-daanwhite/60 text-center">Loading devlogs...</div>
        </div>
      </div>
    )
  }

  if (devlogs.length === 0) {
    return (
      <div className="flex gap-4 md:gap-6 min-w-max md:min-w-0">
        <div className="bg-daangreen/20 border-2 border-daangreen rounded-lg p-4 w-72 min-h-56 flex flex-col shrink-0">
          <h3 className="text-lg font-bold text-daanwhite mb-2">No DevLogs Yet</h3>
          <p className="text-daanwhite/80 text-xs mb-3 flex-grow">
            Check back soon for development updates and behind-the-scenes content!
          </p>
          <div className="flex gap-2 mb-3">
            <Link 
              to="/devlog" 
              className="border border-daanwhite text-daanwhite hover:bg-daanwhite hover:text-daanpurple px-3 py-1.5 rounded text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3 h-3 fill-current" viewBox="0 0 16 16">
                <path d="M3 0h10v16H3V0z"/>
                <path d="M5 3h6v1H5V3z"/>
                <path d="M5 6h6v1H5V6z"/>
                <path d="M5 9h4v1H5V9z"/>
              </svg>
              DevLog
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex gap-4 md:gap-6 min-w-max md:min-w-0">
      {devlogs.map((devlog, index) => {
        const colors = getColorScheme(index)
        return (
          <div 
            key={devlog.slug} 
            className={`${colors.bg} border-2 ${colors.border} rounded-lg p-4 w-72 min-h-56 flex flex-col shrink-0`}
          >
            <h3 className="text-lg font-bold text-daanwhite mb-2">
              {devlog.title}
            </h3>
            <p className="text-daanwhite/80 text-xs mb-3 flex-grow">
              {devlog.excerpt || 'A new devlog post...'}
            </p>
            <div className="flex gap-2 flex-wrap mb-3">
              {devlog.tags.slice(0, 2).map(tag => (
                <span 
                  key={tag}
                  className={`${colors.tagBg} ${colors.text_tag} px-2 py-1 rounded text-xs`}
                >
                  {tag}
                </span>
              ))}
              {devlog.tags.length > 2 && (
                <span className="text-daanwhite/60 text-xs px-2 py-1">
                  +{devlog.tags.length - 2}
                </span>
              )}
            </div>
            <div className="flex gap-2 mt-auto items-center">
              <Link 
                to={`/devlog/${devlog.slug}`}
                className={`border ${colors.border} ${colors.text_button} hover:bg-${colors.border.split('-')[1]} hover:text-daanpurple px-3 py-1.5 rounded text-xs font-bold transition-colors flex items-center gap-1.5`}
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 16 16">
                  <path d="M3 0h10v16H3V0z"/>
                  <path d="M5 3h6v1H5V3z"/>
                  <path d="M5 6h6v1H5V6z"/>
                  <path d="M5 9h4v1H5V9z"/>
                </svg>
                Read Post
              </Link>
              <span className="text-daanwhite/60 text-xs px-2 py-1.5">
                {formatDate(devlog.date)}
              </span>
            </div>
          </div>
        )
      })}
      
      {/* "View All" panel if there are devlogs */}
      <div className="bg-daangreen/20 border-2 border-daangreen rounded-lg p-4 w-72 min-h-56 flex flex-col shrink-0 justify-center items-center">
        <h3 className="text-lg font-bold text-daanwhite mb-3 text-center">
          More DevLogs
        </h3>
        <p className="text-daanwhite/80 text-xs mb-4 text-center">
          Check out all my development updates, bugs, and breakthroughs.
        </p>
        <Link 
          to="/devlog"
          className="border border-daangreen text-daanwhite hover:bg-daangreen hover:text-daanpurple px-4 py-2 rounded text-sm font-bold transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
            <path d="M3 0h10v16H3V0z"/>
            <path d="M5 3h6v1H5V3z"/>
            <path d="M5 6h6v1H5V6z"/>
            <path d="M5 9h4v1H5V9z"/>
          </svg>
          View All
        </Link>
      </div>
    </div>
  )
}

export default DevlogPreview 