# External Integrations

**Analysis Date:** 2026-01-10

## APIs & External Services

**Payment Processing:**
- Not detected (marketing site only, no payment integration)

**Email/SMS:**
- Not detected

**External APIs:**
- Not detected (no API calls in codebase)

## Data Storage

**Databases:**
- Not applicable (static marketing site)

**File Storage:**
- Not applicable

**Caching:**
- Not applicable

## Authentication & Identity

**Auth Provider:**
- Not implemented (sign-in page exists but no auth logic)
- `app/signin/page.tsx` - UI only, no authentication integration

**OAuth Integrations:**
- Not detected

## Monitoring & Observability

**Error Tracking:**
- Not detected (no Sentry, LogRocket, etc.)

**Analytics:**
- Not detected (no GA, Mixpanel, Plausible, etc.)

**Logs:**
- Not detected

## CI/CD & Deployment

**Hosting:**
- Not configured (deployable to Vercel, Netlify)
- No deployment configuration detected

**CI Pipeline:**
- Not configured (no GitHub Actions, CircleCI, etc.)

## Environment Configuration

**Development:**
- No environment variables required
- No `.env` files detected
- No `.env.example` file

**Staging:**
- Not applicable

**Production:**
- Not applicable

## Webhooks & Callbacks

**Incoming:**
- Not applicable

**Outgoing:**
- Not applicable

## External Resources (CDN)

**UnicornStudio.js:**
- Purpose: Animated background effects
- Loaded via CDN: `https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js`
- Location: `app/layout.tsx` (script tag in body)
- Project ID: `FixNvEwvWwbu3QX9qC3F`

**Google Fonts:**
- Font: Inter
- Loaded via Next.js font optimization (`next/font/google`)
- Location: `app/layout.tsx`

## Future Integration Considerations

**When Adding Backend:**
- Authentication: Consider Supabase Auth, Clerk, or NextAuth.js
- Database: Supabase, PlanetScale, or Vercel Postgres
- Payments: Stripe (for subscription plans shown on pricing page)
- Analytics: Vercel Analytics, Plausible, or PostHog

**When Adding Forms:**
- Contact form: Resend, SendGrid, or Formspree
- Newsletter: ConvertKit, Mailchimp, or Buttondown

---

*Integration audit: 2026-01-10*
*Update when adding/removing external services*
