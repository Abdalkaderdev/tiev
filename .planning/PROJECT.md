# TIEV Global Website

## What This Is

A premium marketing website for TIEV (Treasures in Earthen Vessels), a faith-based missionary organization operating across the Middle East and Asia. Built using the existing SoapBox design system with dark aesthetic, amber glows, spotlight cards, and animated backgrounds.

## Core Value

Communicate TIEV's heart and mission powerfully while making it easy to donate and explore their work across Iraq, Pakistan, Philippines, and Japan.

## Requirements

### Validated

- ✓ Next.js 14 App Router architecture — existing
- ✓ React + TypeScript + Tailwind CSS stack — existing
- ✓ SpotlightCard interactive component — existing
- ✓ ShinyButton animated CTA component — existing
- ✓ Navbar with mobile menu — existing
- ✓ Footer with site links — existing
- ✓ Dark theme with amber/gold accents — existing
- ✓ Custom CSS animations (beam, sonar, float, flicker) — existing
- ✓ UnicornStudio animated background — existing
- ✓ Responsive design — existing

### Active

- [ ] Home page with TIEV hero, mission statement, and impact overview
- [ ] About page with organization history, values, and team
- [ ] Iraq project page with ministry details and impact stories
- [ ] Pakistan project page (brick-kiln outreach and aid)
- [ ] Philippines project page (church strengthening and leadership)
- [ ] Japan project page (unreached communities and bridge-building)
- [ ] Donate page with giving options and impact messaging
- [ ] Contact page with form and location information
- [ ] Update Navbar for TIEV navigation structure
- [ ] Update Footer with TIEV links and branding
- [ ] Replace SoapBox branding with TIEV logo and messaging

### Out of Scope

- User accounts / login — static marketing site only
- CMS / blog — no content management system
- Payment integration — donate page links to external payment (no Stripe/PayPal)
- Newsletter signup backend — form UI only, no email integration

## Context

TIEV is a missionary organization focused on "reaching the unreached, caring for the poor, and discovering the treasure found in every Nation, Tribe and Tongue." Their work spans the 10/40 window with emphasis on discipleship, community building, and long-term relational investment.

The existing codebase is a SoapBox Super App marketing demo with a polished dark theme, animated effects, and interactive components. This project repurposes that design system for TIEV's missionary context.

Current tiev.global structure to mirror:
- Home with mission overview
- About with values (Compassion, Community, Global Impact)
- Individual project pages for each country
- Donate with giving CTAs
- Contact information

## Constraints

- **Design**: Must preserve existing animation system and component library
- **Colors**: Keep amber/gold accent palette (works well with faith-based messaging)
- **Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS (no changes)
- **Hosting**: Static site deployable to Vercel or similar

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Reuse SoapBox design system | Proven premium aesthetic, saves development time | — Pending |
| Keep amber/gold colors | Matches faith-based warmth, already implemented | — Pending |
| Static site (no CMS) | Simpler deployment, content managed in code | — Pending |
| External donation links | Avoids payment integration complexity for v1 | — Pending |

---
*Last updated: 2026-01-10 after initialization*
