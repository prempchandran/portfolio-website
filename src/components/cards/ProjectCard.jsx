/**
 * ProjectCard.jsx
 * ===============
 * Project card component matching the Google Stitch design.
 * Features category-colored badges, hover effects, and various button styles.
 */

import { useState } from 'react'
import { motion } from 'framer-motion'
import EmbedContainer from '../containers/EmbedContainer'

// Category badge class mapping
const categoryBadgeClasses = {
  'ai-gems': 'category-badge ai-gems',
  'processing-sketches': 'category-badge processing',
  'ai-simulations': 'category-badge simulation',
  'huggingface-apps': 'category-badge huggingface',
  'audio-max-msp': 'category-badge audio'
}

// Category display names
const categoryDisplayNames = {
  'ai-gems': 'AI Gems',
  'processing-sketches': 'Processing',
  'ai-simulations': 'Simulation',
  'huggingface-apps': 'Hugging Face',
  'audio-max-msp': 'Audio / MSP'
}

const ProjectCard = ({ project, viewMode = 'grid' }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const {
    title,
    description,
    thumbnail,
    embedUrl,
    embedType,
    sourceUrl,
    liveUrl,
    tags,
    category,
    buttonType = 'source', // 'source' | 'launch' | 'listen' | 'view'
    isLive = false
  } = project

  // Determine button style based on type
  const renderButton = () => {
    switch (buttonType) {
      case 'launch':
        return (
          <button
            onClick={() => liveUrl ? window.open(liveUrl, '_blank') : setIsExpanded(true)}
            className="btn-secondary w-full"
          >
            Launch App
          </button>
        )
      case 'listen':
        return (
          <button
            onClick={() => liveUrl ? window.open(liveUrl, '_blank') : setIsExpanded(true)}
            className="btn-ghost w-full"
          >
            <span className="material-icons-round text-sm">play_arrow</span>
            Listen
          </button>
        )
      case 'view':
        return (
          <button
            onClick={() => liveUrl ? window.open(liveUrl, '_blank') : setIsExpanded(true)}
            className="w-full py-2.5 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20"
          >
            <span className="material-icons-round text-sm">visibility</span>
            View Case Study
          </button>
        )
      case 'source':
      default:
        return sourceUrl ? (
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full"
          >
            <span className="material-icons-round text-sm">code</span>
            View Source
          </a>
        ) : null
    }
  }

  // Render thumbnail based on embed type
  const renderThumbnail = () => {
    // Audio type - show animated bars
    if (embedType === 'audio' || category === 'audio-max-msp') {
      return (
        <div className="relative h-48 overflow-hidden bg-black flex items-center justify-center">
          {/* Category Badge */}
          <span className={categoryBadgeClasses[category] || 'category-badge audio'}>
            {categoryDisplayNames[category] || 'Audio / MSP'}
          </span>

          {/* Audio Bars Animation */}
          <div className="audio-bars opacity-70">
            <div className="audio-bar" style={{ animationDelay: '0s' }} />
            <div className="audio-bar" style={{ animationDelay: '0.2s' }} />
            <div className="audio-bar" style={{ animationDelay: '0.4s' }} />
            <div className="audio-bar" style={{ animationDelay: '0.1s' }} />
            <div className="audio-bar" style={{ animationDelay: '0.3s' }} />
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-4 left-4 right-4 h-1 bg-gray-800 rounded overflow-hidden">
            <div className="h-full bg-pink-500 w-1/3" />
          </div>
        </div>
      )
    }

    // Processing sketch - show play overlay
    if (embedType === 'processing' || category === 'processing-sketches') {
      return (
        <div className="relative h-48 overflow-hidden bg-gray-900 flex items-center justify-center">
          {/* Category Badge */}
          <span className={categoryBadgeClasses[category] || 'category-badge processing'}>
            {categoryDisplayNames[category] || 'Processing'}
          </span>

          {/* Background Image */}
          {thumbnail && (
            <div 
              className="absolute inset-0 bg-cover opacity-50"
              style={{ backgroundImage: `url(${thumbnail})` }}
            />
          )}

          {/* Pulsing Circle */}
          <div className="relative w-16 h-16 rounded-full bg-red-500/80 blur-xl animate-pulse" />
          
          {/* Play Button */}
          <button
            onClick={() => setIsExpanded(true)}
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Play sketch"
          >
            <span className="material-icons-round text-white text-4xl drop-shadow-lg z-10">
              play_circle_filled
            </span>
          </button>
        </div>
      )
    }

    // Default thumbnail with image
    return (
      <div className="relative h-48 overflow-hidden bg-gray-900">
        {/* Category Badge */}
        <span className={categoryBadgeClasses[category] || 'category-badge ai-gems'}>
          {categoryDisplayNames[category] || 'AI Gems'}
        </span>

        {/* Live Indicator */}
        {isLive && (
          <span className="absolute top-3 right-3 z-10 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
        )}

        {/* Thumbnail Image */}
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
              imageLoaded ? 'opacity-80 group-hover:opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
            <span className="text-white/20 font-display text-xl">{title}</span>
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    )
  }

  // Grid view card
  if (viewMode === 'grid') {
    return (
      <>
        <article className="group project-card card-hover">
          {/* Thumbnail Section */}
          {renderThumbnail()}

          {/* Content Section */}
          <div className="p-5 flex-1 flex flex-col">
            {/* Title */}
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white">
                {title}
              </h3>
              {(liveUrl || embedUrl) && (
                <span className="material-icons-round text-gray-400 text-sm rotate-45">
                  arrow_upward
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1 line-clamp-2">
              {description}
            </p>

            {/* Tags */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {tags?.slice(0, 3).map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Button */}
            {renderButton()}
          </div>
        </article>

        {/* Fullscreen Embed Modal */}
        {isExpanded && embedUrl && (
          <EmbedContainer
            url={embedUrl}
            title={title}
            type={embedType}
            isFullscreen={true}
            onClose={() => setIsExpanded(false)}
          />
        )}
      </>
    )
  }

  // List view card
  return (
    <>
      <article className="group project-card card-hover flex flex-col sm:flex-row">
        {/* Thumbnail - smaller in list view */}
        <div className="sm:w-48 sm:h-36 flex-shrink-0 overflow-hidden">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              <span className="text-white/20 text-sm">{title}</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`${categoryBadgeClasses[category] || ''} relative top-0 left-0`}>
                {categoryDisplayNames[category] || 'Project'}
              </span>
            </div>
            <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-1">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-3">
            <div className="flex gap-2 flex-wrap">
              {tags?.slice(0, 2).map((tag) => (
                <span key={tag} className="tag text-[10px]">
                  {tag}
                </span>
              ))}
            </div>
            {sourceUrl && (
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm font-medium hover:underline flex items-center gap-1"
              >
                <span className="material-icons-round text-sm">code</span>
                Source
              </a>
            )}
          </div>
        </div>
      </article>

      {/* Fullscreen Embed Modal */}
      {isExpanded && embedUrl && (
        <EmbedContainer
          url={embedUrl}
          title={title}
          type={embedType}
          isFullscreen={true}
          onClose={() => setIsExpanded(false)}
        />
      )}
    </>
  )
}

export default ProjectCard
