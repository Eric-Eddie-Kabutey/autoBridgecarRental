"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export default function Clients() {
    // Framer Motion variants for staggered entry animations
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Faster stagger for more items
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        },
    };

    return (
        // Applied the Red Hat font variable globally to this section wrapper
        <section className="w-full bg-white py-24 md:py-32 font-[family-name:var(--font-redhat)] flex flex-col items-center overflow-hidden">

            {/* Section Header */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-[40px] text-black mb-16 md:mb-24 text-center tracking-tight"
            >
                <span className="font-bold">Clients who </span>
                <span className="font-normal">trust in CarOnSale</span>
            </motion.h2>

            {/* Logo Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="w-full max-w-6xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 lg:gap-x-20 lg:gap-y-24 items-center justify-items-center"
            >

                {/* 1. Robinson */}
                <motion.div variants={itemVariants} className="flex flex-col items-center group cursor-pointer w-full">
                    <div className="group-hover:scale-110 transition-transform duration-300 flex flex-col items-center">
                        <div className="text-[#1D4A86] font-serif font-black italic text-2xl md:text-3xl tracking-tight leading-none mb-1">
                            robinson
                        </div>
                        <div className="text-[5px] md:text-[6px] text-gray-500 uppercase tracking-[0.2em]">
                            Deine Mobilität. Unsere Leidenschaft. Est. 1928
                        </div>
                    </div>
                </motion.div>

                {/* 2. Heinen */}
                <motion.div variants={itemVariants} className="flex flex-col items-center group cursor-pointer w-full">
                    <div className="group-hover:scale-110 transition-transform duration-300 flex flex-col items-center relative pt-2">
                        <div className="absolute top-0 left-[10%] right-[10%] h-3 border-t-[1.5px] border-gray-400 rounded-t-[100%] opacity-70"></div>
                        <div className="text-[#E31837] font-black text-2xl md:text-[28px] tracking-tighter leading-none">
                            heinen
                        </div>
                        <div className="text-[6px] md:text-[7px] text-gray-600 tracking-wider mt-1">
                            Service von Mensch zu Mensch
                        </div>
                    </div>
                </motion.div>

                {/* 3. Auto Eder Gruppe */}
                <motion.div variants={itemVariants} className="flex flex-col items-center group cursor-pointer w-full">
                    <div className="group-hover:scale-110 transition-transform duration-300 flex flex-col items-center">
                        <div className="text-black font-serif italic font-bold text-lg md:text-xl relative">
                            AUTO EDER
                            <span className="absolute -top-1 -right-2 w-6 h-1 bg-[#E31837] rounded-[100%] transform rotate-[-10deg]"></span>
                        </div>
                        <div className="text-black font-serif italic text-xs">
                            Gruppe
                        </div>
                    </div>
                </motion.div>

                {/* 4. Auto Bayer Gruppe */}
                <motion.div variants={itemVariants} className="flex flex-col items-center group cursor-pointer w-full">
                    <div className="group-hover:scale-110 transition-transform duration-300 flex flex-col items-center">
                        <div className="text-gray-500 font-bold text-xs md:text-sm tracking-widest mb-1">
                            AUTO BAYER GRUPPE
                        </div>
                        <div className="bg-[#5C6670] text-white px-2 py-[2px] text-[6px] md:text-[7px] w-full text-center">
                            Ihr Ford Partner mitten in Rhein-Main.<br />Alzey | Wiesbaden | Nieder-Olm
                        </div>
                    </div>
                </motion.div>

                {/* 5. Bierschneider */}
                <motion.div variants={itemVariants} className="flex justify-center group cursor-pointer w-full">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                        <div className="bg-[#DE2027] text-white px-3 py-1 font-sans text-sm md:text-base tracking-wide flex items-center gap-1">
                            <span className="flex flex-col gap-[2px]"><span className="w-1 h-1 bg-white rounded-full"></span><span className="w-1 h-1 bg-white rounded-full"></span></span>
                            Bierschneider
                        </div>
                    </div>
                </motion.div>

                {/* 6. Ratio Mobil */}
                <motion.div variants={itemVariants} className="flex flex-col items-center group cursor-pointer w-full">
                    <div className="group-hover:scale-110 transition-transform duration-300 flex flex-col items-center w-[120px]">
                        <svg viewBox="0 0 100 20" className="w-full h-auto mb-1 fill-none stroke-gray-400 stroke-[3]">
                            <path d="M10 20 L10 15 Q10 5 20 5 L80 5 Q90 5 90 15 L90 20" />
                            <path d="M25 5 L30 0 L70 0 L75 5" />
                        </svg>
                        <div className="bg-[#E31837] text-white text-[10px] md:text-[11px] font-bold px-2 py-[2px] w-full text-center tracking-wider">
                            RATIO MOBIL
                        </div>
                        <div className="bg-gray-300 text-gray-500 text-[5px] uppercase w-full text-center py-[2px] tracking-[0.2em]">
                            Ihr Partner fürs Auto
                        </div>
                    </div>
                </motion.div>

                {/* 7. AUTOWELLER */}
                <motion.div variants={itemVariants} className="flex justify-center group cursor-pointer w-full">
                    <div className="group-hover:scale-110 transition-transform duration-300 text-gray-700 font-sans font-bold text-lg md:text-xl tracking-tight">
                        <span className="text-gray-400 font-normal">AUTO</span>WELLER
                    </div>
                </motion.div>

                {/* 8. Skoda Liebe */}
                <motion.div variants={itemVariants} className="flex justify-center group cursor-pointer w-full">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                        <div className="border-[2px] border-black p-[2px]">
                            <div className="bg-black text-white px-2 py-1 text-[11px] md:text-[13px] font-bold leading-tight w-[60px]">
                                Škoda<br />Liebe
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 9. Ostermaier */}
                <motion.div variants={itemVariants} className="flex items-center gap-2 group cursor-pointer w-full justify-center">
                    <div className="group-hover:scale-110 transition-transform duration-300 flex items-center gap-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7A1F1E" strokeWidth="1.5" className="w-8 h-8">
                            <path d="M5 18c0-2 1-4 3-5m10 5c0-2-1-4-3-5m-7-5c1-2 4-2 6 0m-8 6h10" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="12" cy="12" r="9" strokeDasharray="4 4" />
                        </svg>
                        <div className="flex flex-col">
                            <span className="text-[#7A1F1E] font-black text-sm md:text-base leading-none tracking-wide">OSTERMAIER</span>
                            <span className="text-black font-serif italic text-[10px] md:text-xs">Ihre Auto-Familie</span>
                        </div>
                    </div>
                </motion.div>

                {/* 10. NIX */}
                <motion.div variants={itemVariants} className="flex justify-center group cursor-pointer w-full">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                        <div className="text-[#595A5C] font-black text-3xl md:text-4xl tracking-tighter border-b-[3px] border-[#DE2027] pb-1 inline-block leading-none">
                            NIX
                        </div>
                    </div>
                </motion.div>

                {/* 11. Abel+Ruf */}
                <motion.div variants={itemVariants} className="flex flex-col items-center group cursor-pointer w-full">
                    <div className="group-hover:scale-110 transition-transform duration-300 flex flex-col items-center">
                        <div className="text-black font-black text-xl md:text-2xl tracking-tighter leading-none">
                            Abel+Ruf
                        </div>
                        <div className="text-gray-500 font-serif italic text-[7px] md:text-[8px] mt-1">
                            Ihre Zufriedenheit ist unser Antrieb!
                        </div>
                    </div>
                </motion.div>

                {/* 12. Autozentrum Acker */}
                <motion.div variants={itemVariants} className="flex items-center group cursor-pointer w-full justify-center">
                    <div className="group-hover:scale-110 transition-transform duration-300 flex items-center gap-2">
                        <span className="text-gray-600 text-[8px] md:text-[10px] tracking-widest">AUTOZENTRUM</span>
                        <span className="w-[1px] h-3 bg-gray-400"></span>
                        <span className="text-black font-bold text-sm md:text-base tracking-widest">ACKER</span>
                    </div>
                </motion.div>

                {/* 13. Hedin Automotive */}
                <motion.div variants={itemVariants} className="flex justify-center group cursor-pointer w-full md:col-start-2">
                    <div className="group-hover:scale-110 transition-transform duration-300 text-gray-700 font-light text-[10px] md:text-[12px] tracking-[0.15em] uppercase">
                        Hedin Automotive
                    </div>
                </motion.div>

                {/* 14. B&K */}
                <motion.div variants={itemVariants} className="flex justify-center group cursor-pointer w-full">
                    <div className="group-hover:scale-110 transition-transform duration-300 text-[#4A4A4A] font-black text-3xl md:text-4xl tracking-tighter">
                        B&K
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
}