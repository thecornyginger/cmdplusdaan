import { ArrowRight } from '@phosphor-icons/react'
import { motion } from "motion/react"
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Projects() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)
  return (
    <div className="min-h-screen bg-stone-100">
      {/* Main Content */}
      <motion.main
        className="max-w-6xl mx-auto px-4 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-8">
         

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Project 1 */}
            <motion.div
              className="rounded-4xl p-6 border border-stone-800 flex flex-col relative"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="absolute top-6 left-6 flex space-x-2">
                <span className="bg-stone-800 text-stone-100 px-2 py-1 rounded-full text-xs font-medium">
                  gamedev
                </span>
                <span className="bg-transparent text-stone-800 border border-stone-800 px-2 py-1 rounded-full text-xs font-medium">
                  early-access
                </span>
              </div>
              <h3 className="text-3xl font-bold text-stone-800 mb-3 mt-12">Idle Guild</h3>
              <p className="text-stone-800 mb-4 flex-1">
                Build and automate a fantasy adventurers' guild. An idle game inspired by D&D.
              </p>
              <Link to="/projects/idle-guild">
                <motion.div
                  className="flex items-center space-x-2 bg-transparent text-stone-800 border border-stone-800 px-4 py-2 rounded-lg hover:bg-stone-800 hover:text-stone-100 hover:font-bold transition-all duration-200 mt-4 w-fit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => setHoveredIcon('idle-guild')}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <motion.div
                    animate={{ 
                      scale: hoveredIcon === 'idle-guild' ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight 
                      size={16} 
                      weight={hoveredIcon === 'idle-guild' ? 'bold' : 'regular'} 
                    />
                  </motion.div>
                  <span className="text-sm font-medium">View Project</span>
                </motion.div>
              </Link>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              className="rounded-4xl p-6 border border-stone-800 flex flex-col relative"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="absolute top-6 left-6 flex space-x-2">
                <span className="bg-stone-800 text-stone-100 px-2 py-1 rounded-full text-xs font-medium">
                  appdev
                </span>
                <span className="bg-transparent text-stone-800 border border-stone-800 px-2 py-1 rounded-full text-xs font-medium">
                  in-development
                </span>
              </div>
              <h3 className="text-3xl font-bold text-stone-800 mb-3 mt-12">Anchor</h3>
              <p className="text-stone-800 mb-4 flex-1">
                A Mood & Habit Journal for iOS and Android.
              </p>
              <div className="bg-transparent text-stone-800 border border-stone-800 px-4 py-2 rounded-lg mt-auto w-fit">
                <span className="text-sm font-medium">Coming soon</span>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              className="rounded-4xl p-6 border border-stone-800 flex flex-col relative"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="absolute top-6 left-6 flex space-x-2">
                <span className="bg-stone-800 text-stone-100 px-2 py-1 rounded-full text-xs font-medium">
                  gamedev
                </span>
                <span className="bg-transparent text-stone-800 border border-stone-800 px-2 py-1 rounded-full text-xs font-medium">
                  in-development
                </span>
              </div>
              <h3 className="text-3xl font-bold text-stone-800 mb-3 mt-12">Untitled Idle RPG</h3>
              <p className="text-stone-800 mb-4 flex-1">
                A retro Idle RPG inspired by OSRS, D&D and Stardew Valley.
              </p>
              <div className="bg-transparent text-stone-800 border border-stone-800 px-4 py-2 rounded-lg mt-auto w-fit">
                <span className="text-sm font-medium">Coming soon</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.main>
    </div>
  )
}

export default Projects