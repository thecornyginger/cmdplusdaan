import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from "motion/react"
import ReactMarkdown from 'react-markdown'
import { ArrowLeft } from '@phosphor-icons/react'
import { getDevlogBySlug, formatDate } from '../utils/devlogs'

function DevLogPost() {
  const { slug } = useParams<{ slug: string }>()
  const [devlog, setDevlog] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  useEffect(() => {
    async function loadDevLog() {
      if (!slug) {
        setNotFound(true)
        setLoading(false)
        return
      }

      try {
        const log = await getDevlogBySlug(slug)
        if (log) {
          setDevlog(log)
        } else {
          setNotFound(true)
        }
      } catch (error) {
        console.error('Failed to load devlog:', error)
        setNotFound(true)
      } finally {
        setLoading(false)
      }
    }

    loadDevLog()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-100">
        <motion.main
          className="max-w-4xl mx-auto px-4 py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center items-center py-12">
            <div className="text-stone-800">Loading devlog...</div>
          </div>
        </motion.main>
      </div>
    )
  }

  if (notFound || !devlog) {
    return (
      <div className="min-h-screen bg-stone-100">
        <motion.main
          className="max-w-4xl mx-auto px-4 py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center py-12">
            <h1 className="text-4xl font-bold text-stone-800 mb-4">DevLog Not Found</h1>
            <p className="text-stone-800 mb-8">The devlog you're looking for doesn't exist.</p>
            <Link to="/devlog">
              <motion.button
                className="flex items-center space-x-2 bg-stone-800 text-stone-100 px-6 py-3 rounded-lg hover:bg-stone-800 transition-all duration-200 mx-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setHoveredIcon('back-top')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <motion.div
                  animate={{
                    scale: hoveredIcon === 'back-top' ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowLeft
                    size={16}
                    weight={hoveredIcon === 'back-top' ? 'bold' : 'regular'}
                  />
                </motion.div>
                <span>Back to DevLog</span>
              </motion.button>
            </Link>
          </div>
        </motion.main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-100">
      <motion.main
        className="max-w-4xl mx-auto px-4 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Back Button */}
        <motion.div
          className="mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link to="/devlog">
            <motion.button
              className="flex items-center space-x-2 text-stone-800 hover:font-bold transition-all duration-200"
              whileHover={{ x: -4 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={() => setHoveredIcon('back-nav')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <motion.div
                animate={{
                  scale: hoveredIcon === 'back-nav' ? 1.1 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <ArrowLeft
                  size={16}
                  weight={hoveredIcon === 'back-nav' ? 'bold' : 'regular'}
                />
              </motion.div>
              <span>Back to DevLog</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header
          className="mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {devlog.tags.map((tag: string) => (
              <span
                key={tag}
                className="bg-stone-800 text-stone-100 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            {devlog.title}
          </h1>
          <p className="text-stone-800 text-lg mb-4">{devlog.excerpt}</p>
          <p className="text-stone-800">{formatDate(devlog.date)}</p>
        </motion.header>

        {/* Article Content */}
        <motion.article
          className="prose prose-stone prose-lg max-w-none"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold text-stone-800 mt-8 mb-4 first:mt-0">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold text-stone-800 mt-8 mb-4">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-bold text-stone-800 mt-6 mb-3">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-stone-800 mb-4 leading-relaxed">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside text-stone-800 mb-4 space-y-2">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside text-stone-800 mb-4 space-y-2">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-stone-800">{children}</li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-stone-800 pl-4 italic text-stone-800 my-6">
                  {children}
                </blockquote>
              ),
              code: ({ children }) => (
                <code className="bg-stone-100 text-stone-800 px-2 py-1 rounded text-sm font-mono">
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre className="bg-stone-800 text-stone-100 p-4 rounded-lg overflow-x-auto my-6">
                  {children}
                </pre>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-stone-800 font-bold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              strong: ({ children }) => (
                <strong className="font-bold text-stone-800">{children}</strong>
              ),
            }}
          >
            {devlog.content}
          </ReactMarkdown>
        </motion.article>

        {/* Back to DevLog Footer */}
        <motion.div
          className="mt-16 pt-8 border-t border-stone-800"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link to="/devlog">
            <motion.button
              className="flex items-center space-x-2 bg-stone-800 text-stone-100 px-6 py-3 rounded-lg hover:bg-stone-800 transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={() => setHoveredIcon('back-footer')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <motion.div
                animate={{
                  scale: hoveredIcon === 'back-footer' ? 1.1 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <ArrowLeft
                  size={16}
                  weight={hoveredIcon === 'back-footer' ? 'bold' : 'regular'}
                />
              </motion.div>
              <span>Back to All DevLogs</span>
            </motion.button>
          </Link>
        </motion.div>
      </motion.main>
    </div>
  )
}

export default DevLogPost