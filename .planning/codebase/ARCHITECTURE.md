# Architecture

**Analysis Date:** 2026-01-10

## Pattern Overview

**Overall:** Static Marketing Website (Next.js App Router)

**Key Characteristics:**
- Server-side rendered pages with client interactivity
- Component-based UI architecture
- File-system based routing via Next.js App Router
- No backend/API - pure frontend marketing site

## Layers

**Page Layer:**
- Purpose: Route handlers and page content
- Contains: Page components with full sections and content
- Location: `app/*/page.tsx`
- Depends on: Component layer, shared styles
- Used by: Next.js router

**Component Layer:**
- Purpose: Reusable UI components
- Contains: Navbar, Footer, buttons, cards, widgets
- Location: `components/*.tsx`
- Depends on: lucide-react icons, Tailwind styles
- Used by: Page layer

**Style Layer:**
- Purpose: Global styles, animations, utilities
- Contains: CSS custom properties, keyframes, utility classes
- Location: `app/globals.css`, `tailwind.config.js`
- Depends on: Tailwind CSS
- Used by: All components

## Data Flow

**Page Render Flow:**

1. User navigates to route (e.g., `/pricing`)
2. Next.js App Router resolves to `app/pricing/page.tsx`
3. Page component renders with imported shared components
4. Client-side JavaScript hydrates for interactivity
5. CSS animations and hover effects applied

**State Management:**
- Minimal client state (React useState for UI interactions)
- No global state management
- No data fetching or API calls

## Key Abstractions

**SpotlightCard:**
- Purpose: Interactive card component with mouse-following spotlight effect
- Location: `components/SpotlightCard.tsx`
- Pattern: Reusable wrapper with mouse tracking and 3D transforms

**ShinyButton:**
- Purpose: Animated CTA button with rotating border gradient
- Location: `components/ShinyButton.tsx`
- Pattern: Styled button wrapper with CSS animations

**Layout:**
- Purpose: Shared page structure (Navbar, Footer, ChatWidget)
- Location: `app/layout.tsx`
- Pattern: Next.js root layout wrapping all pages

## Entry Points

**App Entry:**
- Location: `app/layout.tsx`
- Triggers: Any page navigation
- Responsibilities: Font loading, global styles, shared components (Navbar, Footer, ChatWidget)

**Pages:**
- Location: `app/*/page.tsx` (about, candle, contact, faq, features, get-started, help, ora, pricing, privacy, signin, support, terms)
- Triggers: URL navigation
- Responsibilities: Page-specific content and sections

## Error Handling

**Strategy:** Default Next.js error handling

**Patterns:**
- No custom error boundaries detected
- No explicit error handling (marketing site, minimal interactivity)

## Cross-Cutting Concerns

**Styling:**
- Tailwind CSS utilities throughout
- Custom CSS in `globals.css` for advanced effects
- CSS variables for animation properties

**Icons:**
- lucide-react library used consistently across all pages

**External Resources:**
- UnicornStudio.js loaded via CDN for animated background
- Google Fonts (Inter) loaded via Next.js font optimization

---

*Architecture analysis: 2026-01-10*
*Update when major patterns change*
