# Coding Conventions

**Analysis Date:** 2026-01-10

## Naming Patterns

**Files:**
- PascalCase.tsx for React components (`SpotlightCard.tsx`, `ShinyButton.tsx`, `Navbar.tsx`)
- page.tsx for route pages (Next.js convention)
- layout.tsx for layouts (Next.js convention)
- kebab-case for directories (`get-started/`, `inspo/`)
- kebab-case.js for config files (`next.config.js`, `tailwind.config.js`)

**Functions:**
- PascalCase for React components (`export default function Navbar()`)
- camelCase for event handlers (`handleMouseMove`, `handleMouseLeave`)
- camelCase for helper functions (`isActive`)

**Variables:**
- camelCase for variables (`mobileMenuOpen`, `pathname`, `cardRef`)
- camelCase for arrays/objects (`navLinks`, `digitalMinistryFeatures`, `colorMap`)
- UPPER_SNAKE_CASE not used (no constants file)

**Types:**
- PascalCase for interfaces (`ShinyButtonProps`, `SpotlightCardProps`)
- Props suffix for component prop types
- No I prefix on interfaces

## Code Style

**Formatting:**
- 2 space indentation
- Single quotes for strings
- Semicolons required
- No Prettier config detected (manual formatting)

**Linting:**
- ESLint available via `npm run lint` (Next.js built-in)
- No custom ESLint config detected

## Import Organization

**Order:**
1. React imports (`'use client'` directive first, then React hooks)
2. Next.js imports (`next/link`, `next/navigation`, `next/font/google`)
3. External packages (`lucide-react`)
4. Internal components (`@/components/*`)

**Grouping:**
- No blank lines between import groups
- Icons imported as named exports in single line

**Path Aliases:**
- `@/*` maps to project root (configured in `tsconfig.json`)
- Used for component imports: `@/components/SpotlightCard`

## Error Handling

**Patterns:**
- No explicit error handling in components
- No try/catch blocks (marketing site, no async operations)

**Error Types:**
- Default Next.js error handling
- No custom error boundaries

## Logging

**Framework:**
- No logging framework
- No console.log statements in production code

## Comments

**When to Comment:**
- Inline comments for CSS section purposes (`{/* Hero Section */}`)
- JSX comments to explain UI sections
- No JSDoc/TSDoc annotations

**TODO Comments:**
- Not detected

## Function Design

**Size:**
- Page components are large (entire page content in one component)
- Utility components are small and focused

**Parameters:**
- Object destructuring in function parameters
- Interface-typed props with explicit types
- Optional props with default values (`className = ''`)

**Return Values:**
- JSX returns for components
- Single return statement per component

## Module Design

**Exports:**
- Default exports for all React components
- No named exports
- No barrel files (index.ts)

**Client Components:**
- `'use client'` directive at top of files requiring client interactivity
- Used for: mouse tracking, useState, navigation hooks

## Component Patterns

**Props Interface:**
```typescript
interface ComponentNameProps {
  children: ReactNode;
  className?: string;
  // other props
}
```

**Default Props:**
```typescript
export default function Component({ prop = 'default' }: Props) {
```

**Ref Usage:**
```typescript
const ref = useRef<HTMLDivElement>(null);
```

## Styling Patterns

**Tailwind Classes:**
- Long class strings inline on elements
- Template literals for conditional classes
- No CSS modules or styled-components

**Conditional Classes:**
```typescript
className={`base-class ${condition ? 'active-class' : 'inactive-class'}`}
```

**CSS Custom Properties:**
- Set via JavaScript: `element.style.setProperty('--name', value)`
- Used for mouse position tracking in spotlight effects

---

*Convention analysis: 2026-01-10*
*Update when patterns change*
