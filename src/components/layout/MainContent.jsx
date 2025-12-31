/**
 * MainContent.jsx
 * ===============
 * Main content area with hero section, search, filters, and project grid.
 * Matches the Google Stitch design.
 */

import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '../cards/ProjectCard'

const MainContent = ({
  projects,
  activeFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
  viewMode,
  onViewModeChange,
  activeCategory
}) => {
  const filters = ['ALL', 'CODE', 'VISUALS', 'AUDIO']

  return (
    <main className="flex-1 p-6 md:p-12 overflow-y-auto h-auto md:h-screen">
      {/* Hero Section */}
      <header className="mb-12 max-w-4xl">
        <motion.h2 
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Building the future with <br/>
          <span className="text-gradient">code and pixels.</span>
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Explorations in Generative AI, Creative Coding, and Audio Synthesis. 
          Crafting digital experiences that bridge the gap between human imagination and machine logic.
        </motion.p>

        {/* Search Bar */}
        <motion.div 
          className="relative max-w-xl w-full group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Gradient glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-xl opacity-20 group-hover:opacity-40 blur transition duration-500 group-focus-within:opacity-60" />
          
          <div className="relative flex items-center">
            {/* Search Icon */}
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="material-icons-round text-gray-400 group-focus-within:text-primary transition-colors text-2xl">
                search
              </span>
            </div>
            
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="search-input"
            />
            
            {/* Keyboard Shortcut Hint */}
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-mono font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-slate-800 rounded border border-gray-200 dark:border-slate-700 opacity-60">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Filters and View Toggle */}
      <motion.div 
        className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 bg-gray-200 dark:bg-gray-800 p-1.5 rounded-xl">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => onFilterChange(filter)}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* View Mode Toggle */}
        <div className="flex gap-2 text-gray-500 dark:text-gray-500">
          <button 
            onClick={() => onViewModeChange('grid')}
            className={`p-2 hover:text-primary transition-colors ${viewMode === 'grid' ? 'text-primary' : ''}`}
            aria-label="Grid view"
          >
            <span className="material-icons-round">grid_view</span>
          </button>
          <button 
            onClick={() => onViewModeChange('list')}
            className={`p-2 hover:text-primary transition-colors ${viewMode === 'list' ? 'text-primary' : ''}`}
            aria-label="List view"
          >
            <span className="material-icons-round">view_list</span>
          </button>
        </div>
      </motion.div>

      {/* Project Grid */}
      <AnimatePresence mode="wait">
        {projects.length > 0 ? (
          <motion.div 
            key={`${activeCategory}-${activeFilter}`}
            className={viewMode === 'grid' ? 'card-grid' : 'space-y-4'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <ProjectCard 
                  project={project} 
                  viewMode={viewMode}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <span className="material-icons-round text-6xl text-gray-300 dark:text-gray-700 mb-4 block">
              search_off
            </span>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found matching your criteria.
            </p>
            <button
              onClick={() => {
                onSearchChange('')
                onFilterChange('ALL')
              }}
              className="mt-4 text-primary hover:underline"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Load More & Footer */}
      {projects.length > 0 && (
        <div className="mt-12 text-center pb-8">
          <button className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-primary hover:bg-primary/5 transition-all text-sm font-bold uppercase tracking-widest flex items-center gap-2 mx-auto">
            <span className="material-icons-round text-base">refresh</span>
            Load More Projects
          </button>
          <p className="mt-8 text-xs text-gray-400 dark:text-gray-600">
            © {new Date().getFullYear()} Prem Chandran. Built with love and logic.
          </p>
        </div>
      )}
    </main>
  )
}

export default MainContent
