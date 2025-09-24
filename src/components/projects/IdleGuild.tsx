import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "motion/react"
import { GooglePlayLogo, Envelope, CaretRight, Butterfly } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { loadDevlogs, formatDate } from '../../utils/devlogs'

function IdleGuild() {
  const [showV010Details, setShowV010Details] = useState(false)
  const [showV020Details, setShowV020Details] = useState(false)
  const [showV030Details, setShowV030Details] = useState(false)
  const [idleGuildDevlogs, setIdleGuildDevlogs] = useState<any[]>([])
  const [devlogLoading, setDevlogLoading] = useState(true)

  useEffect(() => {
    async function loadIdleGuildDevlogs() {
      try {
        const allDevlogs = await loadDevlogs()
        const filteredDevlogs = allDevlogs.filter(devlog =>
          devlog.tags.includes('idle-guild')
        )
        setIdleGuildDevlogs(filteredDevlogs)
      } catch (error) {
        console.error('Failed to load idle guild devlogs:', error)
      } finally {
        setDevlogLoading(false)
      }
    }

    loadIdleGuildDevlogs()
  }, [])
  return (
    <div className="min-h-screen bg-stone-100">
      {/* Main Content */}
      <motion.main
        className="max-w-6xl mx-auto px-4 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* 3 Column Layout with Dividers */}
        <motion.div
          className="flex flex-col md:flex-row gap-8 md:gap-6 md:items-stretch"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Column 1 - Project Info */}
          <motion.div
            className="flex-1 space-y-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="rounded-4xl p-8 border border-stone-800">
              <div className="flex space-x-2 mb-6">
                <span className="bg-stone-800 text-stone-100 px-2 py-1 rounded-full text-xs font-medium">
                  gamedev
                </span>
                <span className="bg-transparent text-stone-800 border border-stone-800 px-2 py-1 rounded-full text-xs font-medium">
                  early-access
                </span>
              </div>
              <h2 className="text-2xl font-bold text-stone-800 mb-4">Idle Guild</h2>
              <p className="text-stone-800 mb-6">
                Build and automate a fantasy adventurers' guild. An idle game inspired by D&D where you manage adventurers, upgrade your guild, and watch your business grow.
              </p>
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.cmdplusdaan.idleguild"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-transparent text-stone-800 border border-stone-800 px-4 py-2 rounded-lg hover:bg-stone-800 hover:text-stone-100 hover:font-bold transition-all duration-200 w-fit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <GooglePlayLogo size={16} />
                <span className="text-sm font-medium">Google Play</span>
              </motion.a>
            </div>

            {/* Second Panel in Column 1 */}
            <div className="rounded-4xl p-8 border border-stone-800">
              <h3 className="text-2xl font-bold text-stone-800 mb-4">Tech Stack</h3>
              <ul className="text-stone-800 space-y-2">
                <li>• Made with Godot</li>
                <li>• Written in GDScript</li>
              </ul>
            </div>

            {/* Third Panel in Column 1 - Feedback */}
            <div className="rounded-4xl p-8 border border-stone-800">
              <h3 className="text-2xl font-bold text-stone-800 mb-4">Share Your Feedback</h3>
              <p className="text-stone-800 mb-4">
                Your input shapes Idle Guild's future! I take player suggestions very seriously and will adjust the roadmap accordingly.
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-bold text-stone-800 mb-3">Ways to reach me:</h4>
                <div className="flex flex-col space-y-3">
                  <motion.a
                    href="mailto:hi@cmdplusdaan.com"
                    className="group flex items-center space-x-3 text-stone-800 transition-all duration-200"
                    whileTap={{ scale: 0.98 }}
                  >
                    <Envelope size={20} />
                    <span className="text-sm font-medium group-hover:font-bold transition-all duration-200">Email</span>
                  </motion.a>
                  <motion.a
                    href="https://bsky.app/profile/cmdplusdaan.bsky.social"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-3 text-stone-800 transition-all duration-200"
                    whileTap={{ scale: 0.98 }}
                  >
                    <Butterfly size={20} />
                    <span className="text-sm font-medium group-hover:font-bold transition-all duration-200">Bluesky</span>
                  </motion.a>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-stone-800 mb-2">What I'd love to hear:</h4>
                <ul className="text-stone-800 space-y-1 text-sm">
                  <li>• Feature requests and ideas</li>
                  <li>• Bug reports and technical issues</li>
                  <li>• Balance feedback and difficulty concerns</li>
                  <li>• General thoughts on game direction</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Divider 1 */}
          <motion.div
            className="hidden md:block w-px bg-stone-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />

          {/* Column 2 - Roadmap */}
          <motion.div
            className="flex-1 space-y-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-stone-800">Roadmap</h2>

            {/* v0.1.0 */}
            <motion.div
              className="rounded-4xl p-6 border border-stone-800 relative cursor-pointer  transition-colors duration-200"
              onClick={() => setShowV010Details(!showV010Details)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="absolute top-6 right-6 text-stone-800">
                <motion.div
                  animate={{ rotate: showV010Details ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CaretRight size={20} />
                </motion.div>
              </div>

              <div className="flex items-center space-x-3">
                <span className="bg-stone-800 text-stone-100 px-2 py-1 rounded-full text-sm font-medium">
                  v0.1.0
                </span>
                <span className="text-sm font-bold text-stone-800">Released May 9, 2025</span>
              </div>

              <AnimatePresence>
                {showV010Details && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3 overflow-hidden mt-3"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-stone-800 mb-1">Early Access Release:</h4>
                      <ul className="text-stone-800 space-y-1 text-sm">
                        <li>• Buy Guild Operations and expand them to earn gold</li>
                        <li>• Hire Adventurers to automate the Guild Operations</li>
                        <li>• Random Guild Events that give rewards and speed buffs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-stone-800 mb-1">Minor updates leading to 0.2.0:</h4>
                      <ul className="text-stone-800 space-y-1 text-sm">
                        <li>• Bug fixes regarding save issues on some devices</li>
                        <li>• Touch and sensitivity issues on some devices</li>
                        <li>• Added QOL features based on player feedback (Events timer, Bulk buy, manual saving)</li>
                        <li>• Reduced memory usage</li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* v0.2.0 */}
            <motion.div
              className="rounded-4xl p-6 border border-stone-800 relative cursor-pointer  transition-colors duration-200"
              onClick={() => setShowV020Details(!showV020Details)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="absolute top-6 right-6 text-stone-800">
                <motion.div
                  animate={{ rotate: showV020Details ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CaretRight size={20} />
                </motion.div>
              </div>

              <div className="flex items-center space-x-3">
                <span className="bg-stone-800 text-stone-100 px-2 py-1 rounded-full text-sm font-medium">
                  v0.2.0
                </span>
                <span className="text-sm font-bold text-stone-800">Released July 4, 2025</span>
              </div>

              <AnimatePresence>
                {showV020Details && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3 overflow-hidden mt-3"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-stone-800 mb-1">The Prestige Update</h4>
                      <ul className="text-stone-800 space-y-1 text-sm">
                        <li>• Added the prestige system 'Patron's Favor'</li>
                        <li>• Pledge to your Patron for bonus buffs (at the cost of starting over)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-stone-800 mb-1">Minor updates leading to 0.3.0:</h4>
                      <ul className="text-stone-800 space-y-1 text-sm">
                        <li>• Added QOL features based on player feedback (Current event buffs show in the event menu)</li>
                        <li>• Added daily rewards for logging in</li>
                        <li>• Added 50 new random guild events</li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* v0.3.0 */}
            <motion.div
              className="rounded-4xl p-6 border border-stone-800 relative cursor-pointer transition-colors duration-200"
              onClick={() => setShowV030Details(!showV030Details)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="absolute top-6 right-6 text-stone-800">
                <motion.div
                  animate={{ rotate: showV030Details ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CaretRight size={20} />
                </motion.div>
              </div>

              <div className="flex items-center space-x-3">
                <span className="bg-transparent text-stone-800 border border-stone-800 px-2 py-1 rounded-full text-sm font-medium">
                  v0.3.0
                </span>
                <span className="text-sm text-stone-800">Planned for October 5th, 2025</span>
              </div>

              <AnimatePresence>
                {showV030Details && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3 overflow-hidden mt-3"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-stone-800 mb-1">Currently in development</h4>
                      <p className="text-sm text-stone-800 mb-2">Focus: Complete refactor of the game and its core mechanics.</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-stone-800 mb-1">New features planned:</h4>
                      <ul className="text-stone-800 space-y-1 text-sm">
                        <li>• Build your guild with dedicated Facilities and Operations</li>
                        <li>• Recruit adventurers to run and upgrade those Facilities</li>
                        <li>• Train Hirelings to keep your Operations humming</li>
                        <li>• Send adventurers on 50+ quests across the Sword Coast to level up</li>
                        <li>• …and more systems currently in the works</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm text-stone-800">This rebuild modernizes every loop so future updates land faster, deeper, and with the polish the guild deserves.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

          </motion.div>

          {/* Divider 2 */}
          <motion.div
            className="hidden md:block w-px bg-stone-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          />

          {/* Column 3 - DevLog */}
          <motion.div
            className="flex-1 space-y-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-stone-800">DevLog</h2>

            {devlogLoading ? (
              <div className="rounded-4xl p-8 bg-stone-800 flex flex-col">
                <div className="text-stone-100 text-center">
                  Loading devlogs...
                </div>
              </div>
            ) : idleGuildDevlogs.length > 0 ? (
              <div className="space-y-4">
                {idleGuildDevlogs.slice(0, 2).map((devlog) => (
                  <div key={devlog.slug} className="mb-4">
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
                  </div>
                ))}

                {idleGuildDevlogs.length > 2 && (
                  <div className="text-center">
                    <Link to="/devlog?tag=idle-guild">
                      <motion.button
                        className="flex items-center space-x-2 bg-transparent text-stone-800 border border-stone-800 px-4 py-2 rounded-lg hover:bg-stone-800 hover:text-stone-100 hover:font-bold transition-all duration-200 mx-auto"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="text-sm font-medium">View All Idle Guild DevLogs</span>
                      </motion.button>
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div className="rounded-4xl p-8 bg-stone-800 flex flex-col">
                <div className="text-stone-100 text-center">
                  No Idle Guild devlogs found yet. Check back soon!
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </motion.main>
    </div>
  )
}

export default IdleGuild