/**
 * Footer.jsx
 * ==========
 * Site footer with contact info and social links.
 */

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: Mail, href: 'mailto:your@email.com', label: 'Email' }
  ]

  return (
    <footer id="contact" className="relative border-t border-white/5">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Contact CTA */}
          <div>
            <h2 className="text-3xl font-display font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-white/60 mb-6 max-w-md">
              Interested in collaboration, have questions, or just want to chat about 
              creative technology? I'd love to hear from you.
            </p>
            <a
              href="mailto:your@email.com"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Mail size={18} />
              Get in Touch
            </a>
          </div>

          {/* Right Column - Social Links */}
          <div className="flex flex-col items-start md:items-end gap-6">
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg glass-card text-white/60 hover:text-neon-cyan hover:border-neon-cyan/30 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-4 text-sm text-white/40">
              <a href="#ai-gems" className="hover:text-white transition-colors">AI Gems</a>
              <a href="#processing-sketches" className="hover:text-white transition-colors">Processing</a>
              <a href="#huggingface-apps" className="hover:text-white transition-colors">Hugging Face</a>
              <a href="#audio-max-msp" className="hover:text-white transition-colors">Audio</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© {currentYear} Creative Technologist Portfolio. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-red-400" fill="currentColor" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
