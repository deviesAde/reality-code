"use client";

import { motion, useInView } from "framer-motion";

interface CTASectionProps {
    sectionRef: React.RefObject<HTMLElement | null>;
}

export default function CTASection({ sectionRef }: CTASectionProps) {
    const inView = useInView(sectionRef, { once: true, margin: "-80px" });

    return (
        <>
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.07]"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    backgroundSize: "200px",
                }}
            />

            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />

            <div
                className="absolute -right-10 top-1/2 -translate-y-1/2 text-[22vw] font-black uppercase text-black/10 leading-none pointer-events-none select-none whitespace-nowrap"
                aria-hidden
            >
                REAL.
            </div>

            <div className="relative z-10 w-full flex flex-col items-center text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-8 font-mono"
                >
                    — 06 / Let&apos;s Work
                </motion.p>

                <div className="overflow-hidden mb-2">
                    <motion.h2
                        initial={{ y: "110%" }}
                        animate={inView ? { y: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        className="text-[clamp(2.5rem,8vw,6.5rem)] font-black uppercase leading-[1.1] tracking-tight text-[#0A0A0A]"
                    >
                        LET&apos;S BUILD
                    </motion.h2>
                </div>
                <div className="overflow-hidden mb-2">
                    <motion.h2
                        initial={{ y: "110%" }}
                        animate={inView ? { y: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
                        className="text-[clamp(2.5rem,8vw,6.5rem)] font-black uppercase leading-[1.1] tracking-tight text-[#0A0A0A]"
                    >
                        SOMETHING
                    </motion.h2>
                </div>
                <div className="overflow-hidden mb-16">
                    <motion.h2
                        initial={{ y: "110%" }}
                        animate={inView ? { y: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.34 }}
                        className="text-[clamp(2.5rem,8vw,6.5rem)] font-black uppercase leading-[1.1] tracking-tight text-white drop-shadow-[0_2px_30px_rgba(0,0,0,0.3)]"
                    >
                        REAL.
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.65, duration: 0.6 }}
                    className="flex flex-col items-center gap-6"
                >
                    <a
                        href="https://wa.me/6282332653341"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 bg-[#0A0A0A] text-white font-bold uppercase tracking-widest text-sm px-10 py-5 border-2 border-[#0A0A0A] hover:bg-transparent hover:text-[#0A0A0A] transition-all duration-150"
                    >
                        Hubungi Sekarang
                        <span className="group-hover:translate-x-2 transition-transform duration-150">→</span>
                    </a>
                    <p className="text-black/50 text-sm">Digitalisasikan Bisnis Anda Sekarang</p>
                </motion.div>
            </div>
        </>
    );
}
