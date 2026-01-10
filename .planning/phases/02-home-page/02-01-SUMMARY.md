# Plan 02-01 Summary: TIEV Hero Section

## Objective
Create TIEV hero section with compelling missionary messaging and animated background.

## Changes Made
- Updated `app/page.tsx`:
    - Replaced SoapBox hero content with TIEV missionary messaging.
    - Updated badge to "Global Missions".
    - Updated headline to "Reaching the Unreached / Caring for the Poor".
    - Updated description to TIEV's mission statement.
    - Replaced CTAs with "Support Our Mission" (linking to `/donate`) and "Explore Our Work" (linking to `/projects`).
    - Updated hero footer to "Serving across the 10/40 window since 2012".
    - Removed all unused SoapBox-specific data arrays (`digitalMinistryFeatures`, `whyChooseUs`, etc.).
    - Cleaned up `lucide-react` imports to only include icons used in the new page.
    - Removed all SoapBox-specific sections below the hero (Digital Ministry Features, Why Choose Us, ORA, Get Started, LogoMarquee, etc.).

## Verification Results
- `npm run build` completed successfully without errors.
- Hero section now displays TIEV-specific content.
- Page is cleaned up and ready for TIEV-specific sections in subsequent phases.
