# Codebase Structure

**Analysis Date:** 2026-01-10

## Directory Layout

```
tiev/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── candle/            # Candles feature page
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   ├── features/          # Features page
│   ├── get-started/       # Get started page
│   ├── help/              # Help page
│   ├── ora/               # ORA AI assistant page
│   ├── pricing/           # Pricing page
│   ├── privacy/           # Privacy policy
│   ├── signin/            # Sign in page
│   ├── support/           # Support page
│   ├── terms/             # Terms of service
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout with shared components
│   └── page.tsx           # Home page (main marketing page)
├── components/            # Reusable React components
│   ├── ChatWidget.tsx     # Floating chat widget
│   ├── Footer.tsx         # Site footer
│   ├── LogoMarquee.tsx    # Scrolling logo carousel
│   ├── Navbar.tsx         # Navigation bar
│   ├── ShinyButton.tsx    # Animated CTA button
│   └── SpotlightCard.tsx  # Interactive spotlight card
├── inspo/                 # Design inspiration HTML files
├── .claude/               # Claude settings
├── next.config.js         # Next.js configuration
├── package.json           # Project manifest
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Directory Purposes

**app/**
- Purpose: Next.js App Router pages and layouts
- Contains: Page components (page.tsx), layout file, global styles
- Key files: `layout.tsx` (root layout), `page.tsx` (home), `globals.css` (styles)
- Subdirectories: One per route (about/, candle/, pricing/, etc.)

**components/**
- Purpose: Shared React components used across pages
- Contains: UI components (buttons, cards, navigation)
- Key files: `Navbar.tsx`, `Footer.tsx`, `SpotlightCard.tsx`, `ShinyButton.tsx`
- Subdirectories: None (flat structure)

**inspo/**
- Purpose: Design inspiration and reference HTML files
- Contains: Static HTML templates from design tools
- Not used in production build

## Key File Locations

**Entry Points:**
- `app/layout.tsx` - Root layout, wraps all pages
- `app/page.tsx` - Home page (main landing)

**Configuration:**
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration with `@/*` path alias
- `next.config.js` - Next.js settings (reactStrictMode)
- `tailwind.config.js` - Theme, colors, animations
- `postcss.config.js` - PostCSS plugins

**Core Logic:**
- `app/*/page.tsx` - Individual page content
- `components/*.tsx` - Reusable UI components

**Styling:**
- `app/globals.css` - Global CSS, animations, custom utilities
- `tailwind.config.js` - Custom theme configuration

**Testing:**
- Not detected (no test files or test config)

**Documentation:**
- `README.md` - Project documentation

## Naming Conventions

**Files:**
- kebab-case for directories: `get-started/`, `inspo/`
- PascalCase.tsx for React components: `SpotlightCard.tsx`, `ShinyButton.tsx`
- page.tsx for route pages (Next.js convention)
- layout.tsx for layouts (Next.js convention)

**Directories:**
- kebab-case for all directories
- Route directories match URL paths

**Special Patterns:**
- `page.tsx` - Next.js route page component
- `layout.tsx` - Next.js layout component
- `globals.css` - Global stylesheet

## Where to Add New Code

**New Page:**
- Create directory: `app/{page-name}/`
- Add file: `app/{page-name}/page.tsx`
- Import shared components from `@/components/`

**New Component:**
- Implementation: `components/{ComponentName}.tsx`
- Use PascalCase naming
- Export default for React components

**New Route Variant:**
- Implementation: `app/{route}/page.tsx`
- Follow Next.js App Router conventions

**New Styles:**
- Global styles: `app/globals.css`
- Theme customization: `tailwind.config.js`
- Component-specific: Use Tailwind classes inline

## Special Directories

**inspo/**
- Purpose: Design reference files (not part of build)
- Source: Exported from design tools (v0, etc.)
- Committed: Yes (for design reference)
- In build: No (not imported by Next.js)

**.claude/**
- Purpose: Claude Code local settings
- Committed: Yes
- Contains: `settings.local.json`

---

*Structure analysis: 2026-01-10*
*Update when directory structure changes*
