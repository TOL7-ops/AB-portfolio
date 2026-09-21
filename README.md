# Portfolio Project

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)

## Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── app/
│   │   ├── components/    # Page sections
│   │   │   ├── ContactSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── StackSection.tsx
│   │   │   └── TestimonialsSection.tsx
│   │   ├── layout.tsx     # Root layout
│   │   ├── not-found.tsx  # 404 page
│   │   ├── page.tsx       # Home page
│   │   ├── robots.ts      # Robots.txt
│   │   └── sitemap.ts     # Sitemap
│   ├── components/        # Reusable components
│   │   ├── ui/
│   │   │   ├── AppIcon.tsx
│   │   │   ├── AppImage.tsx
│   │   │   └── AppLogo.tsx
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   └── styles/
│       ├── index.css      # Global styles
│       └── tailwind.css   # Tailwind directives
├── .env                   # Environment variables
├── .eslintrc.json         # ESLint config
├── .prettierrc            # Prettier config
├── image-hosts.config.mjs # Image host configuration
├── next.config.mjs        # Next.js config
├── postcss.config.js      # PostCSS config
└── tailwind.config.js     # Tailwind config
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Copy `.env` and configure:

- `NEXT_PUBLIC_SITE_URL` - Your site URL (default: http://localhost:3000)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Conventions

- **Page Sections** (`src/app/components/`) - Components specific to the home page
- **Shared Components** (`src/components/`) - Reusable UI components
- All components use named function declarations with default export
- Server Components by default; add `"use client"` only when needed

## License

Private
