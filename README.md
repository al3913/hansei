# Hansei.GG

Official website for Hansei.GG - Helping creators make a living doing what they love.

## About Hansei.GG

Hansei.GG is a company dedicated to empowering content creators with the tools and support they need to build sustainable careers. We believe in the power of creators and their ability to impact the world through their work.

## Website Overview

This repository contains the official company website for Hansei.GG, built with modern web technologies to showcase our mission, services, and commitment to the creator community.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Deployment**: [Vercel](https://vercel.com)

## Website Features

- Company mission and values presentation
- Custom branded design system
- Responsive, mobile-first layout
- Performance optimized assets and fonts
- SEO optimization for better visibility
- Analytics integration for visitor insights
- Interactive UI components
- Clear presentation of company offerings

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/al3913/hansei.git
```

2. Install dependencies:
```bash
cd hansei
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── decorations/  # Decorative components (lines)
│   │   ├── sections/     # Page sections
│   │   └── ui/          # Reusable UI components
│   └── lib/             # Utility functions
├── public/              # Static assets
│   ├── fonts/          # Custom fonts
│   │   ├── moisette/   # Moisette font family
│   │   ├── tthoves/    # TT Hoves font family
│   │   └── winnie/     # Winnie font family
│   ├── mascot/         # Mascot images and variations
│   └── comic/          # Comic images
└── package.json        # Project dependencies
```

## Brand & Design System

The website implements Hansei.GG's official brand identity and design system:

### Typography
- **Moisette**: Stylistic font for headings and emphasis (multiple weights, italic)
- **TTHoves**: Primary body font with excellent readability (weights: 100-900)
- **Winnie**: Special display font for unique elements (Regular, Bold, Thin)

### Colors
- Brand White: #FFFBF2
- Brand Yellow: #FFF242
- Brand Blue: #2ABEE3
- Brand Red: #FD7C68

### Components
- Decorative lines (Blue, Red, Yellow)
- Responsive header and navigation
- Custom UI components (Button, Card, Tile)
- Section-based layout structure

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Analytics Documentation](https://vercel.com/docs/analytics)

## Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
