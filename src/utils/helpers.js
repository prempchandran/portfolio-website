/**
 * utils/helpers.js
 * ================
 * General utility functions used throughout the application.
 */

/**
 * Combine class names, filtering out falsy values
 * @param {...string} classes - Class names to combine
 * @returns {string} Combined class string
 */
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

/**
 * Debounce function to limit execution frequency
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait = 100) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

/**
 * Throttle function to ensure regular execution intervals
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export const throttle = (func, limit = 100) => {
  let inThrottle
  return (...args) => {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Format date string to readable format
 * @param {string} dateString - Date string (YYYY-MM format)
 * @returns {string} Formatted date
 */
export const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  })
}

/**
 * Generate a unique ID
 * @returns {string} Unique ID
 */
export const generateId = () => {
  return `id-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Check if an element is in viewport
 * @param {HTMLElement} element - Element to check
 * @param {number} offset - Offset from viewport edge
 * @returns {boolean} Whether element is in viewport
 */
export const isInViewport = (element, offset = 0) => {
  if (!element) return false
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= -offset &&
    rect.left >= -offset &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) + offset
  )
}

/**
 * Smooth scroll to an element
 * @param {string} elementId - ID of element to scroll to
 * @param {number} offset - Offset from top
 */
export const smoothScrollTo = (elementId, offset = 80) => {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

export default {
  cn,
  debounce,
  throttle,
  formatDate,
  generateId,
  isInViewport,
  smoothScrollTo
}
