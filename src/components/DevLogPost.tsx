import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from "motion/react"
import ReactMarkdown from 'react-markdown'

import { getDevlogBySlug, formatDate, loadDevlogs } from '../utils/devlogs'

function DevLogPost() {
  const { slug } = useParams<{ slug: string }>()
  const [devlog, setDevlog] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [similarPosts, setSimilarPosts] = useState<any[]>([])


  useEffect(() => {
    async function loadDevLog() {
      if (!slug) {
        setNotFound(true)
        setLoading(false)
        return
      }

      try {
        const [log, allDevlogs] = await Promise.all([
          getDevlogBySlug(slug),
          loadDevlogs()
        ])

        if (log) {
          setDevlog(log)

          // Find similar posts based on shared tags
          const similar = allDevlogs
            .filter(post =>
              post.slug !== log.slug && // Exclude current post
              post.tags.some((tag: string) => log.tags.includes(tag)) // Has at least one shared tag
            )
            .sort((a, b) => {
              // Sort by number of shared tags (descending), then by date (most recent first)
              const aSharedTags = a.tags.filter((tag: string) => log.tags.includes(tag)).length
              const bSharedTags = b.tags.filter((tag: string) => log.tags.includes(tag)).length

              if (aSharedTags !== bSharedTags) {
                return bSharedTags - aSharedTags
              }

              return new Date(b.date).getTime() - new Date(a.date).getTime()
            })
            .slice(0, 3) // Take up to 3 most relevant posts

          setSimilarPosts(similar)
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
                className="bg-stone-800 text-stone-100 px-6 py-3 rounded-lg hover:bg-stone-800 transition-all duration-200 mx-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
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
        {/* Article Header - Two Panel Layout */}
        <motion.header
          className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Left Panel - Image (1/3 width) */}
          <motion.div
            className={`rounded-4xl border border-stone-800 aspect-square ${devlog.image ? '' : 'bg-stone-800'}`}
            style={devlog.image ? {
              backgroundImage: `url('${devlog.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            } : {}}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />

          {/* Right Panel - Content (2/3 width) */}
          <motion.div
            className="md:col-span-2 rounded-4xl border border-stone-800 p-6 flex flex-col justify-center"
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
            <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              {devlog.title}
            </h1>
            <p className="text-stone-800 text-lg mb-4">{devlog.excerpt}</p>
            <p className="text-stone-800">{formatDate(devlog.date)}</p>
          </motion.div>
        </motion.header>

        {/* Article Content */}
        <motion.article
          className="prose prose-stone prose-lg max-w-none"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-4xl font-bold text-stone-800 mt-8 mb-4 first:mt-0">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-3xl font-bold text-stone-800 mt-8 mb-4">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-2xl font-bold text-stone-800 mt-6 mb-3">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-lg text-stone-800 mb-4 leading-relaxed">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside text-lg text-stone-800 mb-4 space-y-2">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside text-lg text-stone-800 mb-4 space-y-2">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-lg text-stone-800">{children}</li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-stone-800 pl-4 italic text-lg text-stone-800 my-6">
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

      </motion.main>

      {/* Similar Posts Footer */}
      {similarPosts.length > 0 && (
        <motion.footer
          className="max-w-6xl mx-auto px-4 pb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="pt-8 border-t border-stone-800">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-stone-800">Similar DevLogs</h2>
              <Link to="/devlog">
                <motion.div
                  className="flex items-center space-x-2 bg-transparent text-stone-800 border border-stone-800 px-4 py-2 rounded-lg hover:bg-stone-800 hover:text-stone-100 hover:font-bold transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-sm font-medium">All DevLogs</span>
                </motion.div>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                >
                  <Link to={`/devlog/${post.slug}`}>
                    <motion.div
                      className={`relative rounded-4xl overflow-hidden cursor-pointer aspect-square ${post.image ? '' : 'bg-stone-800'}`}
                      style={post.image ? {
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url('${post.image}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      } : {}}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Content Card */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-stone-100 rounded-4xl p-4 shadow-lg">
                          {/* Header with Tags and Date */}
                          <div className="flex justify-between items-start mb-3">
                            {/* Category Tags */}
                            <div className="flex flex-wrap gap-1">
                              {post.tags && post.tags.length > 0 && post.tags.slice(0, 2).map((tag: string) => (
                                <span
                                  key={tag}
                                  className="bg-stone-800 text-stone-100 px-2 py-1 rounded-full text-xs font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* Date */}
                            <span className="text-stone-800 text-sm flex-shrink-0">{formatDate(post.date)}</span>
                          </div>

                          <h3 className="text-lg font-bold text-stone-800 mb-2 leading-tight">
                            {post.title}
                          </h3>
                          <p className="text-stone-800 text-sm">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.footer>
      )}
    </div>
  )
}

export default DevLogPost