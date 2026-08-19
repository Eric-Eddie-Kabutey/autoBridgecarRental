'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// --- Mock Data ---
// We duplicate the array of images to ensure the track is long enough
// that it never runs out of content as the user scrolls.
const baseImages = [
	{
		alt: 'Team collaborating',
		url: '/team/team1.jpeg',
	},
	{
		alt: 'Smiling at screen',
        url: '/team/team2.jpeg',
	},
	{
		alt: 'Portrait on yellow',
        url: '/team/team3.jpeg',
	},
	{
		alt: 'Focused developer',
        url: '/team/team4.jpeg',
	},
]

// Combine them to create a seamless longer track (8 images total)
const images = [...baseImages, ...baseImages]

export default function ScrollImageStrip() {
	const targetRef = useRef<HTMLDivElement>(null)

	// 1. useScroll tracks the progress of the targetRef passing through the viewport.
	// "start end" means animation starts when the top of the container hits the bottom of the viewport.
	// "end start" means it ends when the bottom of the container hits the top of the viewport.
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['start end', 'end start'],
	})

	// 2. useTransform maps that vertical scroll progress (0 to 1)
	// into a horizontal translation (x-axis move).
	// Starting slightly offset to the right (5%), moving far to the left (-50%).
	const x = useTransform(scrollYProgress, [0, 1], ['5%', '-50%'])

	return (
		// The container tracks the scroll and hides any overflow
		<section
			ref={targetRef}
			className='w-full relative overflow-hidden bg-white py-12 md:py-24 font-[family-name:var(--font-redhat)]'>
			{/* 
        The motion.div applies the dynamic x-axis transform.
        We make it extremely wide (w-[max-content] or flex) to hold all images side-by-side.
      */}
			<motion.div style={{ x }} className='flex w-max'>
				{images.map((img, index) => (
					<div
						key={index}
						// Explicit sizing based on viewport width to maintain the aspect ratio.
						// On desktop, 4 images will roughly span 100vw (25vw each).
						// The 8 total images will span 200vw, giving us plenty of scrolling runway.
						className='relative h-[350px] md:h-[400px] lg:h-[500px] w-[85vw] sm:w-[50vw] lg:w-[25vw] shrink-0'>
						{/* 
              A tiny border or gap can be added here if desired, 
              but based on your screenshots, we keep it edge-to-edge.
            */}
						<img
							src={img.url}
							alt={img.alt}
							className='w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500 cursor-default'
						/>
					</div>
				))}
			</motion.div>
		</section>
	)
}
