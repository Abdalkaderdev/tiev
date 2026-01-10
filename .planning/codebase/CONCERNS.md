# Codebase Concerns

**Analysis Date:** 2026-01-10

## Tech Debt

**Large page components:**
- Issue: Page components contain entire page content (1000+ lines in some pages)
- Files: `app/page.tsx` (very large), `app/pricing/page.tsx` (390+ lines)
- Why: Rapid prototyping, content-heavy marketing pages
- Impact: Harder to maintain, potential performance issues with large component trees
- Fix approach: Extract sections into separate components (e.g., `HeroSection.tsx`, `PricingCards.tsx`)

**Inline data arrays in page components:**
- Issue: Feature lists, pricing data defined inline in page components
- Files: `app/page.tsx` (digitalMinistryFeatures, whyChooseUs, oraFeatures, oraPowers, steps arrays)
- Why: Quick iteration during design phase
- Impact: Harder to update content, no single source of truth
- Fix approach: Extract to `lib/data/` or consider CMS integration

**Duplicate background code:**
- Issue: UnicornStudio background div repeated in `app/layout.tsx` and `app/page.tsx`
- Files: `app/layout.tsx`, `app/page.tsx`
- Why: Experimentation with background placement
- Impact: Unnecessary DOM duplication, potential conflicts
- Fix approach: Keep only in `layout.tsx` (layout already handles global elements)

## Known Bugs

**No known bugs detected**
- Codebase appears to be a clean marketing site implementation

## Security Considerations

**External CDN script:**
- Risk: UnicornStudio.js loaded from CDN without integrity hash
- File: `app/layout.tsx` (line 33)
- Current mitigation: None
- Recommendations: Add subresource integrity (SRI) hash, or bundle locally

**No CSP headers:**
- Risk: No Content Security Policy configured
- Current mitigation: None (marketing site, low risk)
- Recommendations: Add CSP headers in `next.config.js` before adding user-generated content

## Performance Bottlenecks

**Large CSS bundle:**
- Problem: `globals.css` contains many custom animations (364 lines)
- File: `app/globals.css`
- Measurement: Not measured (no performance monitoring)
- Cause: Extensive custom CSS animations for visual effects
- Improvement path: Consider CSS-in-JS or extracting animations to separate file for code splitting

**Many lucide-react icons:**
- Problem: Icons imported individually across multiple files
- Files: `app/page.tsx`, `app/pricing/page.tsx`, `components/Navbar.tsx`, etc.
- Measurement: Tree-shaking should handle this, but worth monitoring
- Cause: Rich icon usage for visual design
- Improvement path: Monitor bundle size, consider icon sprite if needed

## Fragile Areas

**SpotlightCard mouse tracking:**
- File: `components/SpotlightCard.tsx`
- Why fragile: Direct DOM manipulation via refs, CSS variable updates
- Common failures: Performance issues on low-end devices, ref null checks
- Safe modification: Test on mobile devices, ensure null checks on cardRef
- Test coverage: No tests

**Animation timing dependencies:**
- Files: `app/globals.css`, `tailwind.config.js`
- Why fragile: Multiple animation delays and durations that must coordinate
- Common failures: Visual glitches if timings changed independently
- Safe modification: Document animation relationships before changing
- Test coverage: No visual regression tests

## Scaling Limits

**Not applicable:**
- Static marketing site with no backend
- No database or API scaling concerns

## Dependencies at Risk

**No critical risks detected:**
- All major dependencies (Next.js, React, Tailwind) are actively maintained
- lucide-react is well-maintained icon library

**Low priority:**
- UnicornStudio.js CDN dependency (external service reliability)

## Missing Critical Features

**No test suite:**
- Problem: No tests for any components
- Current workaround: Manual testing
- Blocks: Confident refactoring, CI/CD pipeline
- Implementation complexity: Low (add Vitest + React Testing Library)

**No analytics:**
- Problem: No way to track user engagement or page performance
- Current workaround: None
- Blocks: Data-driven optimization decisions
- Implementation complexity: Low (add Vercel Analytics or Plausible)

**No form functionality:**
- Problem: Contact page exists but no form submission
- File: `app/contact/page.tsx`
- Blocks: User inquiries, lead capture
- Implementation complexity: Low-Medium (add form handling)

**No authentication:**
- Problem: Sign-in page exists but no auth implementation
- File: `app/signin/page.tsx`
- Blocks: User accounts for the SoapBox platform
- Implementation complexity: Medium (add NextAuth.js or Supabase Auth)

## Test Coverage Gaps

**All components untested:**
- What's not tested: Everything (no test files exist)
- Risk: Bugs in interactive components (SpotlightCard, Navbar, ShinyButton)
- Priority: Medium (marketing site, low interactivity)
- Difficulty to test: Low (standard React component testing)

---

*Concerns audit: 2026-01-10*
*Update as issues are fixed or new ones discovered*
