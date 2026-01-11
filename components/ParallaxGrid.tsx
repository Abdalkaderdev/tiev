'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

interface GridItem {
    id: number;
    image: string;
    title?: string;
}

const items: GridItem[] = [
    {
        id: 1,
        image: 'https://tiev.global/wp-content/uploads/2025/11/Iraq_WordPress_Style_Layout-derek-teaching-768x1024.jpg',
        title: 'Teaching & Discipleship',
    },
    {
        id: 2,
        image: 'https://tiev.global/wp-content/uploads/2025/12/IMG_3335-1.jpg',
        title: 'Ministry Moments',
    },
    {
        id: 3,
        image: 'https://tiev.global/wp-content/uploads/2025/10/Group-768x1024.jpg',
        title: 'Community Gatherings',
    },
    {
        id: 4,
        image: 'https://tiev.global/wp-content/uploads/2025/12/IMG_7413-scaled.jpg',
        title: 'Field Work',
    },
    {
        id: 5,
        image: 'https://tiev.global/wp-content/uploads/2025/10/WhatsApp-Image-2025-09-15-at-06.15.09-768x1024.jpeg',
        title: 'Field Ministry',
    },
    {
        id: 6,
        image: 'https://tiev.global/wp-content/uploads/2025/10/WhatsApp-Image-2025-09-15-at-06.20.49-768x1024.jpeg',
        title: 'Outreach',
    },
];

export default function ParallaxGrid() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimension, setDimension] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const { height, width } = dimension;

    // Parallax transforms
    const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 1.5]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);

    useEffect(() => {
        const resize = () => {
            setDimension({ width: window.innerWidth, height: window.innerHeight });
        }

        window.addEventListener("resize", resize);
        resize();

        return () => {
            window.removeEventListener("resize", resize);
        }
    }, []);

    if (width === 0) return null; // Avoid hydration mismatch or empty render

    // Determine columns based on width
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;

    // Distribute items
    let columns: GridItem[][] = [[], [], []];

    if (isMobile) {
        // 1 Column
        columns = [[...items]];
    } else if (isTablet) {
        // 2 Columns
        columns = [
            [items[0], items[2], items[4]],
            [items[1], items[3], items[5]]
        ];
    } else {
        // 3 Columns
        columns = [
            [items[0], items[1]],
            [items[2], items[3]],
            [items[4], items[5]]
        ];
    }

    return (
        <div
            ref={containerRef}
            className="relative flex gap-[2vw] p-[2vw] box-border overflow-hidden"
            style={{ height: isMobile ? 'auto' : '175vh' }}
        >
            {isMobile ? (
                <div className="flex flex-col gap-4 w-full">
                    {columns[0].map((img, i) => (
                        <div key={i} className="relative w-full aspect-[3/4] rounded-xl overflow-hidden group">
                            <Image
                                src={img.image}
                                alt={img.title || "image"}
                                fill
                                className="object-cover"
                            />
                            {img.title && (
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                                    <h3 className="text-white text-xl font-medium">{img.title}</h3>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <>
                    <Column images={columns[0]} y={y1} />
                    <Column images={columns[1]} y={y2} />
                    {!isTablet && <Column images={columns[2]} y={y3} />}
                </>
            )}
        </div>
    )
}

const Column = ({ images, y }: { images: GridItem[], y: any }) => {
    return (
        <motion.div
            className="relative h-full w-full flex flex-col gap-[2vw] min-w-[250px]"
            style={{ y }}
        >
            {images.map((img, i) => {
                return (
                    <div key={i} className="relative w-full aspect-[3/4] rounded-[1vw] overflow-hidden group">
                        <Image
                            src={img.image}
                            alt={img.title || "image"}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {img.title && (
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-white text-xl font-medium">{img.title}</h3>
                            </div>
                        )}
                    </div>
                )
            })}
        </motion.div>
    )
}
