import { motion } from 'framer-motion'

function PrivacyPage() {
  return (
    <div className="flex items-center justify-center p-4 pt-8">
      <div className="flex flex-col max-w-2xl md:max-w-5xl w-full mx-auto">
        {/* Hero Section */}
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
            Privacy Policy
          </motion.h1>
          <motion.p 
            className="text-base text-daanwhite mb-6 w-full text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            This Privacy Policy explains how information is handled in connection with the app and services provided by cmdplusdaan.com. Spoiler alert: we don't collect much — and we never sell your data.
          </motion.p>
        </motion.div>

        {/* Privacy Content */}
        <motion.div 
          className="w-full mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <div className="prose prose-invert max-w-none">
            <div className="text-daanwhite space-y-8">
              <section>
                <h2 className="text-xl font-bold text-daanwhite mb-3">What We Collect</h2>
                <p className="text-sm text-daanwhite/80 leading-relaxed mb-4">
                  We designed our app to respect your privacy. Therefore, we do not collect:
                </p>
                <ul className="text-sm text-daanwhite/80 leading-relaxed mb-4 list-disc list-inside space-y-1">
                  <li>Advertising IDs</li>
                  <li>Location data</li>
                  <li>Media, camera, or microphone access</li>
                  <li>Contacts or calendar access</li>
                  <li>Sensitive personal data</li>
                </ul>
                <p className="text-sm text-daanwhite/80 leading-relaxed mb-2">
                  We may collect basic technical data, such as:
                </p>
                <ul className="text-sm text-daanwhite/80 leading-relaxed list-disc list-inside space-y-1">
                  <li>App usage statistics (e.g., number of opens, crash reports)</li>
                  <li>Device type and OS version (for compatibility improvements)</li>
                </ul>
                <p className="text-sm text-daanwhite/80 leading-relaxed mt-4">
                  This info is anonymous and used solely to improve app performance and user experience.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-daanwhite mb-3">What We Don't Do</h2>
                <p className="text-sm text-daanwhite/80 leading-relaxed mb-4">
                  Just to be crystal clear:
                </p>
                <ul className="text-sm text-daanwhite/80 leading-relaxed list-disc list-inside space-y-1">
                  <li>We don't show ads.</li>
                  <li>We don't track you.</li>
                  <li>We don't use third-party SDKs.</li>
                  <li>We don't sell, rent, or share your data with marketers or anyone else.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-daanwhite mb-3">Why We Collect Anything At All</h2>
                <p className="text-sm text-daanwhite/80 leading-relaxed mb-4">
                  Minimal technical data helps us:
                </p>
                <ul className="text-sm text-daanwhite/80 leading-relaxed list-disc list-inside space-y-1">
                  <li>Fix bugs</li>
                  <li>Optimize performance</li>
                  <li>Ensure your app works properly on various devices</li>
                </ul>
                <p className="text-sm text-daanwhite/80 leading-relaxed mt-4">
                  That's it. No secret agendas, no shady business.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-daanwhite mb-3">Data Security</h2>
                <p className="text-sm text-daanwhite/80 leading-relaxed">
                  We use appropriate security measures to keep any technical data safe. No personal info = no personal risk.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-daanwhite mb-3">Children's Privacy</h2>
                <p className="text-sm text-daanwhite/80 leading-relaxed">
                  Our app is not intended for children under 13. We do not knowingly collect data from children, and if that somehow happens, we'll delete it pronto.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-daanwhite mb-3">Your Rights</h2>
                <p className="text-sm text-daanwhite/80 leading-relaxed mb-4">
                  You can:
                </p>
                <ul className="text-sm text-daanwhite/80 leading-relaxed list-disc list-inside space-y-1">
                  <li>Contact us to ask what data (if any) is associated with your app use</li>
                  <li>Request deletion of any identifiable data (though we probably don't have any to begin with)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-daanwhite mb-3">Website & Third-Party Services</h2>
                <p className="text-sm text-daanwhite/80 leading-relaxed">
                  This website is pretty minimal when it comes to data collection. We don't use analytics, 
                  tracking pixels, or any of that invasive stuff. The only data that gets collected is 
                  basic server logs (like your IP address and what pages you visit) which is standard 
                  for any website. This site might link to external services (like GitHub, itch.io, or Google Play) 
                  for our projects. Those services have their own privacy policies, so check those 
                  out if you're clicking through.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-daanwhite mb-3">Changes to This Policy</h2>
                <p className="text-sm text-daanwhite/80 leading-relaxed">
                  If we ever change our approach or collect more info, we'll update this policy and reflect that here. We'll keep it transparent, always. Last updated: {new Date().toLocaleDateString()}.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-daanwhite mb-3">Contact</h2>
                <p className="text-sm text-daanwhite/80 leading-relaxed mb-2">
                  Got questions?
                </p>
                <p className="text-sm text-daanwhite/80 leading-relaxed">
                  Email us at: <a href="mailto:hi@cmdplusdaan.com" className="text-daanbrown hover:text-daanbrown/80 transition-colors">hi@cmdplusdaan.com</a>
                </p>
                <p className="text-sm text-daanwhite/80 leading-relaxed">
                  Website: <a href="https://cmdplusdaan.com" className="text-daanbrown hover:text-daanbrown/80 transition-colors">https://cmdplusdaan.com</a>
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPage 