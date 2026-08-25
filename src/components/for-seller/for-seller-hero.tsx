import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SellerHero() {
    return (
        <section className="relative w-full bg-black text-white overflow-hidden">
            {/* Background Decor (Optional Subtle Glow) */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFCC00] opacity-[0.03] blur-[120px] rounded-full -mr-48 " />

            <div className="container mx-auto px-6 lg:px-12  md:pt-54 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="flex flex-col items-start">
                        {/* Tagline */}
                        <p className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.3em] mb-6">
                            For Sellers <span className="text-gray-600 mx-2">•</span> B2B Marketing
                        </p>

                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                            Sell your car <br />
                            <span className="text-[#FFCC00]">at top price</span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-lg font-medium max-w-lg opacity-80 mb-10 leading-snug">
                            From vehicle collection to B2B marketing — reach over 30,000 verified dealers
                            across Europe and sell your vehicles in record time.
                        </p>

                        {/* Primary Action */}
                        <Link
                            href="/sell-now"
                            className="bg-[#FFCC00] text-black px-12 py-4 rounded-xl font-black text-xl hover:bg-[#E6B800] transition-all hover:scale-105 active:scale-95 shadow-xl"
                        >
                            Sell Now
                        </Link>

                        {/* Fine Print / Requirements */}
                        <p className="mt-16 text-xs md:text-sm text-gray-500 max-w-md leading-relaxed border-t border-white/10 pt-6">
                            Requirements include a company registered in the EU or UK,
                            valid VAT identification, and a completed activation for the
                            &quot;Seller Auction Platform.&quot;
                        </p>
                    </div>

                    {/* Right Image Container */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#FFCC00] to-transparent opacity-20 blur rounded-2xl group-hover:opacity-30 transition duration-1000"></div>
                        <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="/vehicles/buy-now-pay-later-hero-bg.avif"
                                alt="Professional car sales environment"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            {/* Dark overlay to match design theme */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}