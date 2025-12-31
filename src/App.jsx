/**
 * App.jsx
 * =======
 * Main application component matching the Google Stitch design.
 * Features a sidebar layout with main content area.
 */

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Layout Components
import Sidebar from './components/layout/Sidebar'
import MainContent from './components/layout/MainContent'

// Data
import { projectData, categories } from './data/ProjectData'

function App() {
  // State for active category filter
  const [activeCategory, setActiveCategory] = useState('all')
  
  // State for content type filter (ALL, CODE, VISUALS, AUDIO)
  const [activeFilter, setActiveFilter] = useState('ALL')
  
  // State for search query
  const [searchQuery, setSearchQuery] = useState('')
  
  // State for view mode (grid/list)
  const [viewMode, setViewMode] = useState('grid')

  // Filter projects based on active filters and search
  const filteredProjects = useMemo(() => {
    let projects = []

    // Get projects from selected category or all categories
    if (activeCategory === 'all') {
      Object.values(projectData).forEach(categoryProjects => {
        projects = [...projects, ...categoryProjects]
      })
    } else {
      projects = projectData[activeCategory] || []
    }

    // Filter by content type
    if (activeFilter !== 'ALL') {
      projects = projects.filter(project => {
        const tags = project.tags.map(t => t.toLowerCase())
        switch (activeFilter) {
          case 'CODE':
            return tags.some(t => 
              ['python', 'javascript', 'react', 'c#', 'processing'].includes(t)
            )
          case 'VISUALS':
            return tags.some(t => 
              ['p5.js', 'processing', 'tensorflow', 'unity', 'jitter'].includes(t)
            )
          case 'AUDIO':
            return tags.some(t => 
              ['max msp', 'audio', 'jitter', 'synthesis'].includes(t)
            )
          default:
            return true
        }
      })
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      projects = projects.filter(project => 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    return projects
  }, [activeCategory, activeFilter, searchQuery])

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <Sidebar 
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Main Content */}
      <MainContent
        projects={filteredProjects}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        activeCategory={activeCategory}
      />
    </div>
  )
}

export default App
