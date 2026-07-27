"use client";

import React from "react";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const paymentTerms = [
    {
        days: "30 days",
        description: "Ideal for quick resales",
        isPopular: false,
    },
    {
        days: "60 days",
        description: "Enough time to resell",
        isPopular: true,
    },
    {
        days: "90 days",
        description: "Maximum flexibility for larger inventories",
        isPopular: false,
    },
];

export default function PaymentTerms() {
    return (
        <section className="bg-[#F4F6F8]">
            <div className="py-24 px-6 max-w-7xl mx-auto">                
                {/* Header Section */}
                <div className="mb-20">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-3 block">
                        Terms
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-tight text-slate-900 mb-6">
                        <span className="font-extrabold">Select</span> your payment terms
                    </h2>
                    <div className="max-w-2xl text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                        <p>Flexible — tailored to your cash flow. By the way, all fees are clearly displayed before you book.</p>
                        <p>No hidden costs.</p>
                    </div>
                </div>

                {/* Timeline Section */}
                <div className="relative mt-32">
                    {/* Horizontal Connecting Line (Desktop) */}
                    <div className="absolute top-8 left-[15%] right-[15%] h-[1px] bg-slate-500 hidden md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-4">
                        {paymentTerms.map((term, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                {/* Popular Badge */}
                                {term.isPopular && (
                                    <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                                        <Badge className="bg-[#FFCC00] hover:bg-[#FFCC00] text-black text-[10px] font-extrabold px-3 py-0.5 rounded-md uppercase tracking-wider border-none">
                                            Popular
                                        </Badge>
                                    </div>
                                )}

                                {/* Icon Container */}
                                <div className="relative z-10 bg-gray-300 p-4 rounded-full mb-6">
                                    <Calendar
                                        size={48}
                                        strokeWidth={1.5}
                                        className="text-slate-900"
                                    />
                                </div>

                                {/* Text Content */}
                                <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                                    {term.days}
                                </h3>
                                <p className="text-sm text-slate-500 font-medium max-w-[200px] leading-relaxed">
                                    {term.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}