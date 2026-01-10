# Technology Stack

**Analysis Date:** 2026-01-10

## Languages

**Primary:**
- TypeScript 5.4 - All application code (`app/**/*.tsx`, `components/**/*.tsx`)

**Secondary:**
- JavaScript - Config files (`next.config.js`, `tailwind.config.js`, `postcss.config.js`)

## Runtime

**Environment:**
- Node.js (any recent LTS version)
- Browser runtime (Next.js client components)

**Package Manager:**
- npm
- Lockfile: `package-lock.json` present

## Frameworks

**Core:**
- Next.js 14.2.33 - React framework with App Router (`app/` directory)
- React 18.2 - UI library
- Tailwind CSS 3.4.3 - Utility-first CSS framework

**Testing:**
- Not detected (no test framework configured)

**Build/Dev:**
- TypeScript 5.4 - Type checking (`tsconfig.json`)
- PostCSS 8.4.38 - CSS processing (`postcss.config.js`)
- Autoprefixer 10.4.19 - CSS vendor prefixing

## Key Dependencies

**Critical:**
- next 14.2.33 - Core application framework
- react 18.2 - UI rendering
- lucide-react 0.400.0 - Icon library (used throughout for UI icons)

**Infrastructure:**
- tailwindcss 3.4.3 - Styling system
- postcss 8.4.38 - CSS transformation pipeline

## Configuration

**Environment:**
- No environment variables required
- No `.env` files detected

**Build:**
- `tsconfig.json` - TypeScript compiler options with `@/*` path alias
- `next.config.js` - Next.js configuration (reactStrictMode enabled)
- `tailwind.config.js` - Custom theme with brand colors, animations
- `postcss.config.js` - Tailwind and autoprefixer plugins

## Platform Requirements

**Development:**
- Any platform with Node.js
- No external dependencies required

**Production:**
- Deployable to Vercel, Netlify, or any static/SSR host
- Next.js compatible hosting environment

---

*Stack analysis: 2026-01-10*
*Update after major dependency changes*
