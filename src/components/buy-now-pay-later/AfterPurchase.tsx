"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ReceiptText, ShieldCheck, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
    {
        icon: ReceiptText,
        title: "Invoice with payment due date",
        description:
            "You will receive an invoice specifying the exact payment due date and the payment service provider's details.",
    },
    {
        icon: ShieldCheck,
        title: "Vehicle documents kept safe",
        description:
            "We will securely hold all vehicle documents until full payment has been received.",
    },
    {
        icon: Zap,
        title: "Fast processing",
        description:
            "As soon as the service provider receives payment, the documents will be sent out immediately.",
    },
];

export default function AfterPurchase() {
    // Animation variants for staggering the cards
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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
        <section className="bg-white">
            <div className="py-24 px-6 max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="mb-16">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-3 block">
                        After Purchase
                    </span>
                    <h2 className="text-3xl md:text-4xl leading-tight text-slate-900 mb-6">
                        <span className="font-extrabold">What happens</span> after the purchase?
                    </h2>
                    <p className="text-base text-slate-600 font-medium">
                        A transparent process from invoicing to document delivery.
                    </p>
                </div>

                {/* Feature Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="h-full border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl overflow-hidden">
                                <CardContent className="p-8 flex flex-col h-full">
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <feature.icon
                                            size={32}
                                            strokeWidth={1.5}
                                            className="text-slate-800"
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-extrabold text-slate-900 mb-4 leading-snug">
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}