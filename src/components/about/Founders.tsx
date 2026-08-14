"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Mock Data ---
// In a real app, this might come from a CMS or props.
const founders = [
    {
        name: "Eric Kabutey",
        title: "Chief Executive Officer",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1000&auto=format&fit=crop",
        bio: "Tom gained experience in investment banking, private equity and management consulting at Boston Consulting Group before co-founding COS in 2018 with Oguz, whom he met through a mutual friend, and his old friend Fabian. As CEO, Tom's investor mindset and strategic acumen are critical to navigating market dynamics and achieving COS' goals.",
        linkedin: "#",
    },
    // {
    //     name: "Oguz",
    //     title: "Chief Commercial Officer",
    //     image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
    //     bio: "Oguz brings years of sales expertise and commercial strategy to the table. He leads the commercial operations, focusing on building strong, lasting relationships with dealership partners across Europe and driving top-line growth for the platform.",
    //     linkedin: "#",
    // },
    // {
    //     name: "Max",
    //     title: "Chief Operating Officer",
    //     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    //     bio: "Max oversees the daily operational functions of CarOnSale. With a strong background in logistics and process optimization, he ensures that the platform's fulfillment services, including the complex vehicle logistics, run seamlessly and efficiently.",
    //     linkedin: "#",
    // },
    // {
    //     name: "Fabian",
    //     title: "Chief Technology Officer",
    //     image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
    //     bio: "Fabian is the technical visionary behind the platform. He leads the engineering teams to build scalable, secure, and innovative technological infrastructure, driving features like the proprietary price algorithms that set CarOnSale apart.",
    //     linkedin: "#",
    // },
];

// --- Individual Card Component ---
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FounderCard = ({ founder, index }: { founder: any; index: number }) => {
    const [ isHovered, setIsHovered ] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            className="relative w-full aspect-[3/4] sm:aspect-[4/5] rounded-xl overflow-hidden shadow-lg cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsHovered(!isHovered)} // Important for mobile tap interactions
        >
            {/* Background Image */}
            <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />

            {/* Info Overlay Box */}
            {/* Positioned absolute at the bottom. As its content grows, it expands upwards naturally. */}
            <div className="absolute bottom-2 left-2 right-2 bg-black text-white p-4 rounded-xl shadow-2xl">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-[22px] font-bold leading-none mb-1">
                            {founder.name}
                        </h3>
                        <p className="text-[12px] font-medium text-gray-300">
                            {founder.title}
                        </p>
                    </div>

                    {/* Custom LinkedIn Icon matching the yellow design */}
                    <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()} // Prevents mobile tap from immediately opening link if trying to read bio
                        className="text-[#FFCC00] hover:brightness-110 transition-all"
                        aria-label={`${founder.name}'s LinkedIn`}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            className="rounded-sm"
                        >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor" />
                        </svg>
                    </a>
                </div>

                {/* Collapsible Bio Text */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <p className="text-[11px] md:text-[12px] leading-[1.6] text-gray-200">
                                {founder.bio}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

// --- Main Section Component ---
export default function Founders() {
    return (
        // Applied background color and standard Red Hat font variable
        <section className="w-full bg-[#f8f9fa] py-24 md:py-32 px-6 md:px-12 font-[family-name:var(--font-redhat)]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl lg:text-[40px] text-black mb-16 text-center tracking-tight"
                >
                    <span className="font-bold">Founders</span>
                    <span className="font-normal">of AutoBridge</span>
                </motion.h2>

                {/* Founders Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {founders.map((founder, index) => (
                        <FounderCard key={founder.name} founder={founder} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}