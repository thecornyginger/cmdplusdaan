import {
  Envelope,
  BookmarkSimple,
  ArrowRight,
  MastodonLogo,
  GameController
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { motion } from "motion/react"
import { useState } from 'react'

function Home() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)
  return (
    <motion.main
      className="max-w-6xl mx-auto px-4 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:items-stretch"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Left Side - Image with Text */}
        <motion.div
          className="relative lg:col-span-2 min-h-[600px] lg:min-h-0 bg-stone-800 rounded-4xl overflow-hidden"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img
            src="/1-bit-dan.png"
            alt="1-bit Daniel"
            className="absolute bottom-0 left-20 w-full h-6/9 object-contain object-bottom"
          />
          <div className="absolute inset-0 rounded-4xl p-8">
            <div className="text-left text-white">
              <p className="text-1xl">Hi!</p>
              <h2 className="text-6xl font-bold mb-4 leading-tight">My name is Daniel</h2>
            </div>
            <div className="absolute bottom-8 left-8 w-1/3">
              <p className="text-xs text-stone-100">I consider myself a hands-on learner who treats every project as a skill-building opportunity worth sharing.</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Header with Rounded Box */}
        <div className="space-y-6 lg:col-span-3">
          <motion.div
            className="rounded-4xl p-6 border border-stone-800"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-xl font-bold text-stone-800 mb-4">A Solo Dev who likes to keep things simple.</h2>
            <p className="text-m text-stone-800 leading-relaxed">
              I build tiny games, useful apps, and clean UI with a minimalist approach. Mostly because I can't handle complexity before my second coffee. I consider myself a hands-on learner who treats every project as a skill-building opportunity worth sharing. So, this is where I document my experiments, victories, and the code that definitely worked on my machine. Every project is a lesson in humility and the fine art of productive procrastination.
            </p>
          </motion.div>

          {/* Three Panels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <motion.div
              className="rounded-4xl p-4 border border-stone-800 flex flex-col"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-lg font-semibold text-stone-800 mb-2">DevLog</h3>
              <p className="text-stone-800 mb-4 flex-1">
                What I broke (and fixed) this week.
              </p>
              <Link to="/devlog">
                <motion.button
                  className="flex items-center space-x-2 bg-transparent text-stone-800 border border-stone-800 px-4 py-2 rounded-lg hover:bg-stone-800 hover:text-stone-100 hover:font-bold transition-all duration-200 mt-auto w-fit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => setHoveredIcon('devlog')}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <motion.div
                    animate={{
                      scale: hoveredIcon === 'devlog' ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <BookmarkSimple
                      size={16}
                      weight={hoveredIcon === 'devlog' ? 'fill' : 'regular'}
                    />
                  </motion.div>
                  <span className="text-sm font-medium">Read DevLog</span>
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              className="rounded-4xl p-4 border border-stone-800 flex flex-col"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h3 className="text-lg font-semibold text-stone-800 mb-2">Projects</h3>
              <p className="text-stone-800 mb-4 flex-1">
                Games and Apps I'm working on rn.
              </p>
              <Link to="/projects">
                <motion.div
                  className="flex items-center space-x-2 bg-transparent text-stone-800 border border-stone-800 px-4 py-2 rounded-lg hover:bg-stone-800 hover:text-stone-100 hover:font-bold transition-all duration-200 mt-auto w-fit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => setHoveredIcon('projects')}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <motion.div
                    animate={{
                      scale: hoveredIcon === 'projects' ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight
                      size={16}
                      weight={hoveredIcon === 'projects' ? 'bold' : 'regular'}
                    />
                  </motion.div>
                  <span className="text-sm font-medium">See All</span>
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              className="rounded-4xl p-4 border border-stone-800"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h3 className="text-lg font-semibold text-stone-800 mb-4">Get in Touch</h3>
              <div className="flex flex-col space-y-3">
                <motion.a
                  href="mailto:hi@cmdplusdaan.com"
                  className="group flex items-center space-x-3 text-stone-800 transition-all duration-200"
                  title="Email"
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => setHoveredIcon('email')}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <motion.div
                    animate={{
                      scale: hoveredIcon === 'email' ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Envelope
                      size={20}
                      weight={hoveredIcon === 'email' ? 'bold' : 'regular'}
                    />
                  </motion.div>
                  <span className="text-sm font-medium group-hover:font-bold transition-all duration-200">Email</span>
                </motion.a>
                <motion.a
                  href="https://mastodon.social/@cmdplusdaan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-3 text-stone-800 transition-all duration-200"
                  title="Mastodon"
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => setHoveredIcon('mastodon')}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <motion.div
                    animate={{
                      scale: hoveredIcon === 'mastodon' ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <MastodonLogo
                      size={20}
                      weight={hoveredIcon === 'mastodon' ? 'bold' : 'regular'}
                    />
                  </motion.div>
                  <span className="text-sm font-medium group-hover:font-bold transition-all duration-200">Mastodon</span>
                </motion.a>
                <motion.a
                  href="https://cmdplusdaan.itch.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-3 text-stone-800 transition-all duration-200"
                  title="itch.io"
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => setHoveredIcon('itch')}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <motion.div
                    animate={{
                      scale: hoveredIcon === 'itch' ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <GameController
                      size={20}
                      weight={hoveredIcon === 'itch' ? 'bold' : 'regular'}
                    />
                  </motion.div>
                  <span className="text-sm font-medium group-hover:font-bold transition-all duration-200">Itch.io</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.main>
  )
}

export default Home