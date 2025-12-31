/**
 * Button.jsx
 * ==========
 * Reusable button component with various styles and states.
 */

import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all',
  icon: 'p-2 rounded-lg hover:bg-white/10 transition-colors'
}

const sizes = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-6 py-3'
}

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = 'left',
  as = 'button',
  href,
  ...props
}, ref) => {
  const Component = as === 'a' || href ? motion.a : motion.button

  const baseClasses = `
    inline-flex items-center justify-center gap-2 font-medium
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant]}
    ${variant !== 'icon' ? sizes[size] : ''}
    ${className}
  `.trim()

  const content = (
    <>
      {loading && (
        <svg className="animate-spin h-4 w-4\" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {Icon && iconPosition === 'left' && !loading && <Icon size={18} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={18} />}
    </>
  )

  return (
    <Component
      ref={ref}
      className={baseClasses}
      disabled={disabled || loading}
      href={href}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {content}
    </Component>
  )
})

Button.displayName = 'Button'

export default Button
