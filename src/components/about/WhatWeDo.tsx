"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export default function AboutSection() {
    // Animation variants for a smooth fade-up effect when scrolling into view
    const containerVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        },
    };

    return (
        // Applying the Red Hat font variable globally to this section
        <section className="w-full bg-white py-24 md:py-32 flex justify-center items-center font-[family-name:var(--font-redhat)]">

            {/* Centered container with a max-width for optimal reading length */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }} // Triggers animation slightly before it fully enters the viewport
                className="max-w-[850px] px-6 md:px-12 flex flex-col items-center"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-4xl lg:text-[40px] text-black mb-8 md:mb-10 text-center tracking-tight"
                >
                    {/* Note the font weight difference matching your design */}
                    <span className="font-bold">What we do at </span>
                    <span className="font-normal">CarOnSale</span>
                </motion.h2>

                <motion.p
                    variants={itemVariants}
                    className="text-base md:text-[17px] leading-[1.7] md:leading-[1.8] text-zinc-800 text-left w-full"
                >
                    CarOnSale is reshaping the B2B used car wholesale market with its trusted, transparent, and
                    technology-driven platform infrastructure, empowering used car dealers across Europe. By
                    collaborating with professional dealerships and leveraging cutting-edge technology,
                    CarOnSale delivers the market&apos;s most seamless and efficient trading solutions. With offerings
                    like price algorithms, guaranteed pricing, financing, and fulfillment services, CarOnSale ensures
                    a smooth and transparent transaction experience for all involved parties.
                </motion.p>
            </motion.div>
        </section>
    );
}