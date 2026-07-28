"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// --- Data-Driven Architecture ---
const faqData = [
    {
        question: 'What is "Buy Now, Pay Later," and what are the benefits for me as a buyer?',
        answer: 'Buy Now, Pay Later (BNPL) is a flexible financing solution that allows you to acquire vehicles immediately while deferring the payment for a set period (e.g., 30, 60, or 90 days). The primary benefit is improved cash flow, enabling you to expand your inventory and sell the vehicle before the invoice is due, without tying up your own capital.'
    },
    {
        question: 'Who is eligible for "Buy Now, Pay Later"?',
        answer: 'Eligibility requires your business to be registered and operational in supported regions (currently Germany, Austria, and Poland). Additionally, you must have successfully purchased and paid for at least three vehicles through the CarOnSale platform prior to applying for activation.'
    },
    {
        question: 'Can I finance all vehicles through "Buy Now, Pay Later"?',
        answer: 'Most vehicles listed on our platform are eligible for BNPL. However, specific high-risk categories or heavily damaged vehicles might be excluded. Eligible vehicles will clearly display a "BNPL available" badge on their auction detail page.'
    },
    {
        question: 'How do I activate "Buy Now, Pay Later"?',
        answer: 'Navigate to the "My Purchases" section in your account dashboard and click the "Unlock Now" button. Our payment provider will conduct a rapid, impartial background check on your company details. Once verified, the feature will be activated automatically.'
    },
    {
        question: 'What happens if my activation request is denied?',
        answer: 'If denied, you will receive a notification outlining the general reason (e.g., insufficient purchase history or credit limits). You can still continue purchasing vehicles using our standard immediate payment methods and can reapply for BNPL after 90 days or once the criteria are met.'
    },
    {
        question: 'How do I select "Buy Now, Pay Later" after winning an auction?',
        answer: 'When you win an auction and proceed to the checkout screen, "Buy Now, Pay Later" will appear as a selectable payment method. Simply choose it, select your preferred repayment term, and digitally sign the agreement to confirm.'
    },
    {
        question: "What happens if my booking request is denied after I've made the purchase?",
        answer: 'In the rare event that a specific transaction fails the real-time credit check during checkout, you will be prompted to complete the transaction using a standard wire transfer or alternative payment method to secure the vehicle.'
    },
    {
        question: 'Is there a limit on "Buy now, pay later"?',
        answer: 'Yes, each approved dealership is assigned a maximum financing limit based on their credit assessment and platform history. You can use BNPL for multiple vehicles simultaneously as long as the total combined value does not exceed your assigned credit limit.'
    }
];

export default function FAQ() {
    // State to track which accordion is open. Using a number allows for one open at a time.
    // Set to null initially so all are closed.
    const [ openIndex, setOpenIndex ] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        // If clicking the already open item, close it. Otherwise, open the new one.
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-[#f8f9fa] py-24 md:py-32 font-[family-name:var(--font-redhat)]">
            <div className="max-w-4xl mx-auto px-6 md:px-8">

                {/* Headers */}
                <div className="flex flex-col items-center text-center mb-16">
                    <p className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-black mb-4">
                        Frequently Asked Questions
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] text-black mb-4 tracking-tight">
                        <span className="font-bold">Frequently Asked </span>
                        <span className="font-normal">Questions</span>
                    </h2>
                    <p className="text-gray-600 text-[15px] md:text-base font-medium">
                        Everything you need to know at a glance.
                    </p>
                </div>

                {/* FAQ Accordion List */}
                <div className="flex flex-col gap-4">
                    {faqData.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden relative"
                            >
                                {/* The cyan highlight border - matching your design exactly */}
                                <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#5EEAD4]" />

                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-center justify-between py-5 pl-8 pr-6 text-left transition-colors hover:bg-gray-50/50"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-[14px] md:text-[15px] font-bold text-gray-900 pr-4">
                                        {faq.question}
                                    </span>

                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180 text-black" : "rotate-0"
                                            }`}
                                    />
                                </button>

                                {/* Animated Answer Body */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="pb-6 pl-8 pr-6 text-[14px] md:text-[15px] leading-relaxed text-gray-600 font-medium border-t border-gray-50 mt-1 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}