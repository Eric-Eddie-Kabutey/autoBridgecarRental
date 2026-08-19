"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Trophy, ClipboardCheck, CarFront, CheckCircle2, CarIcon } from "lucide-react";

// --- Data-Driven Architecture ---
// We store standard JSX in the data object to easily handle bolding specific text 
// like in the "Important" box of Step 1.
const stepsData = [
    {
        id: 1,
        icon: Lock,
        title: "Browse Our Cars",
        details: [
            'Explore our range of quality vehicles and choose the one that best fits your needs and budget.'
        ],
        buttonText: "Enable Now",
        infoBox: (
            <>
                <strong>Important:</strong> Requirements include at least three successfully paid for and picked up vehicles, <strong>the company must be based in Germany, Austria, or Poland</strong> and a completed activation for &quot;Buy Now, Pay Later.&quot;
            </>
        )
    },
    {
        id: 2,
        icon: Trophy,
        title: "Submit Your Application",
        details: [
            "Complete our simple online application form and provide the required information and supporting documents"
        ],
        buttonText: "Go to Auctions",
        infoBox: null
    },
    {
        id: 3,
        icon: ClipboardCheck,
        title: "Application Review",
        details: [
            "Our team will carefully review your application and contact you if any additional information is needed"
        ],
        buttonText: null,
        infoBox: null
    },
    {
        id: 4,
        icon: CarFront,
        title: "Approval & Agreement",
        details: [
            "Once your application is approved, we’ll explain your financing plan, repayment schedule, and complete the necessary paperwork."
        ],
        buttonText: null,
        infoBox: null
    }, 
    {
        id: 5,
        icon: CarIcon,
        title: "Drive Away",
        details: [
            "Collect your vehicle and begin enjoying your new car while making affordable monthly payments."
        ],
        buttonText: null,
        infoBox: null
    }
];

export default function HowItWorks() {
    const [ activeStepId, setActiveStepId ] = useState(1);

    const activeStepData = stepsData.find((step) => step.id === activeStepId) || stepsData[ 0 ];
    const ActiveIcon = activeStepData.icon;

    return (
        <section className="w-full bg-white py-20 md:py-32 font-[family-name:var(--font-redhat)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="mb-12 md:mb-16">
                    <p className="text-[11px] md:text-[13px] font-black tracking-widest uppercase mb-3 text-black">
                        Step by step
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-[44px] font-black text-black mb-4 tracking-tight">
                        Here&apos;s how it works
                    </h2>
                    <p className="text-gray-600 text-[15px] md:text-base font-medium">
                        Click on a step for more details.
                    </p>
                </div>

                {/* Layout Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Left Column: Step Navigation */}
                    <div className="lg:col-span-5 flex flex-col gap-3">
                        {stepsData.map((step) => {
                            const isActive = activeStepId === step.id;
                            const Icon = step.icon;

                            return (
                                <button
                                    key={step.id}
                                    onClick={() => setActiveStepId(step.id)}
                                    className={`flex items-center text-left w-full p-4 rounded-xl transition-all duration-300 border ${isActive
                                            ? "bg-[#FFCC00] border-[#FFCC00] shadow-md"
                                            : "bg-white border-gray-100 hover:border-gray-300 hover:shadow-sm"
                                        }`}
                                >
                                    {/* Step Icon Container */}
                                    <div
                                        className={`w-12 h-12 shrink-0 rounded-lg flex items-center justify-center mr-4 transition-colors ${isActive ? "bg-white/90 text-black" : "bg-gray-50 text-gray-500"
                                            }`}
                                    >
                                        <Icon className="w-5 h-5 stroke-[2]" />
                                    </div>

                                    {/* Step Text */}
                                    <div className="flex flex-col">
                                        <span
                                            className={`text-[12px] font-bold mb-0.5 ${isActive ? "text-black" : "text-gray-900"
                                                }`}
                                        >
                                            {step.id}
                                        </span>
                                        <span
                                            className={`text-[15px] leading-tight ${isActive ? "font-bold text-black" : "font-medium text-gray-600"
                                                }`}
                                        >
                                            {step.title}
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Column: Active Step Details Pane */}
                    <div className="lg:col-span-7">
                        {/* AnimatePresence allows components to animate out when they are removed from the React tree */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStepData.id}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="bg-white border border-gray-100 rounded-xl p-8 md:p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] h-full"
                            >

                                {/* Details Header */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
                                        <ActiveIcon className="w-5 h-5 text-gray-700 stroke-[2]" />
                                    </div>
                                    <div>
                                        <span className="text-gray-500 text-[13px] font-medium block mb-1">
                                            Step {activeStepData.id}
                                        </span>
                                        <h3 className="text-xl md:text-2xl font-black text-black leading-tight tracking-tight">
                                            {activeStepData.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Details List */}
                                <div className="flex flex-col gap-4 mb-8">
                                    {activeStepData.details.map((detail, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-[18px] h-[18px] shrink-0 text-gray-800 mt-0.5" />
                                            <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed font-medium">
                                                {detail}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Action Button (Optional per step) */}
                                {activeStepData.buttonText && (
                                    <button className="bg-[#FFCC00] text-black font-bold text-[14px] px-6 py-2.5 rounded hover:bg-[#e6b800] transition-colors mb-6 shadow-sm hover:shadow-md">
                                        {activeStepData.buttonText}
                                    </button>
                                )}

                                {/* Information Box (Optional per step) */}
                                {activeStepData.infoBox && (
                                    <div className="bg-[#F8F9FA] border border-gray-200 rounded-lg p-5">
                                        <p className="text-[13px] md:text-[14px] text-gray-800 leading-relaxed">
                                            {activeStepData.infoBox}
                                        </p>
                                    </div>
                                )}

                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}