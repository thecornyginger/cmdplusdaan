import { Code, List } from '@phosphor-icons/react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

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
              <button className="text-stone-800">
                <List size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar