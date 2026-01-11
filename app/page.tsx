'use client';

import { Heart, Sparkles, BookOpen, Users, Calendar, Shield, Globe, Flame, ArrowRight } from 'lucide-react';
import { ChristianCross } from '@/components/icons/ChristianCross';
import SpotlightCard from '@/components/SpotlightCard';
import ShinyButton from '@/components/ShinyButton';
import CountUp from '@/components/CountUp';
import AnimatedText from '@/components/AnimatedText';
import FloatingHearts from '@/components/FloatingHearts';
import AnimatedSVGPath from '@/components/AnimatedSVGPath';
import ParticleField from '@/components/ParticleField';
import ParallaxGrid from '@/components/ParallaxGrid';
import Link from 'next/link';

const tievValues = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We see the image of God in every person. Our work begins with love—meeting physical needs while sharing the hope that transforms lives.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We believe in the power of relationship. Through discipleship and local partnerships, we build lasting connections that multiply impact.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'From Iraq to Japan, we go where the need is greatest. Every nation holds treasure waiting to be discovered and nurtured.',
  },
];

const tievProjects = [
  {
    country: 'Philippines',
    focus: 'Discipleship & Church Strengthening',
    description: 'Raising a new generation of leaders through house churches and training future laborers to impact their communities.',
    link: '/projects/philippines',
    image: 'https://tiev.global/wp-content/uploads/2025/12/IMG_3335-1.jpg',
  },
  {
    country: 'Pakistan',
    focus: 'Brick-Kiln Outreach',
    description: 'Serving alongside local leaders to disciple believers and provide aid to families trapped in brick-kiln labor.',
    link: '/projects/pakistan',
    image: 'https://tiev.global/wp-content/uploads/2025/10/WhatsApp-Image-2025-09-15-at-06.20.49-768x1024.jpeg',
  },
  {
    country: 'Iraq',
    focus: 'Prayer & Church Planting',
    description: 'Establishing houses of prayer and church plants in Erbil, Baghdad, and Mosul through intercession and mercy.',
    link: '/projects/iraq',
    image: 'https://tiev.global/wp-content/uploads/2025/11/Iraq_WordPress_Style_Layout-derek-teaching-768x1024.jpg',
  },
  {
    country: 'Middle East',
    focus: 'Missionary Discipleship',
    description: 'Equipping individuals for missionary service through immersive discipleship and hands-on ministry in the region.',
    link: '/projects/middle-east',
    image: 'https://tiev.global/wp-content/uploads/2025/10/Group-768x1024.jpg',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section with Interactive Background */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Unicorn Studio Background */}
        <div className="aura-background-component top-0 w-full h-screen -z-10 fixed" data-alpha-mask="80" style={{ maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)' }}>
          <div className="aura-background-component top-0 w-full -z-10 absolute h-full">
            <div data-us-project="FixNvEwvWwbu3QX9qC3F" className="absolute w-full h-full left-0 top-0 -z-10"></div>
          </div>
        </div>

        {/* Interactive Orange/Amber Background - Similar to Aura's blue */}
        <div className="absolute inset-0 radial-glow-teal -z-10" />

        {/* Horizon Glow (Nexus Style) */}
        <div className="absolute bottom-0 left-0 w-full h-[60vh] horizon-glow-teal -z-10" />

        {/* Grid Background */}
        <div className="fixed inset-0 grid-bg pointer-events-none z-0 opacity-50" />
        <div className="fixed inset-0 bg-grid-subtle pointer-events-none z-0 opacity-30" />

        {/* Animated Glow Orbs */}
        <div className="absolute top-20 right-[20%] w-[500px] h-[500px] bg-brand-teal/20 rounded-full blur-[150px] pointer-events-none animate-pulse" />

        <div className="container lg:px-12 min-h-[800px] flex flex-col lg:flex-row z-10 mx-auto pt-24 px-6 relative items-center">
          {/* Left Column: Copy */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center pt-12 pb-20 lg:py-0">
            <div className="flex items-center gap-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal" />
              </span>
              <span className="text-xs font-mono tracking-[0.2em] text-white/40 uppercase">Global Missions</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-brand-teal text-glow-teal tracking-tight font-semibold mb-6">
              TREASURES IN<br />
              <span className="text-white opacity-90">EARTHEN VESSELS</span>
            </h1>

            <p className="text-xl lg:text-2xl font-light text-white/70 leading-relaxed tracking-tight max-w-xl mb-12">
              Reaching the unreached, caring for the poor, and discovering the treasure found in every Nation, Tribe and Tongue.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <Link href="/donate">
                <ShinyButton>
                  <span className="flex items-center gap-2">
                    <Heart className="w-[18px] h-[18px] candle-glow" />
                    Support Our Mission
                  </span>
                </ShinyButton>
              </Link>

              <Link href="/projects">
                <button className="hover:bg-white/10 hover:text-white transition-all flex text-sm font-medium text-slate-300 bg-white/5 rounded-full py-3 px-6 gap-2 items-center group border border-white/10">
                  <span className="text-sm font-medium tracking-tight">Explore Our Work</span>
                  <Globe className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </button>
              </Link>
            </div>

            <p className="text-sm text-white/30 mt-8 font-mono">
              Serving across the 10/40 window since 2012
            </p>
          </div>

          {/* Right Column: Abstract UI Visualization with Sonar */}
          <div className="lg:w-1/2 lg:h-[700px] flex w-full h-[400px] relative items-center justify-center">
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible" viewBox="0 0 600 600">
              <defs>
                <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{ stopColor: '#CAB38A', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#CAB38A', stopOpacity: 0 }} />
                </radialGradient>
                <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#CAB38A', stopOpacity: 0 }} />
                  <stop offset="50%" style={{ stopColor: '#CAB38A', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#CAB38A', stopOpacity: 0 }} />
                </linearGradient>
              </defs>

              {/* Connecting Beams */}
              <g>
                <path d="M -50 150 C 100 150, 100 300, 300 300" fill="none" stroke="white" strokeWidth="1" className="opacity-[0.08]" />
                <path d="M -50 150 C 100 150, 100 300, 300 300" fill="none" stroke="#CAB38A" strokeWidth="1.5" className="beam-line animate-beam opacity-60" />
              </g>
              <g>
                <path d="M -50 450 C 100 450, 100 300, 300 300" fill="none" stroke="white" strokeWidth="1" className="opacity-[0.08]" />
                <path d="M -50 450 C 100 450, 100 300, 300 300" fill="none" stroke="#CAB38A" strokeWidth="1.5" className="beam-line animate-beam opacity-60" style={{ animationDelay: '-1s' }} />
              </g>
              <g>
                <path d="M 650 100 C 500 100, 500 300, 300 300" fill="none" stroke="white" strokeWidth="1" className="opacity-[0.08]" />
                <path d="M 650 100 C 500 100, 500 300, 300 300" fill="none" stroke="#CAB38A" strokeWidth="1.5" className="beam-line animate-beam opacity-60" style={{ animationDelay: '-2s' }} />
              </g>
              <g>
                <path d="M 650 500 C 500 500, 500 300, 300 300" fill="none" stroke="white" strokeWidth="1" className="opacity-[0.08]" />
                <path d="M 650 500 C 500 500, 500 300, 300 300" fill="none" stroke="#CAB38A" strokeWidth="1.5" className="beam-line animate-beam opacity-60" style={{ animationDelay: '-1.5s' }} />
              </g>

              {/* Central Node with Sonar */}
              <g transform="translate(300, 300)">
                <circle r="120" fill="url(#center-glow)" className="animate-pulse" />
                <circle r="20" fill="none" stroke="#CAB38A" strokeWidth="1" opacity="0.5" className="animate-sonar" />
                <circle r="20" fill="none" stroke="#CAB38A" strokeWidth="1" opacity="0.5" className="animate-sonar delay-1000" />
                <circle r="20" fill="none" stroke="#CAB38A" strokeWidth="1" opacity="0.5" className="animate-sonar delay-2000" />
                <circle r="100" fill="none" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
                <circle r="65" fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="10 20" className="animate-spin-slow" />
                <circle r="45" fill="none" stroke="#CAB38A" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 6" className="animate-spin-slow-reverse" />
                <circle r="8" fill="#0A0A0A" stroke="#CAB38A" strokeWidth="2" />
                <circle r="4" fill="#CAB38A" className="animate-pulse-fast" />
              </g>
            </svg>

            {/* Orbiting Icons Container */}
            <div className="absolute w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] animate-spin-slow">
              {/* Prayer Icon - Top */}
              <Link href="/contact" className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-12 h-12 rounded-full bg-[#0a0a08] border border-brand-teal/30 flex items-center justify-center shadow-[0_0_20px_rgba(0,131,130,0.2)] hover:border-brand-teal/60 hover:shadow-[0_0_30px_rgba(0,131,130,0.3)] transition-all cursor-pointer group">
                  <Heart className="w-5 h-5 text-brand-teal/70 group-hover:text-brand-teal transition-colors" />
                </div>
              </Link>
              {/* Bible Icon - Right */}
              <Link href="/about" className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-12 h-12 rounded-full bg-[#0a0a08] border border-brand-teal/30 flex items-center justify-center shadow-[0_0_20px_rgba(0,131,130,0.2)] hover:border-brand-teal/60 hover:shadow-[0_0_30px_rgba(0,131,130,0.3)] transition-all cursor-pointer group">
                  <BookOpen className="w-5 h-5 text-brand-teal/70 group-hover:text-brand-teal transition-colors" />
                </div>
              </Link>
              {/* Community Icon - Bottom */}
              <Link href="/projects" className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20">
                <div className="w-12 h-12 rounded-full bg-[#0a0a08] border border-brand-teal/30 flex items-center justify-center shadow-[0_0_20px_rgba(0,131,130,0.2)] hover:border-brand-teal/60 hover:shadow-[0_0_30px_rgba(0,131,130,0.3)] transition-all cursor-pointer group">
                  <Users className="w-5 h-5 text-brand-teal/70 group-hover:text-brand-teal transition-colors" />
                </div>
              </Link>
              {/* Globe Icon - Left */}
              <Link href="/projects" className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-12 h-12 rounded-full bg-[#0a0a08] border border-brand-teal/30 flex items-center justify-center shadow-[0_0_20px_rgba(0,131,130,0.2)] hover:border-brand-teal/60 hover:shadow-[0_0_30px_rgba(0,131,130,0.3)] transition-all cursor-pointer group">
                  <Globe className="w-5 h-5 text-brand-teal/70 group-hover:text-brand-teal transition-colors" />
                </div>
              </Link>
            </div>

            {/* Inner Orbit with smaller icons */}
            <div className="absolute w-[180px] h-[180px] lg:w-[200px] lg:h-[200px] animate-spin-slow-reverse">
              {/* Sparkles - Top Right */}
              <div className="absolute top-[15%] right-[15%]">
                <div className="w-8 h-8 rounded-full bg-[#0a0a08] border border-purple-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                  <Sparkles className="w-4 h-4 text-purple-400/70" />
                </div>
              </div>
              {/* Shield - Bottom Left */}
              <div className="absolute bottom-[15%] left-[15%]">
                <div className="w-8 h-8 rounded-full bg-[#0a0a08] border border-emerald-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                  <Shield className="w-4 h-4 text-emerald-400/70" />
                </div>
              </div>
            </div>

            {/* Center: The Cross Icon */}
            <div className="relative z-20 w-32 h-32 rounded-full glass-panel-glow flex flex-col items-center justify-center shadow-[0_0_60px_-15px_rgba(0,131,130,0.3)] animate-float animate-breathe">
              <ChristianCross className="w-16 h-16 text-brand-teal candle-glow" />
            </div>

            {/* Floating Labels */}
            <div className="absolute top-[12%] lg:top-[15%] left-[5%] lg:left-[10%] flex flex-col items-end animate-fade-slide-in stagger-1">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-2">
                <Heart className="w-3 h-3 text-brand-teal" />
                <span className="text-xs font-mono text-brand-teal tracking-widest">PRAYER</span>
              </div>
              <div className="h-[1px] w-16 bg-gradient-to-l from-brand-teal/50 to-transparent" />
            </div>

            <div className="absolute bottom-[12%] lg:bottom-[15%] right-[5%] lg:right-[10%] flex flex-col items-start animate-fade-slide-in stagger-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-2">
                <Users className="w-3 h-3 text-brand-teal" />
                <span className="text-xs font-mono text-brand-teal tracking-widest">COMMUNITY</span>
              </div>
              <div className="h-[1px] w-16 bg-gradient-to-r from-brand-teal/50 to-transparent" />
            </div>

            <div className="absolute top-[45%] right-[2%] lg:right-[5%] flex flex-col items-start animate-fade-slide-in stagger-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-2">
                <BookOpen className="w-3 h-3 text-brand-teal" />
                <span className="text-xs font-mono text-brand-teal tracking-widest">SCRIPTURE</span>
              </div>
              <div className="h-[1px] w-12 bg-gradient-to-r from-brand-teal/50 to-transparent" />
            </div>

            <div className="absolute top-[45%] left-[2%] lg:left-[5%] flex flex-col items-end animate-fade-slide-in stagger-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-2">
                <ChristianCross className="w-3 h-3 text-brand-teal" />
                <span className="text-xs font-mono text-brand-teal tracking-widest">FAITH</span>
              </div>
              <div className="h-[1px] w-12 bg-gradient-to-l from-brand-teal/50 to-transparent" />
            </div>

            {/* Status Indicator */}
            <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[10px] font-mono text-white/50 tracking-widest uppercase">Network Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL IMPACT Video Section (New) */}
      <section className="py-24 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-brand-teal text-sm font-mono tracking-wider uppercase mb-4 block">Global Impact</span>
          <AnimatedText
            text="Watch how God is working through TIEV to transform lives across the earth."
            className="text-3xl lg:text-5xl font-semibold text-white mb-8"
            animationType="words"
          />
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,131,130,0.1)] group">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/u9DHVMvMTt8?rel=0&modestbranding=1&hd=1&vq=hd1080"
              title="TIEV Global Impact"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="relative py-24 overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Treasures in Earthen Vessels exists to reach the unreached, care for the poor,
              and discover the treasure found in every Nation, Tribe and Tongue.
              Through intentional discipleship, compassionate aid, and spiritual formation,
              we partner with local believers to strengthen the church and bring the hope
              limitless love of Christ to communities.
            </p>
          </div>

          {/* Values Cards using SpotlightCard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tievValues.map((value, index) => (
              <SpotlightCard key={index} className="p-8" spotlightColor="emerald" variant="matte">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-brand-teal/10 flex items-center justify-center mb-6 border border-brand-teal/20">
                    <value.icon className="w-7 h-7 text-brand-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-white/60 leading-relaxed">{value.description}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey in Pictures (New Gallery) */}
      <section className="py-24 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-6">
              Our Journey in Pictures
            </h2>
            <p className="text-xl text-white/70">
              Moments captured from our ministry work across the Middle East
            </p>
          </div>

          {/* Parallax Grid Component */}
          <ParallaxGrid />
        </div>
      </section>

      {/* Where We Work Section */}
      <section className="relative py-24 overflow-hidden bg-black/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-teal text-sm font-mono tracking-wider uppercase mb-4 block">Our Global Presence</span>
            <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-6">
              Where We Work
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Serving communities across the 10/40 window—the regions with the greatest spiritual and physical need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tievProjects.map((project, index) => (
              <Link href={project.link} key={index}>
                <div className="group relative h-[400px] overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] cursor-pointer">
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0">
                    <img src={project.image} alt={project.country} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-8">
                    <span className="text-brand-teal text-xs font-mono tracking-wider uppercase mb-2 inline-flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" />
                      {project.focus}
                    </span>
                    <h3 className="text-3xl font-semibold text-white mb-3 group-hover:text-brand-teal transition-colors duration-300 transform translate-y-2 group-hover:translate-y-0">{project.country}</h3>
                    <p className="text-white/70 leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 text-sm">{project.description}</p>

                    <div className="flex items-center gap-2 text-white text-sm font-medium opacity-50 group-hover:opacity-100 transition-opacity">
                      <span>Explore Project</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section - Enhanced with Animations */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated SVG Paths */}
        <AnimatedSVGPath />

        {/* Floating Hearts */}
        <FloatingHearts />

        {/* Particle Field */}
        <ParticleField />

        {/* Background glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] bg-brand-teal/10 rounded-full blur-[150px] animate-pulse-slow" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 rounded-full px-4 py-2 mb-8 animate-fade-slide-in">
            <Heart className="w-4 h-4 text-brand-teal animate-pulse" />
            <span className="text-brand-teal text-sm font-medium">Partner With Us</span>
          </div>

          <AnimatedText
            text="Get Involved"
            className="text-4xl lg:text-6xl font-semibold text-white mb-6"
            animationType="words"
          />

          <AnimatedText
            text="Join us in bringing hope and transformation to the Middle East & Asia. There are many ways you can partner with us in this vital work."
            className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed"
            animationType="words"
            delay={300}
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-slide-in stagger-2">
            <Link href="/donate">
              <ShinyButton>
                <span className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Give Today
                </span>
              </ShinyButton>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 hover:border-brand-teal/40 transition-all font-medium group"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
