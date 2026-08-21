"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export default function Investors() {
    // Framer Motion variants for staggered entry animations
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
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        },
    };

    return (
        <section className="w-full bg-white py-20 md:py-32 flex flex-col items-center justify-center overflow-hidden border-t border-gray-100">

            {/* Section Header */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-[40px] text-black mb-16 md:mb-24 text-center tracking-tight"
            >
                <span className="font-bold">Our </span>
                <span className="font-normal">Investors</span>
            </motion.h2>

            {/* Logo Grid / Flex Container */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="w-full max-w-7xl px-8 flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-24"
            >

                {/* 1. DK Telecom */}
                <motion.div variants={itemVariants} className="flex justify-center group cursor-pointer">
                    <div className="flex flex-col items-center group-hover:scale-105 transition-transform duration-300">
                        <p className="text-[#00B259] font-black text-4xl md:text-[44px] leading-none tracking-tighter">
                            LIFT CREDIT
                        </p>
                    </div>
                </motion.div>

                {/* 2. GT Bank */}
                <motion.div variants={itemVariants} className="flex flex-col items-center justify-center group cursor-pointer">
                    <div className="flex flex-col items-center group-hover:scale-105 transition-transform duration-300">
                        <p className="text-[#E32128] font-black text-4xl md:text-[44px] leading-none tracking-tighter">
                            TOURMATE
                        </p>                        
                    </div>
                </motion.div>

                {/* 3. NAFA */}
                <motion.div variants={itemVariants} className="flex justify-center group cursor-pointer">
                    <div className="flex flex-col items-center group-hover:scale-105 transition-transform duration-300">
                        <p className="text-black font-black text-4xl md:text-[44px] leading-none tracking-tighter">
                            CODEPAY
                        </p>
                    </div>
                </motion.div>

                {/* 4. Housing Gambia */}
                <motion.div variants={itemVariants} className="flex flex-col items-center justify-center group cursor-pointer">
                    <div className="flex flex-col items-center group-hover:scale-105 transition-transform duration-300">
                        {/* SVG approximation of the logo bars */}
                        {/* <svg width="42" height="18" viewBox="0 0 50 25" className="mb-1">
                            <path d="M12 25L18 0H24L18 25z M2 25L8 0H14L8 25z M22 25L28 0H34L28 25z M32 25L38 0H44L38 25z" fill="#C4D600" />
                        </svg> */}
                        <div className="flex flex-col items-center group-hover:scale-105 transition-transform duration-300">
                            <p className="text-[#C4D600] font-black text-4xl md:text-[44px] leading-none tracking-tighter">
                                RICIA CARE
                            </p>

                        </div>
                    </div>
                </motion.div>               

            </motion.div>
        </section>
    );
}