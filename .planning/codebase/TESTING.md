# Testing Patterns

**Analysis Date:** 2026-01-10

## Test Framework

**Runner:**
- Not detected (no test framework configured)

**Assertion Library:**
- Not applicable

**Run Commands:**
```bash
# No test commands available
npm run lint              # ESLint (Next.js built-in)
```

## Test File Organization

**Location:**
- No test files detected

**Naming:**
- Not applicable

**Structure:**
- Not applicable

## Test Structure

**Suite Organization:**
- Not applicable (no tests)

**Patterns:**
- Not applicable

## Mocking

**Framework:**
- Not applicable

**Patterns:**
- Not applicable

## Fixtures and Factories

**Test Data:**
- Not applicable

**Location:**
- Not applicable

## Coverage

**Requirements:**
- No coverage requirements (no tests)

**Configuration:**
- Not configured

## Test Types

**Unit Tests:**
- Not implemented

**Integration Tests:**
- Not implemented

**E2E Tests:**
- Not implemented

## Recommendations

**If Adding Tests:**

1. **Recommended Framework:** Vitest (fast, Vite-compatible, good Next.js support)
   ```bash
   npm install -D vitest @testing-library/react @testing-library/jest-dom
   ```

2. **Test Location:** Co-locate with source
   - `components/SpotlightCard.test.tsx`
   - `app/page.test.tsx`

3. **Priority Test Targets:**
   - `SpotlightCard.tsx` - Mouse interaction logic
   - `ShinyButton.tsx` - Animation rendering
   - `Navbar.tsx` - Mobile menu toggle, active state logic

4. **E2E Recommendation:** Playwright for visual regression testing of animations

---

*Testing analysis: 2026-01-10*
*Update when test patterns change*
