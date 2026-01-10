'use client';

import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    className?: string;
}

export default function CountUp({ end, duration = 2000, suffix = '', prefix = '', className = '' }: CountUpProps) {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLSpanElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let startTime: number | null = null;
                    const animate = (currentTime: number) => {
                        if (!startTime) startTime = currentTime;
                        const progress = Math.min((currentTime - startTime) / duration, 1);

                        // Ease out quart
                        const easeProgress = 1 - Math.pow(1 - progress, 4);

                        setCount(Math.floor(easeProgress * end));

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setCount(end);
                        }
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observerRef.current.observe(elementRef.current);
        }

        return () => {
            if (observerRef.current) observerRef.current.disconnect();
        };
    }, [end, duration]);

    return (
        <span ref={elementRef} className={className}>
            {prefix}{count}{suffix}
        </span>
    );
}
