import { motion } from "motion/react"
import { BookmarkSimple, AppStoreLogo, GooglePlayLogo } from '@phosphor-icons/react'

function Project() {
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
          {/* Column 1 - Full Height & Sticky */}
          <motion.div
            className="flex-1 space-y-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="rounded-4xl p-8 border border-stone-800">
              <div className="flex space-x-2 mb-6">
                <span className="bg-stone-800 text-stone-100 px-2 py-1 rounded-full text-xs font-medium">
                  Tiny Game
                </span>
                <span className="bg-transparent text-stone-800 border border-stone-800 px-2 py-1 rounded-full text-xs font-medium">
                  In Development
                </span>
              </div>
              <h2 className="text-2xl font-bold text-stone-800 mb-4">Project Name</h2>
              <p className="text-stone-800 mb-6">
                The full description of the game will be listed here.
              </p>
              <div className="flex space-x-3">
                <motion.button
                  className="flex items-center space-x-2 bg-transparent text-stone-800 border border-stone-800 px-4 py-2 rounded-lg hover:bg-stone-800 hover:text-stone-100 hover:font-bold transition-all duration-200 w-fit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <AppStoreLogo size={16} />
                  <span className="text-sm font-medium">App Store</span>
                </motion.button>
                <motion.button
                  className="flex items-center space-x-2 bg-transparent text-stone-800 border border-stone-800 px-4 py-2 rounded-lg hover:bg-stone-800 hover:text-stone-100 hover:font-bold transition-all duration-200 w-fit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <GooglePlayLogo size={16} />
                  <span className="text-sm font-medium">Google Play</span>
                </motion.button>
              </div>
            </div>

            {/* Second Panel in Column 1 */}
            <div className="rounded-4xl p-8 border border-stone-800">
              <h3 className="text-2xl font-bold text-stone-800 mb-4">Tech Stack</h3>
              <ul className="text-stone-800">
                <li><b>• Engine:</b> Godot 4.4</li>
                <li><b>• Language:</b> GDScript</li>
              </ul>
            </div>
          </motion.div>

          {/* Divider 1 */}
          <motion.div
            className="hidden md:block w-px bg-stone-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />

          {/* Column 2 */}
          <motion.div
            className="flex-1 space-y-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-stone-800">Roadmap</h2>
            <div className="rounded-4xl p-8 border border-stone-800">
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-transparent text-stone-800 border border-stone-800 px-2 py-1 rounded-full text-xs font-medium">
                  v01
                </span>
                <span className="text-2xs text-stone-800 font-regular">Planned for Q1, 2025</span>
              </div>
              <ul className="text-stone-800">
                <li>• Feature 1</li>
                <li>• Feature 2</li>
                <li>• Feature 3</li>
              </ul>
            </div>
          </motion.div>

          {/* Divider 2 */}
          <motion.div
            className="hidden md:block w-px bg-stone-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          />

          {/* Column 3 */}
          <motion.div
            className="flex-1 space-y-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-stone-800">DevLog</h2>
            <div className="rounded-4xl p-8 bg-stone-800 flex flex-col">
              <div className="flex space-x-2 mb-4">
                <span className="bg-stone-100 text-stone-800 px-2 py-1 rounded-full text-xs font-medium">
                  Category
                </span>
                <span className="bg-stone-100 text-stone-800 px-2 py-1 rounded-full text-xs font-medium">
                  Name Tag
                </span>
              </div>
              <h3 className="text-2xl font-bold text-stone-100 mb-4">DevLog Post Title</h3>
              <p className="text-stone-100 mb-4 flex-1">
                Short description of the DevLog post will be listed here.
              </p>
              <div className="mt-auto flex items-center space-x-4">
                <motion.button
                  className="flex items-center space-x-2 bg-transparent text-stone-100 border border-stone-100 px-4 py-2 rounded-lg hover:bg-stone-100 hover:text-stone-800 hover:font-bold transition-all duration-200 w-fit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <BookmarkSimple size={16} />
                  <span className="text-sm font-medium">Read DevLog</span>
                </motion.button>
                <p className="text-xs text-stone-100">Jan, 2025</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.main>
    </div>
  )
}

export default Project