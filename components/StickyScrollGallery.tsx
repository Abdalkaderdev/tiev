'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import Image from 'next/image';

interface GridItem {
    id: number;
    image: string;
    title?: string;
    description?: string;
}

const items: GridItem[] = [
    {
        id: 1,
        image: 'https://tiev.global/wp-content/uploads/2025/11/Iraq_WordPress_Style_Layout-derek-teaching-768x1024.jpg',
        title: 'Teaching & Discipleship',
        description: 'Equipping the next generation of leaders through deep biblical study and mentorship.'
    },
    {
        id: 2,
        image: 'https://tiev.global/wp-content/uploads/2025/12/IMG_3335-1.jpg',
        title: 'Ministry Moments',
        description: 'Witnessing the transformation of lives through the power of the Gospel.'
    },
    {
        id: 3,
        image: 'https://tiev.global/wp-content/uploads/2025/10/Group-768x1024.jpg',
        title: 'Community Gatherings',
        description: 'Building strong communities of faith where believers can grow together.'
    },
    {
        id: 4,
        image: 'https://tiev.global/wp-content/uploads/2025/12/IMG_7413-scaled.jpg',
        title: 'Field Work',
        description: 'Boots on the ground: serving communities with tangible aid and spiritual support.'
    },
    {
        id: 5,
        image: 'https://tiev.global/wp-content/uploads/2025/10/WhatsApp-Image-2025-09-15-at-06.15.09-768x1024.jpeg',
        title: 'Field Ministry',
        description: 'Reaching the unreached in the most challenging environments.'
    },
    {
        id: 6,
        image: 'https://tiev.global/wp-content/uploads/2025/10/WhatsApp-Image-2025-09-15-at-06.20.49-768x1024.jpeg',
        title: 'Outreach',
        description: 'Extending a hand of love to those in need, regardless of background.'
    },
];

export default function StickyScrollGallery() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Height of the scrollable area. More height = slower transitions.
    // 300vh means the user scrolls 3 screens worth of height to see all items.
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    return (
        <div ref={containerRef} className="relative h-[400vh] bg-[#080808]"> {/* Increased height for smoother scroll */}
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <div className="relative w-full max-w-5xl h-[80vh] px-6 flex items-center justify-center">
                    {items.map((item, index) => {
                        // Determine the range for this specific item
                        const step = 1 / items.length;
                        const start = index * step;
                        const end = start + step;

                        return (
                            <Card
                                key={item.id}
                                item={item}
                                scrollYProgress={scrollYProgress}
                                start={start}
                                end={end}
                                index={index}
                                total={items.length}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

const Card = ({
    item,
    scrollYProgress,
    start,
    end,
    index,
    total
}: {
    item: GridItem,
    scrollYProgress: MotionValue<number>,
    start: number,
    end: number,
    index: number,
    total: number
}) => {
    // Reveal logic:
    // We want the item to be fully visible when scroll is within [start, end].
    // We can fade in as it approaches start, and fade out as it leaves end.

    // Smooth transition in/out
    const opacity = useTransform(
        scrollYProgress,
        [start - 0.1, start, end - 0.1, end],   // Adjust offsets for overlap/fading
        [0, 1, 1, 0]
    );

    const scale = useTransform(
        scrollYProgress,
        [start - 0.1, start, end],
        [0.8, 1, 1.1]
    );

    const y = useTransform(
        scrollYProgress,
        [start - 0.1, start, end],
        [50, 0, -50]
    );

    // Z-index ensures correct stacking order, though opacity mostly handles visibility
    const zIndex = index;

    return (
        <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ opacity, scale, y, zIndex }}
        >
            <div className="relative w-full h-full md:w-[800px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl pointer-events-auto">
                <Image
                    src={item.image}
                    alt={item.title || "Gallery Image"}
                    fill
                    className="object-cover"
                    priority={index === 0}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-xl"
                    >
                        <h3 className="text-3xl font-semibold text-white mb-3">{item.title}</h3>
                        {item.description && (
                            <p className="text-white/80 text-lg leading-relaxed">{item.description}</p>
                        )}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}
