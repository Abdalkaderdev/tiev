'use client';

import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface FloatingHeart {
    id: number;
    x: number;
    delay: number;
    duration: number;
    size: number;
}

export default function FloatingHearts() {
    const [hearts, setHearts] = useState<FloatingHeart[]>([]);

    useEffect(() => {
        // Generate random floating hearts
        const heartArray: FloatingHeart[] = Array.from({ length: 15 }, (_, i) => ({
            id: i,
            x: Math.random() * 100, // Random x position (0-100%)
            delay: Math.random() * 5, // Random delay (0-5s)
            duration: 8 + Math.random() * 4, // Random duration (8-12s)
            size: 16 + Math.random() * 16, // Random size (16-32px)
        }));
        setHearts(heartArray);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {hearts.map((heart) => (
                <div
                    key={heart.id}
                    className="absolute bottom-0 animate-float-up"
                    style={{
                        left: `${heart.x}%`,
                        animationDelay: `${heart.delay}s`,
                        animationDuration: `${heart.duration}s`,
                    }}
                >
                    <Heart
                        className="text-brand-teal/20"
                        style={{
                            width: `${heart.size}px`,
                            height: `${heart.size}px`,
                        }}
                        fill="currentColor"
                    />
                </div>
            ))}
        </div>
    );
}
