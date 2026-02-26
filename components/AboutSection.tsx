"use client";

import { motion, useInView } from "framer-motion";

interface AboutSectionProps {
    sectionRef: React.RefObject<HTMLElement | null>;
}

export default function AboutSection({ sectionRef }: AboutSectionProps) {
    const inView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <div className="relative w-full">
            <div
                className="absolute -right-10 top-0 text-[clamp(15rem,35vw,30rem)] font-black text-white/[0.015] leading-none pointer-events-none select-none"
                aria-hidden
            >
                02
            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12 md:gap-24 items-start">
                <div className="md:sticky md:top-40">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-sm font-bold uppercase tracking-[0.4em] text-[#E10600] mb-8"
                    >
                        — 02 / About Us
                    </motion.p>

                    <div className="overflow-hidden">
                        <motion.h2
                            initial={{ y: "110%" }}
                            animate={inView ? { y: 0 } : {}}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                            className="text-[clamp(2.5rem,7vw,6rem)] font-black uppercase leading-[1.1] tracking-[-0.03em] text-balance"
                        >
                            THE FOCUS OF <br />
                            <span className="text-[#E10600]">REALITY CODE.</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: 120 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="h-1.5 bg-[#E10600] mt-10"
                    />
                </div>

                <div className="flex flex-col space-y-16 pt-0 md:pt-32">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-10"
                    >
                        <p className="text-white/80 text-lg md:text-2xl leading-snug font-medium max-w-[65ch]">
                            Reality Code adalah layanan pembuatan website dan solusi IT untuk{" "}
                            <span className="text-white font-bold border-b-2 border-[#E10600]/50">bisnis, UMKM, mahasiswa,</span> dan{" "}
                            <span className="text-white font-bold border-b-2 border-[#E10600]/50">personal brand.</span>
                        </p>
                        <p className="text-white/60 text-base md:text-lg leading-[1.6] max-w-[65ch]">
                            Kami percaya bahwa setiap konsep digital berhak mendapatkan eksekusi terbaik.
                            Fokus kami adalah hasil cepat, revisi tanpa batas sampai selesai, dan pendampingan personal hingga Anda benar-benar paham.
                        </p>

                        <div className="p-8 sm:p-10 bg-white/[0.03] border-l-4 border-[#E10600] backdrop-blur-sm">
                            <p className="text-xs font-bold uppercase tracking-[0.5em] text-[#E10600] mb-5">Professionalism</p>
                            <p className="text-white font-black text-xl sm:text-2xl md:text-4xl uppercase tracking-tighter italic leading-none">
                                Sejak 2025, <br />
                                <span className="text-[#E10600] text-4xl sm:text-5xl md:text-7xl">20+ KLIEN</span> <br />
                                TELAH MEMPERCAYAI KAMI.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mt-32 md:mt-48 w-full"
            >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
                    {[
                        { val: "20+", desc: "Klien Puas" },
                        { val: "2025", desc: "Beroperasi Sejak" },
                        { val: "Fix", desc: "Revisi Selesai" },
                        { val: "Fast", desc: "Pengerjaan Cepat" },
                    ].map((item) => (
                        <div key={item.val} className="bg-[#0A0A0A] p-6 sm:p-10 flex flex-col items-center text-center group hover:bg-[#E10600] transition-colors duration-500">
                            <div className="text-3xl sm:text-4xl font-black text-[#E10600] mb-3 group-hover:text-white transition-colors">{item.val}</div>
                            <div className="text-[11px] text-white/40 uppercase tracking-[0.2em] font-bold group-hover:text-white/70 transition-colors">{item.desc}</div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}