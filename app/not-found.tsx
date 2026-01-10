'use client';

import Link from 'next/link';
import ShinyButton from '@/components/ShinyButton';
import { Home } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 radial-glow-teal -z-10 opacity-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-teal/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="text-center px-6 relative z-10">
                <h1 className="text-9xl font-bold text-white/5 mb-4">404</h1>
                <h2 className="text-3xl font-semibold text-white mb-6">Page Not Found</h2>
                <p className="text-xl text-white/60 mb-10 max-w-md mx-auto">
                    The page you are looking for might have been moved or does not exist.
                </p>

                <Link href="/">
                    <ShinyButton>
                        <span className="flex items-center gap-2">
                            <Home className="w-5 h-5" />
                            Return Home
                        </span>
                    </ShinyButton>
                </Link>
            </div>
        </div>
    );
}
