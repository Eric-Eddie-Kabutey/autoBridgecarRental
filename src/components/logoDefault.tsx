import React from 'react';
import Link from 'next/link';

interface LogoProps {
    className?: string;
    height?: number;
}

export default function LogoDefault({ className = "", height = 60 }: LogoProps) {
    // We use height as the primary controller to keep the proportions perfect
    const width = height * 2.8;

    return (
        <Link href="/" className={`inline-block ${className}`} style={{ height: `${height}px`, width: `${width}px` }}>
            <svg
                viewBox="0 0 300 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >
                {/* Sleek Car Silhouette */}
                <path
                    d="M72 45L98 22C102 19 115 18 125 18H235C245 18 255 20 280 40L295 50"
                    stroke="white"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Chassis / Lower line of car */}
                <path
                    d="M75 52H290"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.6"
                />

                {/* TM Symbol */}
                <text
                    x="288"
                    y="35"
                    fill="#EAB308" /* Gold/Yellow color from image */
                    fontSize="10"
                    fontWeight="900"
                    fontFamily="Arial, sans-serif"
                >
                    TM
                </text>

                {/* The Text Box */}
                <rect
                    x="45"
                    y="58"
                    width="215"
                    height="32"
                    rx="5"
                    fill="white"
                />

                {/* The Text */}
                <text
                    x="152.5"
                    y="82"
                    fill="black"
                    fontSize="22"
                    fontWeight="900"
                    textAnchor="middle"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    letterSpacing="-0.5"
                >
                    AUTOBRIDGE
                </text>

                {/* Bottom underline / base */}
                <path
                    d="M60 98H245"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </svg>
        </Link>
    );
}