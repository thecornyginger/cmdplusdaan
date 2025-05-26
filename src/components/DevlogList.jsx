import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { loadDevlogs, getAllTags } from '../utils/devlogUtils'

function DevlogList() {
  const [devlogs, setDevlogs] = useState([])
  const [filteredDevlogs, setFilteredDevlogs] = useState([])
  const [tags, setTags] = useState([])
  const [selectedTag, setSelectedTag] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        const [devlogData, tagData] = await Promise.all([
          loadDevlogs(),
          getAllTags()
        ])
        setDevlogs(devlogData)
        setFilteredDevlogs(devlogData)
        setTags(tagData)
      } catch (error) {
        console.error('Error loading devlogs:', error)
      } finally {
        setLoading(false)
      }
    }
    
    loadData()
  }, [])

  useEffect(() => {
    if (selectedTag) {
      setFilteredDevlogs(devlogs.filter(devlog => devlog.tags.includes(selectedTag)))
    } else {
      setFilteredDevlogs(devlogs)
    }
  }, [selectedTag, devlogs])

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
          <motion.div 
            className="text-daanwhite text-xl flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-4 h-4 bg-daangreen rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            Loading devlogs...
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-daanpurple min-h-screen w-full">
      <div className="flex items-center justify-center p-4 pt-8">
        <div className="flex flex-col max-w-4xl w-full mx-auto">
          
          {/* Header */}
          <div className="w-full flex flex-col justify-center items-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-daanwhite mb-4 w-full text-left">
              DevLog
            </h1>
            <p className="text-lg text-daanwhite mb-6 w-full text-left">
              // What I broke this week (and occasionally fixed).
            </p>
          </div>

          {/* Filter Tags */}
          {tags.length > 0 && (
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setSelectedTag('')}
                  className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                    selectedTag === ''
                      ? 'bg-daangreen text-daanpurple'
                      : 'border border-daangreen text-daangreen hover:bg-daangreen/10'
                  }`}
                >
                  All
                </button>
                                  {tags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                        selectedTag === tag
                          ? 'bg-daangreen text-daanpurple'
                          : 'border border-daangreen text-daangreen hover:bg-daangreen/10'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
              </div>
            </motion.div>
          )}

                    {/* Devlog Posts */}
          <motion.div 
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.1
                }
              }
            }}
          >
            <AnimatePresence mode="wait">
              {filteredDevlogs.length === 0 ? (
                <motion.div 
                  key="no-results"
                  className="text-center py-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-daanwhite/60 text-lg">
                    {selectedTag ? `No devlogs found with tag "${selectedTag}"` : 'No devlogs found.'}
                  </p>
                  <p className="text-daanwhite/40 text-sm mt-2">
                    Check back later for updates!
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={`results-${selectedTag}`}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {filteredDevlogs.map((devlog, index) => (
                    <motion.article 
                      key={devlog.slug} 
                      className="bg-daangreen/20 border border-daangreen rounded-lg p-6 cursor-pointer"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { 
                          opacity: 1, 
                          y: 0,
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                          }
                        }
                      }}

                      layout
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-grow">
                          <Link 
                            to={`/devlog/${devlog.slug}`}
                            className="block group"
                          >
                            <h2 className="text-xl md:text-2xl font-bold text-daanwhite mb-2 group-hover:text-daangreen transition-colors">
                              {devlog.title}
                            </h2>
                          </Link>
                          
                          <p className="text-daanwhite/60 text-sm mb-3">
                            {formatDate(devlog.date)}
                          </p>
                          
                          {devlog.excerpt && (
                            <p className="text-daanwhite/80 mb-4 leading-relaxed">
                              {devlog.excerpt}
                            </p>
                          )}
                          
                          {devlog.tags.length > 0 && (
                            <div className="flex gap-2 flex-wrap">
                              {devlog.tags.map(tag => (
                                <span 
                                  key={tag}
                                  className="bg-daangreen/40 text-daangreen px-2 py-1 rounded text-xs"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        
                        <div className="flex-shrink-0">
                          <Link 
                            to={`/devlog/${devlog.slug}`}
                            className="inline-flex items-center gap-2 bg-daangreen/50 border border-daangreen text-daanwhite hover:bg-daangreen hover:text-daanpurple px-4 py-2 rounded font-medium transition-colors"
                          >
                            Read More
                            <svg 
                              className="w-4 h-4" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default DevlogList 