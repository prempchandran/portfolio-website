/**
 * ProjectSection.jsx
 * ==================
 * Reusable section component that displays a category of projects.
 * Uses a responsive grid layout for project cards.
 */

import { motion } from 'framer-motion'
import ProjectCard from '../cards/ProjectCard'

const ProjectSection = ({ id, title, description, icon: Icon, projects }) => {
  return (
    <section id={id} className="section-container">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          {Icon && (
            <div className="p-2 rounded-lg glass-card">
              <Icon size={24} className="text-neon-cyan" />
            </div>
          )}
          <h2 className="section-title mb-0">{title}</h2>
        </div>
        {description && (
          <p className="text-white/60 max-w-2xl text-lg">{description}</p>
        )}
      </div>

      {/* Projects Grid */}
      {projects && projects.length > 0 ? (
        <div className="card-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      ) : (
        <EmptyState categoryTitle={title} />
      )}
    </section>
  )
}

// Empty state when no projects exist in a category
const EmptyState = ({ categoryTitle }) => (
  <div className="glass-card p-12 text-center">
    <p className="text-white/40 text-lg">
      No projects yet in {categoryTitle}. Check back soon!
    </p>
  </div>
)

export default ProjectSection
