# The RICO Tapes - Podcast Website

A modern, responsive React application for "The RICO Tapes" podcast series, built with Vite, React, and styled-components.

## About

The RICO Tapes is a true crime podcast that investigates institutional corruption, military cover-ups, and the price of truth. This website serves as the official home for the podcast, featuring episode descriptions, Spotify integration, and a sleek dark-themed design.

## Features

- **Modern Design**: Clean, professional dark theme with gradient backgrounds
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Spotify Integration**: Embedded Spotify player for direct listening
- **Episode Management**: Easy-to-update episode listings
- **SEO Optimized**: Meta tags and semantic HTML structure

## Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: styled-components + CSS3
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Netlify

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/[your-username]/rico-tapes.git
cd rico-tapes

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production
```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

## Deployment

This project is configured for automatic deployment on Netlify:

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## Customization

### Adding New Episodes
Update the `episodes` array in `src/components/EpisodeList.jsx`

### Spotify Integration
Replace the Spotify embed URL in `src/components/Episode.jsx` with your actual podcast embed URL

### Styling
All styling is done through styled-components. Global styles can be found in `src/App.css`

## License

MIT License - feel free to use this template for your own podcast website.