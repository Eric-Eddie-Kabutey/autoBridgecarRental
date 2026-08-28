"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroBuyNowPayLater() {

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
        // min-h-[90vh] ensures it takes up most of the screen while allowing the user to peek at the next section
        <section className="relative w-full min-h-[95vh] pt-36 flex items-center bg-black font-[family-name:var(--font-redhat)] overflow-hidden">

            {/* 
        --- BACKGROUND IMAGE & GRADIENTS ---
        We position the image absolutely on the right side.
        The gradients ensure the text on the left remains perfectly readable by fading to black.
      */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                {/* Desktop Gradient: Fades from solid black on the left, to transparent on the right */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10 w-full md:w-3/4 lg:w-2/3" />

                {/* Mobile Gradient: Additional bottom-to-top fade to ensure text readability on small screens where things stack */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 md:hidden" />

                {/* The Car Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute right-0 top-0 h-full w-full md:w-[55%] lg:w-[55%]"
                >
                    {/* I've sourced a high-quality, dark Mercedes image similar to your mockup */}
                    <img
                        src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2000&auto=format&fit=crop"
                        alt="Dark luxury car front"
                        className="w-full h-full object-cover object-center md:object-right"
                    />
                </motion.div>
            </div>

            {/* 
        --- FOREGROUND CONTENT --- 
        Relative positioning with z-20 brings it above the background image and gradients.
        pt-32 ensures it clears your fixed Navbar.
      */}
            <div className="container relative z-20 mx-auto px-6 md:px-12 pt-46 pb-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-xl flex flex-col items-start"
                >
                    {/* Pre-heading */}
                    <motion.span
                        variants={itemVariants}
                        className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white mb-4 block"
                    >
                        WANT TO TRADE IN?
                    </motion.span>

                    {/* Main Heading */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-3xl md:text-4xl lg:text-[46px] font-black text-white uppercase tracking-tight mb-6 leading-[1.1]"
                    >
                        Upgrade Your Car <br /> With AutoBridge
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        variants={itemVariants}
                        className="text-[14px] md:text-[15px] text-gray-200 mb-6 font-medium leading-relaxed max-w-md"
                    >
                        Have a car already but want something different? Trade in your current vehicle and explore other cars available through AutoBridge.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div variants={itemVariants} className="mb-6">
                        <Button
                            size="lg"
                            className="bg-[#FFCC00] hover:bg-[#e6b800] text-black font-bold px-8 py-6 rounded-md text-[14px] transition-all duration-300 shadow-[0_0_15px_rgba(255,204,0,0.15)] hover:shadow-[0_0_25px_rgba(255,204,0,0.3)]"
                        >
                            Trade in
                        </Button>
                    </motion.div>                   
                </motion.div>
            </div>

        </section>
    );
}