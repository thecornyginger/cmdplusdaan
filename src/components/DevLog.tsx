import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "motion/react"
import { BookmarkSimple } from '@phosphor-icons/react'
import { Link, useSearchParams } from 'react-router-dom'
import { loadDevlogs, getAllTags, formatDate } from '../utils/devlogs'

function DevLog() {
  const [devlogs, setDevlogs] = useState<any[]>([])
  const [filteredDevlogs, setFilteredDevlogs] = useState<any[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [selectedTag, setSelectedTag] = useState('')
  const [loading, setLoading] = useState(true)
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)
  const [searchParams, setSearchParams] = useSearchParams()

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

        // Check if there's a tag parameter in the URL
        const tagFromUrl = searchParams.get('tag')
        if (tagFromUrl && tagData.includes(tagFromUrl)) {
          setSelectedTag(tagFromUrl)
        }
      } catch (error) {
        console.error('DevLog component: Failed to load devlogs:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [searchParams])

  useEffect(() => {
    if (selectedTag) {
      setFilteredDevlogs(devlogs.filter(devlog => devlog.tags.includes(selectedTag)))
      // Update URL when tag is selected
      setSearchParams({ tag: selectedTag })
    } else {
      setFilteredDevlogs(devlogs)
      // Remove tag parameter when showing all
      setSearchParams({})
    }
  }, [selectedTag, devlogs, setSearchParams])
  return (
    <div className="min-h-screen bg-stone-100">
      {/* Main Content */}
      <motion.main
        className="max-w-6xl mx-auto px-4 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >

        {/* Filter Tags */}
        {!loading && tags.length > 0 && (
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex gap-2 flex-wrap justify-center">
              <motion.button
                onClick={() => setSelectedTag('')}
                className={`px-4 py-2 rounded-4xl text-sm font-medium transition-all duration-200 ${selectedTag === ''
                  ? 'bg-stone-800 text-stone-100 font-bold'
                  : 'border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-stone-100 hover:font-bold'
                  }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                all
              </motion.button>
              {tags.map(tag => (
                <motion.button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-4xl text-sm font-medium transition-all duration-200 ${selectedTag === tag
                    ? 'bg-stone-800 text-stone-100 font-bold'
                    : 'border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-stone-100 hover:font-bold'
                    }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {tag}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Loading State */}
        {loading && (
          <motion.div
            className="flex justify-center items-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-stone-800">Loading devlogs...</div>
          </motion.div>
        )}

        {/* 3 Column Grid */}
        {!loading && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredDevlogs.map((devlog) => (
                <motion.div
                  key={devlog.slug}
                  className="rounded-4xl p-8 bg-stone-800 flex flex-col"
                  layout
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{
                    duration: 0.4,
                    layout: { duration: 0.5 }
                  }}
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    {devlog.tags && devlog.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="bg-stone-100 text-stone-800 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-stone-100 mb-4">{devlog.title}</h3>
                  <p className="text-stone-100 mb-4 flex-1">
                    {devlog.excerpt}
                  </p>
                  <div className="mt-auto flex items-center space-x-4">
                    <Link to={`/devlog/${devlog.slug}`}>
                      <motion.button
                        className="flex items-center space-x-2 bg-transparent text-stone-100 border border-stone-100 px-4 py-2 rounded-lg hover:bg-stone-100 hover:text-stone-800 hover:font-bold transition-all duration-200 w-fit cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onMouseEnter={() => setHoveredIcon(devlog.slug)}
                        onMouseLeave={() => setHoveredIcon(null)}
                      >
                        <motion.div
                          animate={{
                            scale: hoveredIcon === devlog.slug ? 1.1 : 1,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <BookmarkSimple
                            size={16}
                            weight={hoveredIcon === devlog.slug ? 'fill' : 'regular'}
                          />
                        </motion.div>
                        <span className="text-sm font-medium">Read DevLog</span>
                      </motion.button>
                    </Link>
                    <p className="text-xs text-stone-100">{formatDate(devlog.date)}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Empty State */}
        {!loading && filteredDevlogs.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-stone-800 text-lg">
              {selectedTag ? `No devlogs found with tag "${selectedTag}"` : 'No devlogs found. Check back soon!'}
            </p>
          </motion.div>
        )}
      </motion.main>
    </div>
  )
}

export default DevLog