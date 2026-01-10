'use client';

import { Globe, Heart, Users, ArrowRight, MapPin, Star } from 'lucide-react';
import SpotlightCard from '@/components/SpotlightCard';
import ShinyButton from '@/components/ShinyButton';
import Link from 'next/link';

export default function MiddleEastProject() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10" />
                {/* Placeholder for Middle East landscape/ministry image */}
                <div className="absolute inset-0 bg-stone-900" />

                <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/20 border border-brand-teal/30 backdrop-blur-md mb-6">
                        <Globe className="w-4 h-4 text-brand-teal" />
                        <span className="text-brand-teal text-sm font-semibold tracking-wider uppercase">Regional Focus</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                        Middle East Region
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
                        Equipping missionaries and deepening discipleship in the lands of the Bible.
                    </p>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-24 bg-black relative">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                                Missionary Discipleship
                            </h2>
                            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                                <p>
                                    The Middle East is not just a mission field; it acts as a launching pad. Our work in the region extends beyond a single country, focusing on a broader movement of equipping and sending.
                                </p>
                                <p>
                                    We focus on <span className="text-white font-medium">immersive discipleship</span>—living life alongside local believers and international workers. Through training programs, hands-on ministry, and community living, we are raising up a generation ready to serve in difficult places.
                                </p>
                                <p>
                                    Whether it is through prayer houses, refugee ministry, or leadership training, our goal is to see the glory of God established in the very region where the Gospel began.
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-6">
                            <SpotlightCard className="p-8" spotlightColor="emerald">
                                <Users className="w-10 h-10 text-brand-teal mb-6" />
                                <h3 className="text-xl font-bold text-white mb-3">Equipping & Training</h3>
                                <p className="text-white/60">
                                    Providing verified training for long-term workers, focusing on language, culture, and spiritual resilience.
                                </p>
                            </SpotlightCard>
                            <SpotlightCard className="p-8" spotlightColor="emerald">
                                <Star className="w-10 h-10 text-brand-teal mb-6" />
                                <h3 className="text-xl font-bold text-white mb-3">Strategic Partnerships</h3>
                                <p className="text-white/60">
                                    Connecting with local ministries to amplify impact across borders and support indigenous movements.
                                </p>
                            </SpotlightCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats / Impact (Generalized for region) */}
            <section className="py-20 border-y border-white/5 bg-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div>
                            <div className="text-4xl lg:text-5xl font-bold text-brand-teal mb-2">10+</div>
                            <p className="text-white/50 uppercase tracking-widest text-sm">Years of Presence</p>
                        </div>
                        <div>
                            <div className="text-4xl lg:text-5xl font-bold text-brand-teal mb-2">Multiple</div>
                            <p className="text-white/50 uppercase tracking-widest text-sm">Training Hubs</p>
                        </div>
                        <div>
                            <div className="text-4xl lg:text-5xl font-bold text-brand-teal mb-2">Countless</div>
                            <p className="text-white/50 uppercase tracking-widest text-sm">Lives Impacted</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6 text-center max-w-3xl">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
                        Join the Movement
                    </h2>
                    <p className="text-xl text-white/60 mb-12">
                        Support the training of workers and the spread of the Gospel in the Middle East.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/donate">
                            <ShinyButton>
                                <span className="flex items-center gap-2">
                                    <Heart className="w-5 h-5 text-brand-teal" />
                                    Support Regional Work
                                </span>
                            </ShinyButton>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
