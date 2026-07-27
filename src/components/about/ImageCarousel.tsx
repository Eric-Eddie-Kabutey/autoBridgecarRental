"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const testimonials = [
    {
        id: 1,
        backgroundImage: "/vehicles/carousel-img1.webp", // Replace with actual path
        logo: "/path-to-heinen-logo.png", // Replace with actual path
        content:
            "We at Motor Center Heinen GmbH appreciate the good cooperation with CarOnSale. If we have any questions or problems, the customer service team is always on hand with help and advice. In CarOnSale we have found the right partner for our B2B business.",
    },
    {
        id: 2,
        backgroundImage: "/vehicles/carousel-img2.webp", // Replace with actual path
        logo: "/path-to-heinen-logo.png", // Replace with actual path
        content:
            "We at Motor Center Heinen GmbH appreciate the good cooperation with CarOnSale. If we have any questions or problems, the customer service team is always on hand with help and advice. In CarOnSale we have found the right partner for our B2B business.",
    },
];

export function ImageCarousel() {
    const [ api, setApi ] = React.useState<CarouselApi>();
    const [ current, setCurrent ] = React.useState(0);

    React.useEffect(() => {
        if (!api) return;

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [ api ]);

    return (
        <div className="relative w-full max-w-6xl mx-auto px-4 py-12">
            <Carousel setApi={setApi} className="w-full overflow-hidden rounded-xl">
                <CarouselContent>
                    {testimonials.map((item, index) => (
                        <CarouselItem key={item.id}>
                            <div className="relative aspect-[21/9] w-full overflow-hidden">
                                {/* Background Image */}
                                <Image
                                    src={item.backgroundImage}
                                    alt="Car Showroom"
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                />

                                {/* Testimonial Card Overlay */}
                                <AnimatePresence mode="wait">
                                    {current === index && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                            className="absolute bottom-8 right-8 z-10 w-full max-w-md md:max-w-lg"
                                        >
                                            <div className="bg-white p-6 md:p-8 rounded-sm shadow-xl">
                                                <div className="mb-6 h-12 relative w-32">
                                                    <Image
                                                        src={item.logo}
                                                        alt="Company Logo"
                                                        fill
                                                        className="object-contain object-left"
                                                    />
                                                </div>
                                                <p className="text-sm md:text-base text-slate-700 leading-relaxed font-medium">
                                                    {item.content}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Navigation Buttons */}
            <div className="flex justify-end gap-4 mt-6 pr-2">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => api?.scrollPrev()}
                    className="hover:bg-transparent"
                >
                    <ChevronLeft className="h-8 w-8 stroke-[1.5px]" />
                    <span className="sr-only">Previous slide</span>
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => api?.scrollNext()}
                    className="hover:bg-transparent"
                >
                    <ChevronRight className="h-8 w-8 stroke-[1.5px]" />
                    <span className="sr-only">Next slide</span>
                </Button>
            </div>
        </div>
    );
}