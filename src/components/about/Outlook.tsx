"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export default function Outlook() {
    // Framer Motion variants for staggered animations
    const textVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    };

    const gridVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const imageVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        // Applied background color and standard Red Hat font variable
        <section className="w-full bg-black py-24 md:py-32 font-[family-name:var(--font-redhat)] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header */}
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={textVariants}
                    className="text-3xl md:text-4xl lg:text-[40px] mb-20 md:mb-32 text-center tracking-tight"
                >
                    <span className="font-bold">2024 and beyond: </span>
                    <span className="font-normal">Outlook into the future</span>
                </motion.h2>

                {/* --- Block 1: Images Left, Text Right --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-24 md:mb-32">

                    {/* Left: Image Grid 1 */}
                    <motion.div
                        variants={gridVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-4 h-[350px] sm:h-[450px]"
                    >
                        {/* Top Left Image */}
                        <motion.div variants={imageVariants} className="col-start-1 row-start-1 rounded-xl overflow-hidden bg-zinc-900">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                                alt="Team working"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                        {/* Bottom Left Image */}
                        <motion.div variants={imageVariants} className="col-start-1 row-start-2 rounded-xl overflow-hidden bg-zinc-900">
                            <img
                                src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1000&auto=format&fit=crop"
                                alt="Car parked"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                        {/* Right Tall Image */}
                        <motion.div variants={imageVariants} className="col-start-2 row-span-2 rounded-xl overflow-hidden bg-zinc-900">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1000&auto=format&fit=crop"
                                alt="Handshake agreement"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Right: Text Content 1 */}
                    <motion.div
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col justify-center"
                    >
                        {/* Subtle separator line matching the design */}
                        <div className="w-full h-[1px] bg-slate-700 mb-8" />
                        <p className="text-[15px] md:text-base leading-[1.7] md:leading-[1.8] text-gray-200 font-medium">
                            Our vision for CarOnSale is to become the premier pan-European managed B2B
                            used car marketplace. Leveraging our market-leading technology platform,
                            robust dealership partnerships across Europe, and exceptional team, we aim to
                            scale further, targeting annual sales of 1 million used cars through our platform.
                            By providing technology-based solutions tailored to our dealership partners&apos;
                            needs, we strive to solve their day-to-day challenges and enhance their used
                            car transaction experience. As a partner, not a competitor, we are committed to
                            mutual growth, ensuring their success is our success.
                        </p>
                    </motion.div>
                </div>


                {/* --- Block 2: Text Left, Images Right --- */}
                {/* Note: Uses flex order utilities to reverse layout on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

                    {/* Left: Text Content 2 */}
                    <motion.div
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col justify-center order-2 md:order-1"
                    >
                        {/* Subtle separator line */}
                        <div className="w-full h-[1px] bg-slate-700 mb-8" />
                        <p className="text-[15px] md:text-base leading-[1.7] md:leading-[1.8] text-gray-200 font-medium">
                            To achieve our ambitious goals, we will optimize our platform for high-volume
                            customers, prioritizing trust, reliability, and speed. We plan to enhance the
                            transaction experience by offering additional solutions, including vehicle intake,
                            fintech services, logistics, operational services, and adjacent products. Data
                            and AI-enabled solutions will further refine the used car transaction process.
                            Looking ahead, CarOnSale aims to build a scalable and sustainable
                            organization with a robust business model centered on cutting-edge
                            technology, reflecting our commitment to growth and excellence.
                        </p>
                    </motion.div>

                    {/* Right: Image Grid 2 */}
                    <motion.div
                        variants={gridVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-4 h-[350px] sm:h-[450px] order-1 md:order-2"
                    >
                        {/* Left Tall Image */}
                        <motion.div variants={imageVariants} className="col-start-1 row-span-2 rounded-xl overflow-hidden bg-zinc-900">
                            <img
                                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1000&auto=format&fit=crop"
                                alt="Large team gathering"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                        {/* Top Right Image */}
                        <motion.div variants={imageVariants} className="col-start-2 row-start-1 rounded-xl overflow-hidden bg-zinc-900">
                            <img
                                src="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=1000&auto=format&fit=crop"
                                alt="Mechanics inspecting car"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                        {/* Bottom Right Image */}
                        <motion.div variants={imageVariants} className="col-start-2 row-start-2 rounded-xl overflow-hidden bg-zinc-900">
                            <img
                                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
                                alt="Coding and technology"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}