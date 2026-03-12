"use client";

import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";

const container = "max-w-6xl mx-auto px-6 lg:px-8 w-full";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const whyRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  return (
    <main>
      <section
        id="hero"
        ref={heroRef}
        className="relative overflow-hidden min-h-screen flex items-center justify-center w-full"
      >
        <div className={container}>
          <HeroSection sectionRef={heroRef} />
        </div>
      </section>


      <section
        id="about"
        ref={aboutRef}
        className="relative overflow-hidden pt-48 pb-64 lg:pt-80 lg:pb-96 bg-black flex flex-col items-center w-full"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <AboutSection sectionRef={aboutRef} />
        </div>
      </section>

      <div className="h-32 lg:h-64 bg-black" />

      <section
        id="services"
        ref={servicesRef}
        className="relative overflow-hidden py-64 lg:py-96 bg-[#0d0d0d] flex flex-col items-center w-full"
      >
        <div className={container}>
          <ServicesSection sectionRef={servicesRef} />
        </div>
      </section>
      <section
        id="why"
        ref={whyRef}
        className="relative overflow-hidden py-64 lg:py-[24rem] bg-[#0d0d0d] flex flex-col items-center w-full"
      >
        <div className={container}>
          <WhyChooseUsSection sectionRef={whyRef} />
        </div>
      </section>
      <section
        id="cta"
        ref={ctaRef}
        className="relative overflow-hidden py-64 lg:py-[24rem] bg-[#E10600] flex flex-col items-center w-full"
      >
        <div className={`${container} text-center`}>
          <CTASection sectionRef={ctaRef} />
        </div>
      </section>
      <section
        id="contact"
        ref={contactRef}
        className="relative overflow-hidden py-64 lg:py-[24rem] bg-[#0A0A0A] flex flex-col items-center w-full"
      >
        <div className={container}>
          <ContactSection sectionRef={contactRef} />
        </div>
      </section>
    </main>
  );
}