'use client';

import Link from 'next/link';
import { Heart, ArrowRight } from 'lucide-react';
import SpotlightCard from '@/components/SpotlightCard';
import ShinyButton from '@/components/ShinyButton';

const givingOptions = [
    {
        title: 'One-Time Gift',
        description: 'Make an immediate impact with a single donation of any amount.',
        cta: 'Give Now',
        link: 'https://ywamorganic.org/support/104',
    },
    {
        title: 'Monthly Partner',
        description: 'Join our team of faithful supporters with a recurring monthly gift.',
        cta: 'Become a Partner',
        link: 'https://ywamorganic.org/support/104',
    },
    {
        title: 'Project-Specific',
        description: 'Direct your gift to a specific country or ministry initiative.',
        cta: 'Choose a Project',
        link: '/projects',
    },
];

export default function DonatePage() {
    return (
        <>
            {/* Donate Hero */}
            <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-24">
                <div className="absolute inset-0 radial-glow-teal -z-10" />
                <div className="absolute top-20 left-[20%] w-[400px] h-[400px] bg-brand-teal/15 rounded-full blur-[120px]" />

                <div className="max-w-4xl mx-auto px-6 py-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 rounded-full px-4 py-2 mb-8 animate-fade-slide-in">
                        <Heart className="w-4 h-4 text-brand-teal" />
                        <span className="text-brand-teal text-sm font-medium">Partner With Us</span>
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-semibold text-white mb-6 animate-fade-slide-in stagger-1">
                        Give Today
                    </h1>

                    <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto animate-fade-slide-in stagger-2">
                        Your generosity enables us to reach more communities, train more leaders,
                        and share hope with those who need it most. Every gift makes an eternal difference.
                    </p>
                </div>
            </section>

            {/* Giving Options */}
            <section className="relative py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {givingOptions.map((option, index) => (
                            <SpotlightCard key={index} className="p-8">
                                <div className="flex flex-col h-full text-center">
                                    <h3 className="text-xl font-semibold text-white mb-3">{option.title}</h3>
                                    <p className="text-white/60 leading-relaxed flex-grow mb-6">{option.description}</p>
                                    <Link
                                        href={option.link}
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal hover:bg-brand-teal/20 transition-colors font-medium"
                                    >
                                        {option.cta}
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </SpotlightCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Your Impact Section */}
            <section className="relative py-24 overflow-hidden bg-black/50 border-y border-white/5">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="text-brand-teal text-sm font-mono tracking-wider uppercase mb-4 block">Your Impact</span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-12">
                        What Your Gift Accomplishes
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-brand-teal mb-2">4</div>
                            <div className="text-white/70">Countries Served</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-brand-teal mb-2">100+</div>
                            <div className="text-white/70">Leaders Trained</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-brand-teal mb-2">1000s</div>
                            <div className="text-white/70">Lives Touched</div>
                        </div>
                    </div>

                    <p className="text-white/60 mt-12 max-w-2xl mx-auto leading-relaxed">
                        When you give to TIEV, 100% of your donation goes directly to ministry work.
                        We are committed to faithful stewardship of every gift entrusted to us.
                    </p>
                </div>
            </section>

            {/* Other Ways to Give */}
            <section className="relative py-24 overflow-hidden">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold text-white mb-6">
                            Other Ways to Partner
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                            <h3 className="text-xl font-semibold text-white mb-3">Pray With Us</h3>
                            <p className="text-white/60 leading-relaxed">
                                Join our prayer team and receive regular updates about the work
                                and specific needs across our ministry fields.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                            <h3 className="text-xl font-semibold text-white mb-3">Go With Us</h3>
                            <p className="text-white/60 leading-relaxed">
                                Consider joining a short-term mission team or explore long-term
                                opportunities to serve alongside TIEV.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[600px] h-[600px] bg-brand-teal/10 rounded-full blur-[150px]" />
                </div>

                <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl font-semibold text-white mb-6">
                        Ready to Make a Difference?
                    </h2>
                    <p className="text-xl text-white/70 mb-10">
                        Your partnership today enables ministry that will echo for eternity.
                    </p>
                    <Link href="https://ywamorganic.org/support/104">
                        <ShinyButton>
                            <span className="flex items-center gap-2">
                                <Heart className="w-5 h-5" />
                                Give Now
                            </span>
                        </ShinyButton>
                    </Link>
                </div>
            </section>
        </>
    );
}
