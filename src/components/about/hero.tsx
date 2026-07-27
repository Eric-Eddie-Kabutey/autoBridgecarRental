"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
    // Framer motion animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        // Applying the Red Hat font variable globally to this section wrapper
        <section className="min-h-screen w-full bg-black grid grid-cols-1 md:grid-cols-2 font-[family-name:var(--font-redhat)]">

            {/* LEFT COLUMN: Text Content & CTA */}
            <div className="flex flex-col justify-center pt-26 lg:pt-36 px-8 md:px-16 lg:px-24 z-10 relative">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-xl"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-5xl lg:text-4xl font-black text-white uppercase leading-[1.1] tracking-wide mb-10"
                    >
                        One Platform. A<br />
                        Profit Engine for<br />
                        The European<br />
                        Automotive<br />
                        Industry
                    </motion.h1>

                    <motion.div variants={itemVariants}>
                        <Button
                            size="lg"
                            className="bg-[#FFCC00] text-black hover:bg-[#e6b800] rounded-sm px-8 py-6 text-base font-bold transition-all duration-300 shadow-[0_0_15px_rgba(255,204,0,0.2)] hover:shadow-[0_0_25px_rgba(255,204,0,0.4)]"
                        >
                            Get to know more about us
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* RIGHT COLUMN: Image & Overlay */}
            <div className="relative w-full h-[50vh] md:h-full min-h-[400px] pt-26 overflow-hidden bg-zinc-900">
                <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    {/* Replace src with your actual car image path */}
                    <img
                        src="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1974&auto=format&fit=crop"
                        alt="European Automotive Industry"
                        className="w-full h-full object-cover grayscale brightness-75 contrast-125"
                    />
                </motion.div>

                {/* Yellow Frame Overlay */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    className="absolute top-[10%] bottom-[10%] left-[10%] right-[10%] md:top-[30%] md:bottom-[10%] md:left-[15%] md:right-[15%] border-[16px] md:border-[24px] border-[#FFCC00] mix-blend-overlay opacity-80 pointer-events-none z-10"
                />

                {/* Secondary subtle solid frame to ensure visibility in highly contrasted areas */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="absolute top-[10%] bottom-[10%] left-[10%] right-[10%] md:top-[25%] md:bottom-[15%] md:left-[15%] md:right-[15%] border-[16px] md:border-[24px] border-[#FFCC00] opacity-30 pointer-events-none z-10"
                />
            </div>
        </section>
    );
}