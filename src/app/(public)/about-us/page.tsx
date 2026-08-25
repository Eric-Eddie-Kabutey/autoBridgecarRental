import Founders from "@/components/about/Founders";
import AboutUsHero from "@/components/about/AboutUsHero";
import AboutSection from "@/components/about/WhatWeDo";
import History from "@/components/about/History";
import Outlook from "@/components/about/Outlook";
import Investors from "@/components/about/Investors";
import TeamImageStrip from "@/components/about/TeamImageStrip";
import Clients from "@/components/about/Clients";
import CareersCTA from "@/components/about/CareersCTA";
import TestimonialCarousel from "@/components/about/TestimonialCarousel";

export default function AboutUsPage() {
    return (<>
        <AboutUsHero />
        <AboutSection />
        <Founders />
        {/* <History /> */}
        <Outlook />
        {/* <Investors /> */}
        <TeamImageStrip />
        {/* <Clients />         */}
        {/* <TestimonialCarousel /> */}
        {/* <CareersCTA /> */}
    </>)
}