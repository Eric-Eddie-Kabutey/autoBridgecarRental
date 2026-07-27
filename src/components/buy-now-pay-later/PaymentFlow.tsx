"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Store,
    WalletCards,
    CheckCircle2,
    ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
    {
        step: "STEP 1",
        icon: Store,
        title: "Payment by service provider",
        description: "When a booking is made, the payment service provider pays the purchase price directly to CarOnSale.",
        highlight: true, // Specific styling for the first card
    },
    {
        step: "STEP 2",
        icon: WalletCards,
        title: "Your payment to the service provider",
        description: "The payment goes directly to our partner payment service provider.",
        highlight: false,
    },
    {
        step: "STEP 3",
        icon: CheckCircle2,
        title: "Approved by CarOnSale",
        description: "Once payment is received, CarOnSale confirms the transaction and releases the vehicle documents.",
        highlight: false,
    },
];

export default function PaymentFlow() {
    return (
        <section className="bg-[#F4F6F8]">
            <div className="py-24 px-6 max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-3 block">
                        Payment
                    </span>
                    <h2 className="text-3xl md:text-4xl leading-tight text-slate-900 mb-6">
                        Who is your payment <span className="font-extrabold">going to?</span>
                    </h2>
                    <p className="text-base text-slate-600 font-medium">
                        Clear payment flow, full transparency.
                    </p>
                </div>

                {/* Steps Container */}
                <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-4 lg:gap-0">
                    {steps.map((item, index) => (
                        <React.Fragment key={index}>
                            {/* Step Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className={cn(
                                    "flex-1 p-8 rounded-xl border transition-all duration-300 w-full max-w-sm lg:max-w-none",
                                    item.highlight
                                        ? "bg-[#F0FDFF] border-[#CCF6FC]" // Step 1 light cyan theme
                                        : "bg-white border-slate-100 shadow-sm"
                                )}
                            >
                                <span className="text-[10px] font-bold tracking-wider text-slate-900 block mb-6">
                                    {item.step}
                                </span>

                                <div className="mb-6">
                                    <item.icon size={28} strokeWidth={1.5} className="text-slate-900" />
                                </div>

                                <h3 className="text-lg font-bold text-slate-900 mb-4 leading-snug">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                    {item.description}
                                </p>
                            </motion.div>

                            {/* Arrow (Hidden on mobile/tablet, visible between cards on desktop) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:flex items-center justify-center px-4">
                                    <ArrowRight className="text-slate-400" size={20} />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Footer Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-8 text-[11px] text-slate-500 font-medium"
                >
                    Note: The payment request contains all the important payment information from the service provider.
                </motion.p>
            </div>
        </section>
    );
}