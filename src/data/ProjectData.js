/**
 * ProjectData.js
 * ==============
 * 
 * CENTRAL DATA FILE FOR ALL PORTFOLIO PROJECTS
 * 
 * This file contains all project information organized by category.
 * To add a new project, simply add a new object to the appropriate category array.
 * 
 * Project Object Structure:
 * {
 *   id: string,           // Unique identifier
 *   title: string,        // Display title
 *   description: string,  // Brief description
 *   thumbnail: string,    // Path to thumbnail image
 *   embedUrl: string,     // URL for iframe embedding (optional)
 *   embedType: string,    // 'iframe' | 'video' | 'processing' | 'huggingface' | 'audio'
 *   sourceUrl: string,    // Link to source code
 *   liveUrl: string,      // Link to live demo (optional)
 *   tags: string[],       // Technology tags
 *   category: string,     // Category ID for badge styling
 *   buttonType: string,   // 'source' | 'launch' | 'listen' | 'view'
 *   isLive: boolean,      // Show live indicator
 *   featured: boolean,    // Featured project
 *   date: string,         // Creation date
 * }
 */

// ============================================
// CATEGORY DEFINITIONS
// ============================================

export const categories = [
  {
    id: 'ai-gems',
    title: 'AI Gems',
    description: 'Explorations in artificial intelligence and machine learning experiments.',
    icon: 'auto_awesome'
  },
  {
    id: 'processing-sketches',
    title: 'Processing Sketches',
    description: 'Interactive visual experiments and generative art with Processing and p5.js.',
    icon: 'code'
  },
  {
    id: 'ai-simulations',
    title: 'AI Simulations',
    description: 'Agent-based models, evolutionary algorithms, and complex system simulations.',
    icon: 'hub'
  },
  {
    id: 'huggingface-apps',
    title: 'Hugging Face Apps',
    description: 'Machine learning applications deployed on Hugging Face Spaces.',
    icon: 'cloud'
  },
  {
    id: 'audio-max-msp',
    title: 'Audio / Max MSP',
    description: 'Sound design, audio visualizations, and interactive music systems.',
    icon: 'music_note'
  }
]

// ============================================
// PROJECT DATA BY CATEGORY
// ============================================

export const projectData = {
  // -----------------------------
  // AI GEMS
  // -----------------------------
  'ai-gems': [
    {
      id: 'neural-dreamscapes',
      title: 'Neural Dreamscapes',
      description: 'Generative Adversarial Network study creating infinite landscapes from pure noise.',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD82p9Nfa2Q9ggs8bgSo028Ha9TJ_xaGJX5_xQRx2pW-0-4AKbPiG6J7GR0b_gAsvdXntCACG6kaEON1Iir4JSs_0k2TjDIGlMAx0msHpmOedconP9wgI04alPbykuzT34orWZWEVCUf2IbJ4_f2jWn-_yoTc_FW7STXVEpP-za2gRY4bLN8Wii-s4qMbx6wg3cAtGpf1rXnJJWkMJM-oknCG6LdApwBeOuGoJ4hxcL0rw7GRqyAYrQuWTT4iZAVk1Z5xfqnd28vTic',
      embedUrl: '',
      embedType: 'iframe',
      sourceUrl: 'https://github.com/yourusername/neural-dreamscapes',
      liveUrl: '',
      tags: ['Python', 'TensorFlow'],
      category: 'ai-gems',
      buttonType: 'source',
      featured: true,
      date: '2024-01'
    },
    {
      id: 'latent-space-explorer',
      title: 'Latent Space Explorer',
      description: 'Visualizing high dimensional vectors in 2D space using UMAP and t-SNE algorithms.',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZwvQfvCMC-PxpiEWx7RvjwiqgjFhxWNBsRTLuMdKd1_5PN5THHxFsX4peeVCdXKtXQXcv8heB3nWL-R6BuS1k38Xec5nYfANJyfchNKisyi2z-rKcqfqTdClWrPQ-biwCUBUfQPgdpshNrsuVEG-ONVSoykcl5DKAtXXjl5lz9vCT4X_bGOBpEyj0EAntPA4OPSINQ0tcZoscgBsuRbOJOz_VMFIXTpY7MRgyFsncJaMheFLOXhQNhyj6UzilMB4WohSZk4QHjS2c',
      embedUrl: '',
      embedType: 'iframe',
      sourceUrl: 'https://github.com/yourusername/latent-explorer',
      tags: ['Python', 'NumPy'],
      category: 'ai-gems',
      buttonType: 'source',
      featured: false,
      date: '2024-02'
    }
  ],

  // -----------------------------
  // PROCESSING SKETCHES
  // -----------------------------
  'processing-sketches': [
    {
      id: 'recursive-flora',
      title: 'Recursive Flora',
      description: 'Interactive p5.js ecosystem that reacts to mouse movement and audio input density.',
      thumbnail: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      embedUrl: 'https://openprocessing.org/sketch/your-sketch-id/embed/',
      embedType: 'processing',
      sourceUrl: 'https://github.com/yourusername/recursive-flora',
      tags: ['p5.js', 'JavaScript'],
      category: 'processing-sketches',
      buttonType: 'source',
      featured: true,
      date: '2024-03'
    }
  ],

  // -----------------------------
  // AI SIMULATIONS
  // -----------------------------
  'ai-simulations': [
    {
      id: 'city-sim-v2',
      title: 'City Sim v2',
      description: 'Agent based traffic simulation exploring congestion patterns in urban environments.',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD90CzO584IoSzw7rw-JT9dRfYoLbHvjkIsOOauDuOgRkRCZ6I3bHhKOwjg_qDZzuOKLosP5dz9WoSjSvu-EvXF9Ej99DzwFmjL4Hr5pY2-eLijyfOPyOc_654cFEqkFtLwDd2VSr7Ztf975--d6NlmLvbJTrpLFe6aHbbDeRl_E2KDmNc4Y9d8UCJLnlZSilCRdqaWhB6ExZMNdxMAywj73r3JKNAV_RVMNUCkG57o8Gly4mF_BFqxbE8PHVuFFlaTPmuSzvz-kdPf',
      embedUrl: '',
      embedType: 'iframe',
      sourceUrl: 'https://github.com/yourusername/city-sim',
      liveUrl: 'https://your-case-study.com',
      tags: ['Unity', 'C#', 'ML Agents'],
      category: 'ai-simulations',
      buttonType: 'view',
      featured: true,
      date: '2024-04'
    }
  ],

  // -----------------------------
  // HUGGING FACE APPS
  // -----------------------------
  'huggingface-apps': [
    {
      id: 'sentiment-analyzer',
      title: 'Sentiment Analyzer',
      description: 'Real-time natural language processing app deployed via Spaces. Visualizes emotional tone.',
      thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArIMnJYhHH5NhXExvkjoe1G8_idxG1iF9N4smnDEVXQAtJnUt6-1cy-cy025ZjDNFBiCOpIFkU9Z3YV4ByYS2QIBYfUxGIMqymO4swwSSvn-tRRt9nI_EDu_obOV24wPsDz68-1DIiRYQKbd-TpmlpXBI7FJMbMK6BG7b8yM1v_mdIBdVpayUWbPklhnWCMmuzbxxp7WZxdmggO_8faQMCd94T02ILRIaojt2Ma3h3L2FSL4mFDyYXBdrNy56xMlKOCsg9EdjpJRIb',
      embedUrl: 'https://huggingface.co/spaces/yourusername/sentiment/embed',
      embedType: 'huggingface',
      sourceUrl: 'https://huggingface.co/spaces/yourusername/sentiment',
      liveUrl: 'https://huggingface.co/spaces/yourusername/sentiment',
      tags: ['NLP', 'Transformers'],
      category: 'huggingface-apps',
      buttonType: 'launch',
      isLive: true,
      featured: true,
      date: '2024-05'
    }
  ],

  // -----------------------------
  // AUDIO / MAX MSP
  // -----------------------------
  'audio-max-msp': [
    {
      id: 'granular-synth',
      title: 'Granular Synth',
      description: 'Max MSP patch for real-time granular synthesis of field recordings.',
      thumbnail: '',
      embedUrl: '',
      embedType: 'audio',
      sourceUrl: 'https://github.com/yourusername/granular-synth',
      liveUrl: '',
      tags: ['Max MSP', 'Jitter'],
      category: 'audio-max-msp',
      buttonType: 'listen',
      featured: true,
      date: '2024-06'
    }
  ]
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get all featured projects across all categories
 */
export const getFeaturedProjects = () => {
  const featured = []
  Object.values(projectData).forEach(categoryProjects => {
    categoryProjects.forEach(project => {
      if (project.featured) {
        featured.push(project)
      }
    })
  })
  return featured
}

/**
 * Get a single project by ID
 */
export const getProjectById = (id) => {
  for (const categoryProjects of Object.values(projectData)) {
    const project = categoryProjects.find(p => p.id === id)
    if (project) return project
  }
  return null
}

/**
 * Get projects by tag
 */
export const getProjectsByTag = (tag) => {
  const results = []
  Object.values(projectData).forEach(categoryProjects => {
    categoryProjects.forEach(project => {
      if (project.tags.includes(tag)) {
        results.push(project)
      }
    })
  })
  return results
}

/**
 * Get all unique tags
 */
export const getAllTags = () => {
  const tags = new Set()
  Object.values(projectData).forEach(categoryProjects => {
    categoryProjects.forEach(project => {
      project.tags.forEach(tag => tags.add(tag))
    })
  })
  return Array.from(tags).sort()
}

/**
 * Get total project count
 */
export const getTotalProjectCount = () => {
  return Object.values(projectData).reduce(
    (total, categoryProjects) => total + categoryProjects.length, 
    0
  )
}

export default projectData
