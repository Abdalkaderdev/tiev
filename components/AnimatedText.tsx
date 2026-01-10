'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedTextProps {
    text: string;
    className?: string;
    delay?: number;
}

export default function AnimatedText({ text, className = '', delay = 0 }: AnimatedTextProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
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
    }, [delay]);

    // Split text into words and letters
    const words = text.split(' ');

    return (
        <div ref={ref} className={className}>
            {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-2">
                    {word.split('').map((char, charIndex) => {
                        const totalIndex = words.slice(0, wordIndex).join('').length + charIndex;
                        return (
                            <span
                                key={charIndex}
                                className="inline-block"
                                style={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                    transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${totalIndex * 0.03}s`,
                                }}
                            >
                                {char}
                            </span>
                        );
                    })}
                </span>
            ))}
        </div>
    );
}
