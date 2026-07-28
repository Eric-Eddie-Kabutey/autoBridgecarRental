"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Mock Data ---
// You can easily expand this array with more testimonials
const testimonials = [
    {
        id: 1,
        // Using a high-quality relevant car image as placeholder
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2000&auto=format&fit=crop",
        quote: "We at Motor Center Heinen GmbH appreciate the good cooperation with CarOnSale. If we have any questions or problems, the customer service team is always on hand with help and advice. In CarOnSale we have found the right partner for our B2B business.",
        // A function to render the custom logo (so it can be an SVG, Tailwind art, or image tag later)
        renderLogo: () => (
            <div className="flex flex-col items-start relative pt-3 w-max mb-6">
                <div className="absolute top-0 left-[5%] right-[5%] h-3 border-t-[1.5px] border-gray-400 rounded-t-[100%] opacity-70"></div>
                <div className="text-[#E31837] font-black text-[28px] tracking-tighter leading-none">heinen</div>
                <div className="text-[7px] text-gray-500 tracking-wider mt-1 uppercase">Service von Mensch zu Mensch</div>
            </div>
        )
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?q=80&w=2000&auto=format&fit=crop",
        quote: "Since transitioning our wholesale operations to CarOnSale, our turnaround times have decreased significantly. The platform's transparency and the efficiency of the bidding process allow us to focus more on our core retail business.",
        renderLogo: () => (
            <div className="mb-6">
                <div className="text-[#1D4A86] font-serif font-black italic text-3xl tracking-tight leading-none mb-1">robinson</div>
                <div className="text-[6px] text-gray-500 uppercase tracking-[0.2em]">Deine Mobilität. Unsere Leidenschaft.</div>
            </div>
        )
    }
];

// --- Framer Motion Variants for Slider ---
const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

export default function TestimonialCarousel() {
    const [ [ page, direction ], setPage ] = useState([ 0, 0 ]);

    // Wrap the index if we go out of bounds
    const imageIndex = Math.abs(page % testimonials.length);

    const paginate = (newDirection: number) => {
        setPage([ page + newDirection, newDirection ]);
    };

    return (
        <section className="w-full bg-white py-24 md:py-32 font-[family-name:var(--font-redhat)]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">

                {/* Carousel Container */}
                <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden rounded-md bg-zinc-100 group">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={page}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);
                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            className="absolute inset-0 w-full h-full"
                        >
                            {/* Background Image */}
                            <img
                                src={testimonials[ imageIndex ].image}
                                alt="Testimonial background"
                                className="w-full h-full object-cover"
                                draggable="false" // Prevents native image dragging interfering with Framer drag
                            />

                            {/* White Testimonial Overlay Box */}
                            <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 bg-white p-8 md:p-10 w-[90%] sm:w-[450px] md:w-[500px] shadow-2xl z-20">
                                {testimonials[ imageIndex ].renderLogo()}
                                <p className="text-[14px] md:text-[15px] text-gray-800 leading-[1.7] font-medium">
                                    {testimonials[ imageIndex ].quote}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Controls */}
                <div className="flex justify-end gap-6 mt-8">
                    <button
                        onClick={() => paginate(-1)}
                        className="text-black hover:text-gray-500 transition-colors duration-200"
                        aria-label="Previous testimonial"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <button
                        onClick={() => paginate(1)}
                        className="text-black hover:text-gray-500 transition-colors duration-200"
                        aria-label="Next testimonial"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

            </div>
        </section>
    );
}