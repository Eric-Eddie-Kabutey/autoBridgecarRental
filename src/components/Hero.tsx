'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import gsap from 'gsap'
import { Phone } from 'lucide-react' // Added for a polished button icon

interface HeroProps {
    onLoaded?: () => void
    show?: boolean
}

export default function Hero({ onLoaded, show = true }: HeroProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const hasAnimated = useRef(false)
    const router = useRouter()
    const [ searchQuery, setSearchQuery ] = useState('')

    useEffect(() => {
        if (show && !hasAnimated.current && containerRef.current) {
            hasAnimated.current = true
            gsap.to(containerRef.current,
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: 'power3.out',
                    onComplete: () => {
                        if (onLoaded) onLoaded()
                    }
                }
            )
        }
    }, [ show, onLoaded ])

    const handleSearch = () => {
        if (searchQuery.trim()) {
            router.push(`/cars?search=${encodeURIComponent(searchQuery.trim())}`)
        } else {
            router.push('/cars')
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    return (
        <section className="relative h-auto md:h-screen flex items-center justify-center overflow-hidden">
            <div
                ref={containerRef}
                className="container relative z-10 px-6 text-center text-white opacity-0 transform translate-y-8"
            >
                <h1 className="text-5xl mt-64 md:mt-0 md:text-7xl font-bold mb-6 tracking-tight">
                    DRIVE <span className="text-emerald-500">WITH CONFIDENCE.</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Affordable, reliable car rentals in The Gambia—clean vehicles, smooth bookings, and support when you need it.
                </p>


                <div className="bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20 max-w-lg mx-auto flex items-center shadow-2xl mb-32 md:mb-0">
                    <input
                        type="text"
                        placeholder="Search a car (e.g. Mercedes, Tucson...)"
                        className="bg-transparent border-none text-white placeholder-gray-400 px-6 py-3 w-full focus:outline-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-emerald-500 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-600 transition-all active:scale-95"
                    >
                        SEARCH
                    </button>
                </div>
            </div>

            {/* --- NEW: Floating CTA (Bottom Left Corner of the Component) --- */}
            <div className="absolute bottom-6 left-6 z-50 bg-[#FFCC00] text-black p-6 rounded-xl shadow-2xl max-w-[280px]">
                <p className="font-bold text-lg leading-tight mb-4 tracking-tight">
                    Do you have a car for rent?
                </p>
                {/* Replace href with your actual phone number */}
                <a
                    href="tel:+2200000000"
                    className="flex items-center justify-center gap-2 bg-black text-white px-5 py-3 rounded text-[14px] font-bold w-full hover:bg-gray-800 transition-all shadow-md hover:shadow-lg"
                >
                    <Phone className="w-4 h-4" />
                    Call us now
                </a>
            </div>
        </section>
    )
}