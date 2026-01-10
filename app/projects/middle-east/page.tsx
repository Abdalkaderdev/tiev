'use client';

import { Globe, Heart, Users, ArrowRight, MapPin, Target, Send } from 'lucide-react';
import SpotlightCard from '@/components/SpotlightCard';
import ShinyButton from '@/components/ShinyButton';
import Link from 'next/link';

export default function MiddleEastProject() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-36 pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-50 z-0 pointer-events-none" style={{ maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)' }} />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-teal/10 rounded-[100%] blur-[120px] pointer-events-none -z-10" />

                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-teal/10 bg-brand-teal/5 mb-8 backdrop-blur-sm animate-fade-slide-in">
                            <MapPin className="w-3 h-3 text-brand-teal" />
                            <span className="text-[10px] uppercase tracking-widest font-medium text-teal-200/80">
                                Join the Mission
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-white animate-fade-slide-in stagger-1">
                            Join the Mission:<br />
                            <span className="text-brand-teal text-glow-teal">Serve, Pray, Go, or Give</span>
                        </h1>

                        <p className="text-xl text-neutral-400 animate-fade-slide-in stagger-2 leading-relaxed">
                            God is moving in the Middle East and the nations of the 10/40 Window. We are building, pioneering, praying, and calling others to join us—short-term, long-term, through intercession, or through financial partnership.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 border-t border-white/5 bg-[#080808]">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-semibold text-white mb-6 text-center">Join Us in the Mission of God Among the Nations</h2>
                    <div className="prose prose-lg prose-invert text-neutral-400 leading-relaxed space-y-4 mb-12">
                        <p>
                            For the past several years, the Lord has rooted our family in Northern Iraq, revealing His deep love for the Muslim world and His desire to draw hearts to Himself. In this season, He is expanding the work into Israel, Japan, the Philippines, and Pakistan, and we are building in a way that allows others to join the mission.
                        </p>
                        <p>
                            Whether you feel called to go, to pray, or to support, there is a place for you in this story.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,131,130,0.1)] group mb-12">
                        <div className="aspect-[16/9] relative">
                            <img
                                src="https://tiev.global/wp-content/uploads/2025/10/Group-768x1024.jpg"
                                alt="Middle East Ministry"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* We Are Looking For */}
            <section className="py-24 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-semibold text-white mb-8 text-center">We are looking for believers who:</h2>

                    <div className="space-y-4 mb-12">
                        {[
                            'Carry God\'s heart for the nations and the 10/40 Window',
                            'Desire to serve on short-term teams or explore long-term missions',
                            'Feel the weight and privilege of interceding for breakthrough',
                            'Want to partner financially with a mission God is expanding',
                            'Long to see Jesus heal, deliver, and save in regions hungry for hope'
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-brand-teal/30 transition-all">
                                <div className="w-6 h-6 rounded-full bg-brand-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <div className="w-2 h-2 rounded-full bg-brand-teal" />
                                </div>
                                <p className="text-white/80 leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="prose prose-lg prose-invert text-neutral-400 leading-relaxed space-y-4">
                        <p>
                            We've watched Him move again and again, through prayer, through obedience, through simple dependence on His power.
                        </p>
                        <p>
                            And now, as we continue to build Treasure in Earthen Vessels, we are opening the door for others who sense the Lord's stirring to step forward.
                        </p>
                        <p>
                            If your heart is tugging… if you've wondered how you can be part of what God is doing among the nations… if you want to explore joining us in any capacity, we want to hear from you.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Cards */}
            <section className="py-24 border-t border-white/5 bg-[#080808]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">
                            Ready to Take the Next Step?
                        </h2>
                        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                            Click below to share your information. When you fill out the form, we'll send you the application and connect with you personally to discuss how you can join the mission.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <SpotlightCard className="p-8 text-center border border-white/10 bg-white/[0.02]" spotlightColor="emerald">
                            <Target className="w-12 h-12 text-brand-teal mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-3">Pray</h3>
                            <p className="text-neutral-400 text-sm">
                                Join the prayer movement for the nations and the 10/40 Window.
                            </p>
                        </SpotlightCard>

                        <SpotlightCard className="p-8 text-center border border-white/10 bg-white/[0.02]" spotlightColor="emerald">
                            <Heart className="w-12 h-12 text-brand-teal mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-3">Give</h3>
                            <p className="text-neutral-400 text-sm">
                                Support the mission financially as God expands the work across nations.
                            </p>
                        </SpotlightCard>

                        <SpotlightCard className="p-8 text-center border border-white/10 bg-white/[0.02]" spotlightColor="emerald">
                            <Send className="w-12 h-12 text-brand-teal mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-3">Go</h3>
                            <p className="text-neutral-400 text-sm">
                                Serve short-term or explore long-term missions with our team.
                            </p>
                        </SpotlightCard>
                    </div>

                    <div className="text-center">
                        <Link href="/contact">
                            <ShinyButton>
                                <span className="flex items-center gap-2">
                                    <ArrowRight className="w-5 h-5" />
                                    Get Started — Begin The Application
                                </span>
                            </ShinyButton>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
