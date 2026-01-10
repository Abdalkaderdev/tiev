'use client';

import Link from 'next/link';
import { MapPin, ArrowRight, Heart } from 'lucide-react';
import SpotlightCard from '@/components/SpotlightCard';
import ShinyButton from '@/components/ShinyButton';

const projects = [
    {
        country: 'Philippines',
        focus: 'Discipleship & Church Strengthening',
        description: 'Raising a new generation of leaders through house churches and training future laborers to impact their communities.',
        link: '/projects/philippines',
    },
    {
        country: 'Pakistan',
        focus: 'Brick-Kiln Outreach',
        description: 'Serving alongside local leaders to disciple believers and provide aid to families trapped in brick-kiln labor.',
        link: '/projects/pakistan',
    },
    {
        country: 'Iraq',
        focus: 'Prayer & Church Planting',
        description: 'Establishing houses of prayer and church plants in Erbil, Baghdad, and Mosul through intercession and mercy.',
        link: '/projects/iraq',
    },
    {
        country: 'Middle East',
        focus: 'Missionary Discipleship',
        description: 'Equipping individuals for missionary service through immersive discipleship and hands-on ministry in the region.',
        link: '/projects/middle-east',
    },
];

export default function ProjectsPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-24">
                <div className="absolute inset-0 radial-glow-teal -z-10" />
                <div className="max-w-7xl mx-auto px-6 py-16 text-center">
                    <span className="text-brand-teal text-sm font-mono tracking-wider uppercase mb-4 block">Our Work</span>
                    <h1 className="text-4xl lg:text-6xl font-semibold text-white mb-6">
                        Where We Serve
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Across the 10/40 window, we partner with local believers to reach
                        the unreached and care for the most vulnerable.
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="relative py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <Link href={project.link} key={index}>
                                <SpotlightCard className="p-8 h-full group cursor-pointer">
                                    <div className="flex flex-col h-full">
                                        <div className="flex items-center gap-2 mb-3">
                                            <MapPin className="w-4 h-4 text-brand-teal" />
                                            <span className="text-brand-teal text-sm font-mono tracking-wider uppercase">{project.focus}</span>
                                        </div>
                                        <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-brand-teal transition-colors">
                                            {project.country}
                                        </h2>
                                        <p className="text-white/60 leading-relaxed flex-grow">
                                            {project.description}
                                        </p>
                                        <div className="flex items-center gap-2 mt-4 text-brand-teal text-sm font-medium">
                                            Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[500px] h-[500px] bg-brand-teal/10 rounded-full blur-[120px]" />
                </div>
                <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl font-semibold text-white mb-6">
                        Support Our Global Work
                    </h2>
                    <p className="text-xl text-white/70 mb-10">
                        Your generosity makes it possible to reach more communities across
                        the 10/40 window with hope and help.
                    </p>
                    <Link href="/donate">
                        <ShinyButton>
                            <span className="flex items-center gap-2">
                                <Heart className="w-5 h-5" />
                                Give Today
                            </span>
                        </ShinyButton>
                    </Link>
                </div>
            </section>
        </>
    );
}
