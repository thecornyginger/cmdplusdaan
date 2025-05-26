import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'DevLog', href: '/devlog' },
];

const RUNNING_GIF = '/running-daan.gif';
const HURT_GIF = '/hurt-daan.gif';
const DEATH_GIF = '/death-daan.gif';
const DEATH_STATIC = '/death-daan-static.png'; // Static final frame
const HURT_DURATION = 1500; // ms, adjust if needed
const DEATH_DURATION = 1100; // ms, 13 frames at 10fps = 1.3 seconds
const CLICK_RESET_TIME = 3000; // ms, time to reset click counter
const DEATH_CLICK_THRESHOLD = 10;

export default function NavBar() {
  const [gif, setGif] = useState(RUNNING_GIF);
  const [menuOpen, setMenuOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [isDead, setIsDead] = useState(false);
  const timeoutRef = useRef(null);
  const clickResetRef = useRef(null);

  const handleGifClick = () => {
    // If already dead, don't do anything
    if (isDead) return;

    // Increment click count
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);

    // Reset click counter after inactivity
    if (clickResetRef.current) clearTimeout(clickResetRef.current);
    clickResetRef.current = setTimeout(() => {
      setClickCount(0);
    }, CLICK_RESET_TIME);

    // Check if death threshold reached
    if (newClickCount >= DEATH_CLICK_THRESHOLD) {
      setGif(DEATH_GIF + '?t=' + Date.now());
      setIsDead(true);
      // Clear any existing timeouts
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (clickResetRef.current) clearTimeout(clickResetRef.current);
      
      // Switch to static death image after animation completes
      timeoutRef.current = setTimeout(() => {
        setGif(DEATH_STATIC);
      }, DEATH_DURATION);
      return;
    }

    // Normal hurt animation
    if (gif.startsWith(HURT_GIF)) {
      // If already hurt, force reload by changing src
      setGif(HURT_GIF + '?t=' + Date.now());
    } else {
      setGif(HURT_GIF + '?t=' + Date.now());
    }
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (!isDead) { // Only return to running if not dead
        setGif(RUNNING_GIF);
      }
    }, HURT_DURATION);
  };

  // Clean up timeouts if component unmounts
  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (clickResetRef.current) clearTimeout(clickResetRef.current);
    };
  }, []);

  // Close menu on nav link click (mobile)
  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 left-0 w-full flex justify-center pointer-events-none z-50 px-[10px] md:px-0" style={{background: 'transparent'}}>
      <div className="max-w-2xl w-full mx-auto mt-4 bg-[#372a39] bg-opacity-95 shadow-2xl rounded-4xl flex flex-col pointer-events-auto" style={{backdropFilter: 'blur(4px)'}}>
        <div className="px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={gif}
              alt="Cmd+Daan Logo"
              className="h-20 rounded-lg object-cover cursor-pointer"
              onClick={handleGifClick}
              draggable={false}
            />
            <span className="text-[#f5e9bf] text-2xl font-bold tracking-tight" style={{ fontFamily: '"Press Start 2P", monospace' }}>Cmd+Daan</span>
          </div>
          {/* Hamburger Icon (Mobile) */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 text-[#f5e9bf] focus:outline-none"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-7 h-1 bg-daanwhite rounded transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-7 h-1 bg-daanwhite rounded my-1 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-7 h-1 bg-daanwhite rounded transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
          {/* Navigation Links */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-daanwhite hover:text-[#f2ede4] transition-colors text-base"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`md:hidden w-full bg-daanpurple bg-opacity-95 shadow transition-all duration-300 overflow-hidden rounded-4xl ${menuOpen ? 'max-h-40 py-2' : 'max-h-0 py-0'}`}
          style={{ transitionProperty: 'max-height, padding' }}
        >
          <div className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={handleNavClick}
                className="text-daanwhite hover:text-amber-50 transition-colors text-base py-2"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 