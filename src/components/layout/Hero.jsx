/**
 * Hero.jsx
 * ========
 * Landing hero section with animated background and introduction.
 */

import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'

const Hero = () => {
  const scrollToContent = () => {
    const firstSection = document.getElementById('ai-gems')
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
        >
          <Sparkles size={16} className="text-neon-cyan" />
          <span className="text-sm font-medium text-white/80">Creative Technologist</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6"
        >
          <span className="block text-white">Crafting</span>
          <span className="gradient-text">Digital Experiences</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-body"
        >
          Exploring the intersection of art and technology through AI experiments, 
          generative visuals, interactive simulations, and audio-reactive installations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToContent}
            className="btn-primary flex items-center gap-2"
          >
            Explore Projects
            <ChevronDown size={18} />
          </button>
          <a
            href="#contact"
            className="btn-secondary flex items-center gap-2"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10"
        >
          <StatItem number="50+" label="Projects" />
          <StatItem number="5" label="Categories" />
          <StatItem number="∞" label="Ideas" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <button
          onClick={scrollToContent}
          className="flex flex-col items-center gap-2 text-white/40 hover:text-neon-cyan transition-colors"
          aria-label="Scroll to content"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown size={20} />
        </button>
      </motion.div>
    </section>
  )
}

// Stat item component
const StatItem = ({ number, label }) => (
  <div className="text-center">
    <div className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">
      {number}
    </div>
    <div className="text-sm text-white/50">{label}</div>
  </div>
)

export default Hero
