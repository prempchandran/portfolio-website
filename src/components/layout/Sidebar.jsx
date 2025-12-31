/**
 * Sidebar.jsx
 * ===========
 * Sticky sidebar with profile info, navigation, and social links.
 * Matches the Google Stitch design exactly.
 */

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Profile image - local image in public folder
const PROFILE_IMAGE = '/images/prem.jpg'

// Icon mapping for categories
const categoryIcons = {
  'ai-gems': 'auto_awesome',
  'processing-sketches': 'code',
  'ai-simulations': 'hub',
  'huggingface-apps': 'cloud',
  'audio-max-msp': 'music_note'
}

const Sidebar = ({ categories, activeCategory, onCategoryChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <aside className="w-full md:w-72 flex-shrink-0 bg-white dark:bg-[#0f172a] border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 sticky top-0 z-50 md:h-screen flex flex-col justify-between">
      {/* Top Section - Profile & Navigation */}
      <div className="p-6 md:p-8">
        {/* Profile Section */}
        <div className="flex items-start gap-4 mb-10">
          {/* Profile Image */}
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary shrink-0 shadow-lg shadow-primary/10">
            <img 
              src={PROFILE_IMAGE}
              alt="Prem Chandran" 
              className="object-cover w-full h-full"
            />
          </div>
          
          {/* Profile Info */}
          <div className="pt-1">
            <h1 className="font-display font-bold text-xl leading-tight uppercase tracking-wider text-gray-900 dark:text-white">
              Prem Chandran
            </h1>
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 tracking-widest uppercase mb-3">
              Creative Tech
            </p>
            <p className="text-xs leading-relaxed text-gray-600 dark:text-secondary-dark font-medium">
              Bridging imagination and logic through generative AI, code, and sonic landscapes.
            </p>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden w-full mb-4 py-2 px-4 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-between"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="text-sm font-medium">Menu</span>
          <span className="material-icons-round text-sm">
            {isMobileMenuOpen ? 'expand_less' : 'expand_more'}
          </span>
        </button>

        {/* Navigation */}
        <nav className={`space-y-2 ${isMobileMenuOpen ? 'block' : 'hidden md:block'}`}>
          {/* All Projects Link */}
          <button
            onClick={() => {
              onCategoryChange('all')
              setIsMobileMenuOpen(false)
            }}
            className={`nav-link w-full ${activeCategory === 'all' ? 'active' : ''}`}
          >
            <span className="material-icons-round text-xl">apps</span>
            All Projects
          </button>

          {/* Category Links */}
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                onCategoryChange(category.id)
                setIsMobileMenuOpen(false)
              }}
              className={`nav-link w-full ${activeCategory === category.id ? 'active' : ''}`}
            >
              <span className="material-icons-round">
                {categoryIcons[category.id] || 'folder'}
              </span>
              {category.title}
            </button>
          ))}
        </nav>
      </div>

      {/* Bottom Section - Social Links */}
      <div className="p-6 md:p-8 border-t border-gray-200 dark:border-gray-800">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4 font-semibold">
          Connect
        </p>
        <div className="flex gap-4">
          <a 
            href="https://github.com/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="GitHub"
          >
            <span className="material-icons-round text-sm">code</span>
          </a>
          <a 
            href="mailto:your@email.com"
            className="social-btn"
            aria-label="Email"
          >
            <span className="material-icons-round text-sm">alternate_email</span>
          </a>
          <a 
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="LinkedIn"
          >
            <span className="material-icons-round text-sm">rss_feed</span>
          </a>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
