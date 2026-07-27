"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

// --- Mock Data ---
const timelineData = [
    {
        id: "1",
        year: "1970–2000",
        icon: "car",
        text: "Oguz's father, a first-generation immigrant, pursues his entrepreneurial drive and successfully operates a thriving used car business in Nürnberg, Germany",
        image: "https://images.unsplash.com/photo-1543465077-3e8df21b0bc6?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: "2",
        year: "2003",
        icon: "star",
        text: "Recognizing the potential of the internet, Oguz's father registers automobilonline.de, an early online used car trading platform. The platform gains significant attention and is featured in the popular German internet magazine, ComputerBild",
        image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: "3",
        year: "2011",
        icon: "star",
        text: "Oguz opens his own used car dealership and begins trading on early marketplace platforms",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: "4",
        year: "2018",
        icon: "star",
        text: "Frustrated by the lack of transparency and efficiency in the B2B used car trading space, Oguz sets out to create a better solution and meets Tom and Fabian to found CarOnSale.",
        image: null,
    },
];

// --- SVGs ---
const ChevronLeft = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ChevronRight = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const CarIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 19C5 19.5523 4.55228 20 4 20C3.44772 20 3 19.5523 3 19V17H21V19C21 19.5523 20.5523 20 20 20C19.4477 20 19 19.5523 19 19V17H5V19Z" fill="currentColor" />
        <path d="M3 13V15.5C3 16.3284 3.67157 17 4.5 17H19.5C20.3284 17 21 16.3284 21 15.5V13M3 13L4.95728 7.12816C5.22896 6.31311 5.98632 5.75 6.84506 5.75H17.1549C18.0137 5.75 18.771 6.31311 19.0427 7.12816L21 13M3 13H21M6.5 12C7.32843 12 8 11.3284 8 10.5C8 9.67157 7.32843 9 6.5 9C5.67157 9 5 9.67157 5 10.5C5 11.3284 5.67157 12 6.5 12ZM17.5 12C18.3284 12 19 11.3284 19 10.5C19 9.67157 18.3284 9 17.5 9C16.6716 9 16 9.67157 16 10.5C16 11.3284 16.6716 12 17.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const StarBadgeIcon = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 6L13.1225 7.74716L15.1459 8.2918L13.8427 9.87034L13.9443 11.9164L12 11.1459L10.0557 11.9164L10.1573 9.87034L8.8541 8.2918L10.8775 7.74716L12 6Z" fill="currentColor" />
        <path d="M7 13.5L5 21L8.5 19L12 21L15.5 19L19 21L17 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);


// --- Main Component ---
export default function History() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Scroll function for the custom navigation arrows
    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === "left" ? -400 : 400;
            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        // font-[family-name:var(--font-redhat)] enforces your specific typography
        <section className="w-full bg-black py-24 md:py-32 font-[family-name:var(--font-redhat)] overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">

                {/* Header & Controls Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-center mb-16 relative"
                >
                    <div className="flex-1" /> {/* Spacer */}

                    <h2 className="text-3xl md:text-4xl lg:text-[40px] text-white text-center tracking-tight flex-1">
                        <span className="font-normal">Our company </span>
                        <span className="font-bold">history</span>
                    </h2>

                    <div className="flex-1 flex justify-end gap-6 mt-8 md:mt-0">
                        <button
                            onClick={() => scroll("left")}
                            className="text-[#FFCC00] hover:text-white transition-colors duration-300 disabled:opacity-50"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="text-[#FFCC00] hover:text-white transition-colors duration-300"
                            aria-label="Scroll right"
                        >
                            <ChevronRight />
                        </button>
                    </div>
                </motion.div>

                {/* Timeline Scroll Container */}
                {/* We use hide-scrollbar utility classes (which you may need to add to your global css, or inline as done below) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-12"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {/* Hide Webkit scrollbar inline hack */}
                    <style dangerouslySetInnerHTML={{
                        __html: `
            div::-webkit-scrollbar { display: none; }
          `}} />

                    {timelineData.map((item, index) => (
                        <div
                            key={item.id}
                            className="snap-start flex-none w-[85vw] sm:w-[400px] md:w-[450px] relative"
                        >
                            {/* The continuous horizontal yellow line. 
                  It spans the full width of the wrapper block, so when blocks are side-by-side, the line looks unbroken. */}
                            <div className="absolute top-[80px] left-0 w-full h-[1px] bg-[#FFCC00] z-0 opacity-50" />

                            <div className="pr-8 sm:pr-12 relative z-10 flex flex-col h-full">

                                {/* 1. Year and vertical connecting tick */}
                                <div className="h-[80px] relative">
                                    <span className="text-2xl sm:text-[28px] font-bold text-white absolute bottom-6 left-0 tracking-wide">
                                        {item.year}
                                    </span>
                                    {/* Vertical tick connecting year text down to the main horizontal line */}
                                    <div className="absolute bottom-0 left-[1px] w-[2px] h-4 bg-[#FFCC00]" />
                                </div>

                                {/* 2. Icon (positioned slightly below the line) */}
                                <div className="pt-5 pb-6 text-white">
                                    {item.icon === 'car' ? <CarIcon /> : <StarBadgeIcon />}
                                </div>

                                {/* 3. Content Box with left border */}
                                <div className="pl-5 border-l-2 border-[#FFCC00] flex-1 min-h-[250px]">
                                    <p className="text-[14px] sm:text-[15px] leading-relaxed text-gray-200 mb-6 font-medium">
                                        {item.text}
                                    </p>

                                    {item.image && (
                                        <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-zinc-900">
                                            <img
                                                src={item.image}
                                                alt={`History from ${item.year}`}
                                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 ease-in-out"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}