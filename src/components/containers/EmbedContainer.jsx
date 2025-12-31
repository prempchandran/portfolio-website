/**
 * EmbedContainer.jsx
 * ==================
 * Reusable container for embedding iframes with:
 * - Loading states
 * - Fullscreen toggle
 * - Different aspect ratios for different content types
 * - Error handling
 */

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EmbedContainer = ({ 
  url, 
  title, 
  type = 'iframe', 
  isFullscreen = false,
  onClose,
  className = ''
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setHasError(false)
  }, [url])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isFullscreen && onClose) {
        onClose()
      }
    }

    if (isFullscreen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isFullscreen, onClose])

  const getAspectRatioClass = () => {
    switch (type) {
      case 'huggingface':
        return 'aspect-huggingface'
      case 'video':
        return 'aspect-video'
      case 'processing':
        return 'aspect-square'
      default:
        return 'aspect-video'
    }
  }

  const handleLoad = () => setIsLoading(false)
  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  if (!isFullscreen) {
    return (
      <div className={`iframe-container ${getAspectRatioClass()} ${className}`}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
            <div className="flex flex-col items-center gap-3">
              <span className="material-icons-round text-3xl text-primary animate-spin">
                hourglass_empty
              </span>
              <span className="text-sm text-gray-400">Loading...</span>
            </div>
          </div>
        )}

        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
            <div className="flex flex-col items-center gap-3 text-center p-4">
              <span className="material-icons-round text-3xl text-red-400">error_outline</span>
              <span className="text-sm text-gray-400">Failed to load content</span>
              <button
                onClick={() => {
                  setHasError(false)
                  setIsLoading(true)
                }}
                className="text-sm text-primary hover:underline"
              >
                Try again
              </button>
            </div>
          </div>
        )}

        <iframe
          src={url}
          title={title}
          onLoad={handleLoad}
          onError={handleError}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={isLoading || hasError ? 'opacity-0' : 'opacity-100 transition-opacity'}
        />
      </div>
    )
  }

  // Fullscreen modal
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fullscreen-container flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h3 className="font-display font-semibold text-lg text-white">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-400 hover:text-white"
            aria-label="Close"
          >
            <span className="material-icons-round">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background-dark z-10">
              <div className="flex flex-col items-center gap-3">
                <span className="material-icons-round text-4xl text-primary animate-spin">
                  hourglass_empty
                </span>
                <span className="text-gray-400">Loading {title}...</span>
              </div>
            </div>
          )}

          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-background-dark z-10">
              <div className="flex flex-col items-center gap-4 text-center p-6">
                <span className="material-icons-round text-5xl text-red-400">error_outline</span>
                <div>
                  <p className="text-gray-300 mb-2">Failed to load content</p>
                  <p className="text-sm text-gray-500">The embed might be unavailable</p>
                </div>
                <button
                  onClick={() => {
                    setHasError(false)
                    setIsLoading(true)
                  }}
                  className="btn-secondary"
                >
                  Try again
                </button>
              </div>
            </div>
          )}

          <iframe
            src={url}
            title={title}
            onLoad={handleLoad}
            onError={handleError}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={`w-full h-full ${isLoading || hasError ? 'opacity-0' : 'opacity-100 transition-opacity'}`}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default EmbedContainer
