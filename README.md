# 🎨 Prem Chandran - Creative Technologist Portfolio

A modern, interactive portfolio website built with React and Tailwind CSS. Features a dark theme with lime green accents, sidebar navigation, and category-based project filtering.

**Design by:** Google Stitch  
**Framework:** React + Vite + Tailwind CSS

![Portfolio Preview](./public/images/preview.png)

## ✨ Features

- **Sidebar Navigation** - Sticky sidebar with profile info and category links
- **Category Filtering** - Filter projects by AI, Processing, Audio, etc.
- **Content Type Filters** - ALL, CODE, VISUALS, AUDIO toggles
- **Search Functionality** - Real-time project search
- **Grid/List Views** - Toggle between view modes
- **Responsive Design** - Mobile-friendly sidebar collapse
- **Dark Mode** - Deep blue background with lime accents
- **Category Badges** - Color-coded project categories
- **Embed Support** - iframe containers for live demos

## 📁 Project Structure

```
portfolio-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── cards/
│   │   │   └── ProjectCard.jsx      # Project card with category badges
│   │   ├── containers/
│   │   │   └── EmbedContainer.jsx   # iframe wrapper
│   │   ├── layout/
│   │   │   ├── Sidebar.jsx          # Left sidebar with nav
│   │   │   ├── MainContent.jsx      # Hero, filters, grid
│   │   │   └── Footer.jsx
│   │   └── ui/
│   │       └── Button.jsx
│   ├── data/
│   │   └── ProjectData.js           # ⭐ EDIT THIS to add projects!
│   ├── hooks/
│   │   └── useScrollProgress.js
│   ├── styles/
│   │   └── index.css                # Tailwind + custom styles
│   ├── utils/
│   │   └── helpers.js
│   ├── App.jsx                      # Main app with state
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# http://localhost:5173
```

## 📝 Adding Your Projects

Edit `src/data/ProjectData.js` to add your projects:

```javascript
{
  id: 'unique-id',
  title: 'Project Title',
  description: 'Brief description of the project...',
  thumbnail: '/images/projects/your-image.jpg',
  embedUrl: 'https://your-embed-url.com',
  embedType: 'iframe',  // 'iframe' | 'processing' | 'huggingface' | 'audio'
  sourceUrl: 'https://github.com/...',
  liveUrl: 'https://your-demo.com',
  tags: ['Python', 'TensorFlow'],
  category: 'ai-gems',  // Category ID for badge color
  buttonType: 'source', // 'source' | 'launch' | 'listen' | 'view'
  isLive: false,        // Show live indicator
  featured: true,
  date: '2024-01'
}
```

### Category Badge Colors

| Category | Badge Color |
|----------|-------------|
| `ai-gems` | Cyan |
| `processing-sketches` | Purple |
| `ai-simulations` | Blue |
| `huggingface-apps` | Yellow |
| `audio-max-msp` | Pink |

### Button Types

| Type | Style | Use Case |
|------|-------|----------|
| `source` | Green gradient | GitHub/source links |
| `launch` | Outline | Live apps (HF Spaces) |
| `listen` | Ghost | Audio projects |
| `view` | Yellow gradient | Case studies |

## 🎨 Customization

### Update Profile

Edit `src/components/layout/Sidebar.jsx`:
- Change `PROFILE_IMAGE` URL
- Update name and tagline
- Modify social links

### Change Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  'primary': { DEFAULT: '#bef264', ... },  // Lime green
  'accent': {
    cyan: '#22d3ee',
    purple: '#c084fc',
    // ...
  }
}
```

### Add Categories

1. Add to `categories` array in `ProjectData.js`
2. Add icon mapping in `Sidebar.jsx`
3. Add badge class in `index.css`

## 🌐 Deployment

### GitHub Pages

1. Update `vite.config.js`:
   ```javascript
   base: '/your-repo-name/'
   ```

2. Push to GitHub - auto-deploys via GitHub Actions

### Vercel / Netlify

Connect your GitHub repo - auto-detects Vite configuration.

## 📦 Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 🔧 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Material Icons** - Iconography

## 📄 License

MIT License - feel free to use for your own portfolio!

---

Made with ❤️ by Prem Chandran
