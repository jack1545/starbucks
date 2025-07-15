# Starbucks Secret Menu Guide

A modern Next.js website showcasing the ultimate collection of Starbucks secret menu drinks, featuring both official app recipes and community-created custom beverages.

## 🌟 Features

- **Comprehensive Recipe Collection**: Explore hundreds of secret menu drinks with detailed instructions
- **Official App Integration**: Track the latest official Starbucks secret menu launches
- **Community Contributions**: User-generated recipes and reviews
- **Advanced Search & Filtering**: Find drinks by category, difficulty, ingredients, and more
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **SEO Optimized**: Built with search engine optimization best practices

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom Starbucks brand colors
- **Icons**: Lucide React
- **Components**: Headless UI for enhanced interactivity
- **Deployment**: Vercel (recommended)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd starbucks-secret-menu/web
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
web/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Homepage
│   │   └── globals.css      # Global styles
│   ├── components/          # React components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Footer.tsx       # Site footer
│   │   └── RecipeCard.tsx   # Recipe display card
│   └── data/                # Data files and types
│       └── recipes.ts       # Recipe data and interfaces
├── public/                  # Static assets
├── tailwind.config.js       # TailwindCSS configuration
├── next.config.ts           # Next.js configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Design System

### Color Palette

- **Primary Green**: #00704A (Starbucks brand color)
- **Dark Green**: #1E3932 (Secondary brand color)
- **Gold**: #D4A574 (Accent color)
- **Category Colors**:
  - Pink: #FF69B4 (Frappuccinos)
  - Blue: #4169E1 (Refreshers)
  - Orange: #FF8C00 (Lattes)
  - Purple: #9370DB (Teas)
  - Red: #DC143C (Holiday specials)

### Typography

- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 400, 500, 600, 700, 800, 900

## 📱 Key Components

### Header
- Responsive navigation with dropdown menus
- Search functionality
- Mobile-friendly hamburger menu

### RecipeCard
- Featured image with overlay badges
- Recipe metadata (difficulty, time, rating)
- Category color coding
- Hover effects and animations

### Footer
- Comprehensive site navigation
- Social media links
- Newsletter signup
- Legal information

## 🔍 SEO Features

- Optimized meta tags and descriptions
- Open Graph and Twitter Card support
- Structured data for recipes
- Semantic HTML markup
- Fast loading with Next.js optimization

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on every push to main branch

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is for educational purposes. Not affiliated with Starbucks Corporation.

## 🙏 Acknowledgments

- Starbucks Corporation for inspiration
- Community contributors for recipe ideas
- Unsplash for placeholder images
- Next.js and Vercel teams for excellent developer tools 