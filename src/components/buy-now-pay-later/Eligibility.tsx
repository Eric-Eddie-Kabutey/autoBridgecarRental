"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const requirements = [
    "Registered car dealer on CarOnSale",
    "At least three vehicles that have been successfully paid for and picked up",
    "Verification of company information with the payment service provider",
];

export default function Eligibility() {
    // Variants for staggering the list items
    const containerVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <section className="bg-[#E9EDF0] py-24 px-6">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                {/* Header Content */}
                <header className="mb-12">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-900 mb-4 block">
                        Requirements
                    </span>
                    <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-4">
                        <span className="font-extrabold">Who is</span> eligible for &quot;Buy Now, Pay Later&quot;?
                    </h2>
                    <p className="text-slate-600 font-medium">
                        Simple requirements to get started.
                    </p>
                </header>

                {/* Requirements Card */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="bg-white w-full max-w-3xl rounded-xl shadow-sm p-8 md:p-12 mb-10 text-left"
                >
                    <ul className="space-y-6">
                        {requirements.map((req, index) => (
                            <motion.li
                                key={index}
                                variants={itemVariants}
                                className="flex items-start gap-4"
                            >
                                <CheckCircle2
                                    size={20}
                                    strokeWidth={1.5}
                                    className="text-slate-900 mt-0.5 flex-shrink-0"
                                />
                                <span className="text-sm md:text-base font-medium text-slate-800 leading-relaxed">
                                    {req}
                                </span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <Button
                        size="lg"
                        className="bg-[#FFCC00] hover:bg-[#E6B800] text-black font-bold px-10 py-6 text-sm rounded-md shadow-sm transition-transform active:scale-95"
                    >
                        Unlock now
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}