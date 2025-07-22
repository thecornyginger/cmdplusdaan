import { Code } from '@phosphor-icons/react'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from "motion/react"
import { Squash as Hamburger } from 'hamburger-react'

function Navbar() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)


  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Backdrop to cover the gap above navbar */}
      <div className="sticky top-0 z-40 h-4 bg-stone-100"></div>
      <nav className="sticky top-4 z-50 bg-stone-100 px-4">
        <div className="max-w-6xl mx-auto border-t border-b border-stone-800">
          <div className="flex justify-between items-center px-6 py-3">
            <div className="flex items-center space-x-3">
              <Link to="/" className="w-8 h-8 bg-stone-800 rounded-full flex items-center justify-center">
                <Code size={20} weight="regular" className="text-stone-100" />
              </Link>
              <div className="hidden md:block">
                <div className="flex items-center space-x-6 ml-3">
                  <Link
                    to="/"
                    className={`text-stone-800 text-m transition-all duration-200 ${location.pathname === '/' ? 'font-bold' : 'font-medium hover:font-bold'
                      }`}
                  >
                    Home
                  </Link>
                  <Link
                    to="/devlog"
                    className={`text-stone-800 text-m transition-all duration-200 ${location.pathname === '/devlog' ? 'font-bold' : 'font-medium hover:font-bold'
                      }`}
                  >
                    DevLog
                  </Link>
                  <Link
                    to="/projects"
                    className={`text-stone-800 text-m transition-all duration-200 ${location.pathname === '/projects' ? 'font-bold' : 'font-medium hover:font-bold'
                      }`}
                  >
                    Projects
                  </Link>
                </div>
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Hamburger
                toggled={isMobileMenuOpen}
                toggle={setIsMobileMenuOpen}
                size={20}
                color="#1c1917"
                duration={0.3}
                distance="sm"
                rounded
              />
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="md:hidden border-t border-stone-800 bg-stone-100 overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <motion.div
                  className="px-6 py-4 space-y-3"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                  >
                    <Link
                      to="/"
                      onClick={closeMobileMenu}
                      className={`block text-stone-800 text-m transition-all duration-200 ${location.pathname === '/' ? 'font-bold' : 'font-medium hover:font-bold'
                        }`}
                    >
                      Home
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <Link
                      to="/devlog"
                      onClick={closeMobileMenu}
                      className={`block text-stone-800 text-m transition-all duration-200 ${location.pathname === '/devlog' ? 'font-bold' : 'font-medium hover:font-bold'
                        }`}
                    >
                      DevLog
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.25 }}
                  >
                    <Link
                      to="/projects"
                      onClick={closeMobileMenu}
                      className={`block text-stone-800 text-m transition-all duration-200 ${location.pathname === '/projects' ? 'font-bold' : 'font-medium hover:font-bold'
                        }`}
                    >
                      Projects
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  )
}

export default Navbar