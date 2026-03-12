"use client";

import { motion, useScroll, useTransform } from "framer-motion";

interface HeroSectionProps {
    sectionRef: React.RefObject<HTMLElement | null>;
}

export default function HeroSection({ sectionRef }: HeroSectionProps) {
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <div className="relative w-full">
            <div className="absolute inset-0 grid-bg opacity-30 z-0" />

            <div className="absolute -top-10 -right-5 lg:-right-10 w-px h-32 bg-gradient-to-b from-[#E10600] to-transparent z-10" />
            <div className="absolute -bottom-10 -left-5 lg:-left-10 w-px h-32 bg-gradient-to-t from-[#E10600] to-transparent z-10" />

            <motion.div
                style={{ y, opacity }}
                className="relative z-10 w-full flex flex-col items-center justify-center text-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
                >
                    <div className="w-8 sm:w-12 h-[2px] bg-[#E10600]/70" />
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white/50 font-mono">
                        Est. 2025 — Digital Services
                    </span>
                    <div className="w-8 sm:w-12 h-[2px] bg-[#E10600]/70" />
                </motion.div>

                <div className="overflow-hidden mb-6 sm:mb-8">
                    <motion.h1
                        initial={{ y: "110%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                        className="text-[clamp(2rem,7.5vw,7.5rem)] font-black uppercase leading-[1.1] tracking-[-0.04em] text-balance"
                    >
                        <span className="glitch text-white" >
                            BUILD YOUR
                        </span>{" "}
                        <span className="text-[#E10600]">DIGITAL REALITY.</span>
                    </motion.h1>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    className="text-white/60 text-base sm:text-lg md:text-xl max-w-[60ch] mx-auto leading-relaxed mb-8 sm:mb-10"
                >
                    Jasa pembuatan website & solusi coding cepat, tepat, tanpa ribet.
                    Dari konsep hingga realitas digital dalam satu kesatuan.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.85 }}
                    className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-12 sm:mb-16"
                >
                    <a
                        href="#contact"
                        className="btn-brutal btn-brutal-filled text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 z-10 min-w-[160px] sm:min-w-[180px]"
                    >
                        Start Project
                    </a>
                    <a
                        href="#contact"
                        className="btn-brutal btn-brutal-outline text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 z-10 min-w-[160px] sm:min-w-[180px]"
                    >
                        Konsultasi
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                    className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 pt-6 sm:pt-8 border-t border-white/10 w-full max-w-2xl mx-auto"
                >
                    {[
                        { num: "20+", label: "Klien Puas" },
                        { num: "2025", label: "Est. Year" },

                    ].map((s, index) => (
                        <motion.div
                            key={s.label}
                            className="flex flex-col items-center gap-1 relative"
                            whileHover={{ y: -2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <span className="text-xl sm:text-2xl md:text-3xl font-black text-[#E10600]">{s.num}</span>
                            <span className="text-[8px] sm:text-[10px] text-white/40 uppercase tracking-[0.2em] font-mono">{s.label}</span>
                            {index < 2 && (
                                <div className="hidden sm:block absolute -right-6 md:-right-8 w-px h-8 bg-white/10" />
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
            >
                <span className="text-[8px] sm:text-[10px] tracking-[0.3em] uppercase text-white/30 font-mono">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-px h-6 sm:h-8 bg-gradient-to-b from-[#E10600] to-transparent"
                />
            </motion.div>

            <div className="absolute left-5 sm:left-10 top-1/3 w-px h-16 sm:h-20 bg-gradient-to-b from-transparent via-[#E10600]/20 to-transparent" />
            <div className="absolute right-5 sm:right-10 bottom-1/3 w-px h-16 sm:h-20 bg-gradient-to-t from-transparent via-[#E10600]/20 to-transparent" />

            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#E10600]/30 rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-[#E10600]/30 rounded-full" />
        </div >
    );
}