'use client';

import { useEffect, useRef, useState } from 'react';

export default function AnimatedSVGPath() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <svg
            ref={ref}
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Animated flowing path */}
            <path
                d="M 0 400 Q 250 200 500 400 T 1000 400"
                stroke="url(#gradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="10 5"
                className={isVisible ? 'animate-draw-path' : ''}
                style={{
                    strokeDashoffset: isVisible ? 0 : 2000,
                }}
            />

            {/* Second flowing path */}
            <path
                d="M 0 500 Q 250 300 500 500 T 1000 500"
                stroke="url(#gradient2)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="10 5"
                className={isVisible ? 'animate-draw-path-delayed' : ''}
                style={{
                    strokeDashoffset: isVisible ? 0 : 2000,
                }}
            />

            {/* Gradient definitions */}
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(0, 131, 130, 0.1)" />
                    <stop offset="50%" stopColor="rgba(0, 131, 130, 0.4)" />
                    <stop offset="100%" stopColor="rgba(0, 131, 130, 0.1)" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(0, 131, 130, 0.05)" />
                    <stop offset="50%" stopColor="rgba(0, 131, 130, 0.2)" />
                    <stop offset="100%" stopColor="rgba(0, 131, 130, 0.05)" />
                </linearGradient>
            </defs>

            {/* Animated circles along the path */}
            {isVisible && (
                <>
                    <circle r="4" fill="#008382" className="animate-move-along-path">
                        <animateMotion dur="8s" repeatCount="indefinite">
                            <mpath href="#path1" />
                        </animateMotion>
                    </circle>
                    <circle r="3" fill="#008382" opacity="0.6" className="animate-move-along-path-delayed">
                        <animateMotion dur="10s" repeatCount="indefinite">
                            <mpath href="#path2" />
                        </animateMotion>
                    </circle>
                </>
            )}

            {/* Hidden paths for animation */}
            <path id="path1" d="M 0 400 Q 250 200 500 400 T 1000 400" fill="none" />
            <path id="path2" d="M 0 500 Q 250 300 500 500 T 1000 500" fill="none" />
        </svg>
    );
}
