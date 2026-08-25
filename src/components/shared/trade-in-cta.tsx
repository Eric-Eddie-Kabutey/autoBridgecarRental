'use client'

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from "framer-motion";

export default function TradeInCTA() {
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
            <motion.div variants={itemVariants} className="w-full bg-black py-20 px-6 flex justify-center items-center mb-6">
                <Link
                    href="/trade-in"
                    className="bg-[#FFCC00] hover:bg-[#e6b800] text-black font-bold px-8 py-4 rounded-md text-[14px] transition-all duration-300 shadow-[0_0_15px_rgba(255,204,0,0.15)] hover:shadow-[0_0_25px_rgba(255,204,0,0.3)]"
                >
                    Trade in
                </Link>
            </motion.div>
    );
}