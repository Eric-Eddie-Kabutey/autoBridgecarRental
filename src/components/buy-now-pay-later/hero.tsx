"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
    // Animation variants for staggered text entry
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        },
    };

    return (
        <section className="relative bg-black text-white overflow-hidden flex items-center min-h-[calc(100vh-80px)]">
            <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center z-10 py-12 lg:py-0">

                {/* Left Content Column */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col max-w-2xl"
                >
                    <motion.span
                        variants={itemVariants}
                        className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 text-gray-400"
                    >
                        For Buyers • Pay Later
                    </motion.span>

                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
                    >
                        BUY NOW, <br />
                        PAY LATER
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg"
                    >
                        Buy vehicles now – flexible payment terms of 30, 60, or 90 days.
                    </motion.p>

                    <motion.div variants={itemVariants}>
                        <Button
                            size="lg"
                            className="bg-[#FFCC00] hover:bg-[#E6B800] text-black font-bold px-8 py-6 text-base rounded-sm transition-transform active:scale-95"
                        >
                            Enable Now
                        </Button>
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="mt-12 text-[10px] md:text-[11px] leading-relaxed text-gray-500 max-w-md"
                    >
                        Requirements include at least three vehicles that have been successfully paid for and picked up,
                        a company registered in Germany, Austria, or Poland, and a completed activation for &quot;Buy Now, Pay Later.&quot;
                    </motion.p>
                </motion.div>

                {/* Right Image Column */}
                <motion.div
                    initial={{ opacity: 0, scale: 1.1, x: 100 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative h-[400px] lg:h-[700px] mt-12 lg:mt-0"
                >
                    <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-black via-transparent to-transparent hidden lg:block" />
                    <Image
                        src="/vehicles/buy-now-pay-later-hero-bg.avif" // Replace with your image
                        alt="Mercedes AMG Front"
                        fill
                        className="object-contain lg:object-cover object-center lg:object-right scale-110 lg:scale-125"
                        priority
                    />
                </motion.div>
            </div>

            {/* Subtle Background Detail (optional) */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1a1a1a] to-transparent opacity-50 pointer-events-none" />
        </section>
    );
}