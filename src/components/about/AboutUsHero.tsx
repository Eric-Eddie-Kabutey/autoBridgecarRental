"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function AboutUsHero() {
    // Framer Motion animation variants for a staggered fade-up reveal
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        // font-[family-name:var(--font-redhat)] enforces your typography
        // We use a flex container to split the screen 50/50 on desktop
        // pt-24 ensures the content sits comfortably below your fixed navbar
        <section className="relative w-full min-h-screen flex flex-col md:flex-row bg-black font-[family-name:var(--font-redhat)] pt-20 md:pt-24">

            {/* 
        --- LEFT COLUMN: TEXT & CTA ---
      */}
            <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-16 md:py-0 lg:px-12 z-10 relative">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-[550px] w-full flex flex-col items-start"
                >
                    {/* Main Heading */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-3xl md:text-4xl lg:text-[44px] font-black text-white uppercase tracking-tight mb-10 leading-[1.15]"
                    >
                        ONE PLATFORM. TURNING<br />
                        DREAMS OF CAR OWNERSHIP<br />
                        INTO REALITY<br />                        
                    </motion.h1>

                    {/* CTA Button */}
                    <motion.div variants={itemVariants}>
                        <Button
                            size="lg"
                            className="bg-[#FFCC00] hover:bg-[#e6b800] text-black font-bold px-8 py-7 rounded-[2px] text-[15px] transition-all duration-300 shadow-[0_0_15px_rgba(255,204,0,0.15)] hover:shadow-[0_0_25px_rgba(255,204,0,0.3)]"
                        >
                            Get to know more about us
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* 
        --- RIGHT COLUMN: IMAGE & FRAME OVERLAY ---
      */}
            <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-0 overflow-hidden bg-zinc-900">

                {/* The Car Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full"
                >
                    {/* Sourced a high-quality Mercedes image. 
              The grayscale filter is applied directly via Tailwind so you don't need a pre-edited asset. */}
                    <img
                        src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2000&auto=format&fit=crop"
                        alt="European Automotive Industry"
                        className="w-full h-full object-cover object-center grayscale contrast-125 brightness-90"
                    />
                </motion.div>

                {/* 
          The Yellow Frame Overlay 
          Using border with opacity (/70) allows the car to remain visible underneath the yellow frame
        */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    className="absolute inset-y-[15%] inset-x-[15%] border-[20px] lg:border-[30px] border-[#FFCC00]/70 pointer-events-none z-10 shadow-2xl mix-blend-overlay"
                />

                {/* Optional: Secondary solid inner frame to ensure the yellow pops against extremely dark parts of the image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="absolute inset-y-[15%] inset-x-[15%] border-[20px] lg:border-[30px] border-[#FFCC00]/30 pointer-events-none z-10"
                />

            </div>

        </section>
    );
}