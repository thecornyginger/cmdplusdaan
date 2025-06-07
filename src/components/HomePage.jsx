import { motion } from 'framer-motion'
import DevlogPreview from './DevlogPreview'

function HomePage() {
  return (
    <div className="flex items-center justify-center p-4 pt-8">
      <div className="flex flex-col max-w-2xl md:max-w-5xl w-full mx-auto">
        {/* Text Content */}
        <motion.div 
          className="w-full flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-daanwhite mb-4 w-full text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Hi, I'm Daan.
          </motion.h1>
          <motion.p 
            className="text-lg text-daanwhite mb-6 w-full text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Welcome to my online junk drawer. This is where I stash everything I've built, broken, and figured out along the way.
          </motion.p>
        </motion.div>

        {/* Scrollable Panels Section */}
        <motion.div 
          className="w-full mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-daanwhite mb-6 w-full text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            Games that I'm working on rn
          </motion.h2>
          
          <div className="overflow-x-auto md:overflow-x-visible pb-4 -mx-4 px-4 md:mx-0 md:px-0">
            <div className="flex gap-4 md:gap-6 min-w-max md:min-w-0">
              {/* Panel 1 */}
              <div className="bg-daanbrown/20 border-2 border-daanbrown rounded-lg p-4 w-72 min-h-56 flex flex-col shrink-0">
                <h3 className="text-lg font-bold text-daanwhite mb-2">Idle Guild</h3>
                <p className="text-daanwhite/80 text-xs mb-3 flex-grow">
                Build and automate a fantasy adventurers' guild. An idle game inspired by D&D.
                </p>
                <div className="flex gap-2 flex-wrap mb-3">
                  <span className="bg-daanbrown/30 text-daanbrown px-2 py-1 rounded text-xs">gamedev</span>
                  <span className="bg-daanbrown/30 text-daanbrown px-2 py-1 rounded text-xs">godot</span>
                </div>
                <div className="flex gap-2 mt-auto">
                  <a target="_blank" href="https://play.google.com/store/apps/details?id=com.cmdplusdaan.idleguild" className="border border-daanbrown text-daanwhite hover:bg-daanbrown hover:text-daanpurple px-3 py-1.5 rounded text-xs font-bold transition-colors flex items-center gap-1.5">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 16 16">
                      <path d="M8 0v8l3-3h2L8 10 3 5h2l3 3V0z"/>
                      <path d="M0 14h16v2H0z"/>
                    </svg>
                    Google Play
                  </a>
                </div>
              </div>

              {/* Panel 2 */}
              <div className="bg-daanbrown/20 border-2 border-daanbrown rounded-lg p-4 w-72 min-h-56 flex flex-col shrink-0">
                <h3 className="text-lg font-bold text-daanwhite mb-2">Tiny Tiller</h3>
                <p className="text-daanwhite/80 text-xs mb-3 flex-grow">
                Plant, grow, and harvest on a cozy pixel island! A relaxing tapping game.
                </p>
                <div className="flex gap-2 flex-wrap mb-3">
                  <span className="bg-daanbrown/30 text-daanbrown px-2 py-1 rounded text-xs">gamedev</span>
                  <span className="bg-daanbrown/30 text-daanbrown px-2 py-1 rounded text-xs">godot</span>
                </div>
                <div className="flex gap-2 mt-auto">
                  <a target="_blank" href="https://cmdplusdaan.itch.io/tinytiller" className="border border-daanbrown text-daanwhite hover:bg-daanbrown hover:text-daanpurple px-3 py-1.5 rounded text-xs font-bold transition-colors flex items-center gap-1.5">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 16 16">
                      <path d="M0 0h7v2H2v5h5V5h2v7H0V0z"/>
                      <path d="M9 0h7v7h-2V2h-5V0z"/>
                      <path d="M10 1l5 5-1 1-5-5z"/>
                    </svg>
                    Play on itch.io
                  </a>
                </div>
              </div>

              {/* Panel 3 */}
              <div className="bg-daanbrown/20 border-2 border-daanbrown rounded-lg p-4 w-72 min-h-56 flex flex-col shrink-0">
                <h3 className="text-lg font-bold text-daanwhite mb-2">2048 Arcade</h3>
                <p className="text-daanwhite/80 text-xs mb-3 flex-grow">
                Merge tiles, reach 2048, with arcade twists on the classic sliding puzzle game.
                </p>
                <div className="flex gap-2 flex-wrap mb-3">
                  <span className="bg-daanbrown/30 text-daanbrown px-2 py-1 rounded text-xs">gamedev</span>
                  <span className="bg-daanbrown/30 text-daanbrown px-2 py-1 rounded text-xs">godot</span>
                </div>
                <div className="flex gap-2 mt-auto">
                  <a target="_blank" href="https://cmdplusdaan.itch.io/2048-arcade" className="border border-daanbrown text-daanwhite hover:bg-daanbrown hover:text-daanpurple px-3 py-1.5 rounded text-xs font-bold transition-colors flex items-center gap-1.5">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 16 16">
                      <path d="M0 0h7v2H2v5h5V5h2v7H0V0z"/>
                      <path d="M9 0h7v7h-2V2h-5V0z"/>
                      <path d="M10 1l5 5-1 1-5-5z"/>
                    </svg>
                    Play on itch.io
                  </a>
                </div>
              </div>
              
              {/* Panel 4 */}
              <div className="bg-daanbrown/20 border-2 border-daanbrown rounded-lg p-4 w-72 min-h-56 flex flex-col shrink-0">
                <h3 className="text-lg font-bold text-daanwhite mb-2">Tiny Survival (WIP)</h3>
                <p className="text-daanwhite/80 text-xs mb-3 flex-grow">
                 You're shipwrecked. Collect resources and build a base on a <s>dangerous</s> deserted island.
                </p>
                <div className="flex gap-2 flex-wrap mb-3">
                  <span className="bg-daanbrown/30 text-daanbrown px-2 py-1 rounded text-xs">gamedev</span>
                  <span className="bg-daanbrown/30 text-daanbrown px-2 py-1 rounded text-xs">godot</span>
                </div>
                <div className="flex gap-2 mt-auto">
                  <a href="/devlog?tag=tiny-survival" className="border border-daanbrown text-daanwhite hover:bg-daanbrown hover:text-daanpurple px-3 py-1.5 rounded text-xs font-bold transition-colors flex items-center gap-1.5">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 16 16">
                      <path d="M3 0h10v16H3V0z"/>
                      <path d="M5 3h6v1H5V3z"/>
                      <path d="M5 6h6v1H5V6z"/>
                      <path d="M5 9h4v1H5V9z"/>
                    </svg>
                    Read DevLog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Apps Section */}
        <motion.div 
          className="w-full mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-daanwhite mb-6 w-full text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
          >
            Apps that I'm working on rn
          </motion.h2>
          
          <div className="overflow-x-auto md:overflow-x-visible pb-4 -mx-4 px-4 md:mx-0 md:px-0">
            <div className="flex gap-4 md:gap-6 min-w-max md:min-w-0">
              {/* App Panel 1 */}
              <div className="bg-daanwhite/20 border-2 border-daanwhite rounded-lg p-4 w-72 min-h-56 flex flex-col shrink-0">
                <h3 className="text-lg font-bold text-daanwhite mb-2">Anchor</h3>
                <p className="text-daanwhite/80 text-xs mb-3 flex-grow">
                  A Mood & Habit Journal for iOS and Android.
                </p>
                <div className="flex gap-2 flex-wrap mb-3">
                  <span className="bg-daanwhite/30 text-daanwhite px-2 py-1 rounded text-xs">appdev</span>
                  <span className="bg-daanwhite/30 text-daanwhite px-2 py-1 rounded text-xs">react native</span>
                </div>
                                  <div className="flex gap-2 mt-auto">
                    <a href="/devlog?tag=anchor" className="border border-daanwhite text-daanwhite hover:bg-daanwhite hover:text-daanpurple px-3 py-1.5 rounded text-xs font-bold transition-colors flex items-center gap-1.5">
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 16 16">
                        <path d="M3 0h10v16H3V0z"/>
                        <path d="M5 3h6v1H5V3z"/>
                        <path d="M5 6h6v1H5V6z"/>
                        <path d="M5 9h4v1H5V9z"/>
                      </svg>
                      Read DevLog
                    </a>
                  </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* DevLog Section */}
        <motion.div 
          className="w-full mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-daanwhite mb-6 w-full text-left">
          DevLog // What I Broke This Week
          </h2>
          
          <div className="overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0">
            <DevlogPreview maxPosts={2} />
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default HomePage 