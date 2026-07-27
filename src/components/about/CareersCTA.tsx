"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CareersCTA() {
    return (
        <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/careers/career-cta-bg.webp" // Replace with your image path
                    alt="CarOnSale Team"
                    fill
                    className="object-cover grayscale brightness-[0.3]"
                    priority
                />
                {/* Extra overlay for text readability if needed */}
                <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 container mx-auto px-4 text-center text-white"
            >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                    You want to <span className="font-extrabold">become</span> part of <br className="hidden md:block" />
                    CarOnSale?
                </h2>

                <p className="text-lg md:text-xl font-medium mb-10 opacity-90">
                    We are happy to receive your application.
                </p>

                <Button
                    size="lg"
                    className="bg-[#FFCC00] hover:bg-[#E6B800] text-black font-bold px-8 py-6 text-lg rounded-md transition-transform hover:scale-105 active:scale-95"
                >
                    See open positions
                </Button>
            </motion.div>
        </section>
    );
}