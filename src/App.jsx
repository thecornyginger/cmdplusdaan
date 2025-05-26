import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import DevlogList from './components/DevlogList'
import DevlogPost from './components/DevlogPost'
import PrivacyPage from './components/PrivacyPage'
import PageTransition from './components/PageTransition'

function App() {
  const location = useLocation()

  return (
    <div className="bg-daanpurple min-h-screen w-full">
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
          <Route path="/devlog" element={<PageTransition><DevlogList /></PageTransition>} />
          <Route path="/devlog/:slug" element={<PageTransition><DevlogPost /></PageTransition>} />
          <Route path="/privacy" element={<PageTransition><PrivacyPage /></PageTransition>} />
      </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
