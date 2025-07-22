import { useState, useEffect } from 'react'
import { motion } from "motion/react"
import { Link, useSearchParams } from 'react-router-dom'
import { loadDevlogs, getAllTags, formatDate } from '../utils/devlogs'

function DevLog() {
  const [devlogs, setDevlogs] = useState<any[]>([])
  const [filteredDevlogs, setFilteredDevlogs] = useState<any[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [selectedTag, setSelectedTag] = useState('')
  const [loading, setLoading] = useState(true)
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

        {/* Card Grid */}
        {!loading && (
          <motion.div 
            key={`grid-${selectedTag}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {filteredDevlogs.map((devlog, index) => (
              <motion.div
                key={devlog.slug}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
              >
                <Link to={`/devlog/${devlog.slug}`}>
                  <motion.div
                    className={`relative rounded-4xl overflow-hidden cursor-pointer aspect-square ${devlog.image ? '' : 'bg-stone-800'
                      }`}
                    style={devlog.image ? {
                      backgroundImage: `url('${devlog.image}')`,
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
                            {devlog.tags && devlog.tags.length > 0 && devlog.tags.map((tag: string) => (
                              <span
                                key={tag}
                                className="bg-stone-800 text-stone-100 px-2 py-1 rounded-full text-xs font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Date */}
                          <span className="text-stone-800 text-sm flex-shrink-0">{formatDate(devlog.date)}</span>
                        </div>

                        <h3 className="text-lg font-bold text-stone-800 mb-2 leading-tight">
                          {devlog.title}
                        </h3>
                        <p className="text-stone-800 text-sm">
                          {devlog.excerpt}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
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