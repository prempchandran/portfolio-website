/**
 * Navbar.jsx
 * ==========
 * Sticky navigation component with glassmorphism effect.
 * Features smooth scroll navigation and active section highlighting.
 */

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const Navbar = ({ categories, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMobileMenuOpen) setIsMobileMenuOpen(false)
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMobileMenuOpen])

  // Smooth scroll to section
  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    e.stopPropagation()
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/80 backdrop-blur-glass shadow-glass border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
              <span className="text-xl font-bold font-display">CT</span>
            </div>
            <span className="hidden sm:block font-display font-semibold text-lg group-hover:text-neon-cyan transition-colors">
              Creative Tech
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  onClick={(e) => scrollToSection(e, category.id)}
                  className={`nav-link px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium ${
                    activeSection === category.id
                      ? 'active bg-white/5'
                      : ''
                  }`}
                >
                  <Icon size={16} className={activeSection === category.id ? 'text-neon-cyan' : ''} />
                  <span>{category.title}</span>
                </a>
              )
            })}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <SocialLink href="https://github.com/yourusername" icon={Github} label="GitHub" />
            <SocialLink href="https://linkedin.com/in/yourusername" icon={Linkedin} label="LinkedIn" />
            <SocialLink href="mailto:your@email.com" icon={Mail} label="Email" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg glass-card"
            onClick={(e) => {
              e.stopPropagation()
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-neon-cyan" />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-dark-950/95 backdrop-blur-glass border-b border-white/5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-6 space-y-2">
              {categories.map((category, index) => {
                const Icon = category.icon
                return (
                  <motion.a
                    key={category.id}
                    href={`#${category.id}`}
                    onClick={(e) => scrollToSection(e, category.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeSection === category.id
                        ? 'bg-white/10 text-white'
                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <Icon size={20} className={activeSection === category.id ? 'text-neon-cyan' : ''} />
                    <span className="font-medium">{category.title}</span>
                  </motion.a>
                )
              })}

              {/* Social Links - Mobile */}
              <div className="flex items-center gap-4 pt-4 mt-4 border-t border-white/10">
                <SocialLink href="https://github.com/yourusername" icon={Github} label="GitHub" />
                <SocialLink href="https://linkedin.com/in/yourusername" icon={Linkedin} label="LinkedIn" />
                <SocialLink href="mailto:your@email.com" icon={Mail} label="Email" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

// Social link component
const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-lg text-white/60 hover:text-neon-cyan hover:bg-white/5 transition-all"
    aria-label={label}
  >
    <Icon size={20} />
  </a>
)

export default Navbar
