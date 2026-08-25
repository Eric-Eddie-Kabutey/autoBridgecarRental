import React from 'react';

export default function TradeInHero() {
    return (
        <section className="bg-black text-white py-24 px-6 md:px-12 font-sans">
            <div className="max-w-5xl mx-auto">
                {/* Small Tagline */}
                <p className="text-[14px] md:text-[16px] font-bold uppercase tracking-[0.25em] mb-4">
                    For Sellers <span className="text-gray-500 mx-1">•</span> Vehicle Value
                </p>

                {/* Main Heading */}
                <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                    Trade In <br />
                    Your Car
                </h2>

                {/* Description */}
                <p className="text-lg md:text-2xl font-medium max-w-2xl opacity-90 mb-10 leading-snug">
                    Exchange your current vehicle for a better one with our seamless,
                    instant valuation trade-in process.
                </p>

                {/* The Requested Button */}
                <button className="bg-[#FFCC00] text-black px-10 py-5 rounded-xl font-extrabold text-xl hover:bg-[#E6B800] transition-all active:scale-95 shadow-lg">
                    Trade in
                </button>

                {/* Small disclaimer/requirement text from the design style */}
                <p className="mt-12 text-sm text-gray-400 max-w-xl leading-relaxed">
                    Requirements include a vehicle in drivable condition, proof of ownership,
                    and a completed inspection at one of our authorized centers.
                </p>
            </div>
        </section>
    );
}