# SoapBox Candles - Web App

A Next.js web application for SoapBox Super App's Candles feature - spiritual engagement rewards and AI feature credits.

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
cd soapbox-candles
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Deploy to Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and deploy

## Project Structure

```
soapbox-candles/
├── app/
│   ├── globals.css        # Global styles & animations
│   ├── layout.tsx         # Root layout with Navbar/Footer
│   ├── page.tsx           # Home page (Candles landing)
│   ├── features/          # Features page
│   ├── pricing/           # Pricing page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── signin/            # Sign in page
│   └── get-started/       # Sign up page
├── components/
│   ├── Navbar.tsx         # Navigation component
│   ├── Footer.tsx         # Footer component
│   ├── SpotlightCard.tsx  # Interactive card component
│   └── ShinyButton.tsx    # Animated CTA button
├── public/                # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Features

- **Responsive Design** - Works on all devices
- **Animations** - Sonar, beam, float, flicker effects
- **Interactive Cards** - Spotlight effect on hover
- **Shiny CTA Buttons** - Animated gradient borders
- **Dark Theme** - Warm amber/gold color scheme
- **TypeScript** - Full type safety
- **Tailwind CSS** - Utility-first styling

## Pages

- `/` - Candles landing page
- `/features` - Platform features
- `/pricing` - Pricing plans
- `/about` - About SoapBox
- `/contact` - Contact form
- `/signin` - Sign in
- `/get-started` - Sign up
