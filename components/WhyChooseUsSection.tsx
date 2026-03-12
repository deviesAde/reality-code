"use client";

import { motion, useInView } from "framer-motion";

const reasons = [
    { num: "01", title: "Deadline Aman", desc: "Estimasi waktu yang jelas sebelum pengerjaan." },
    { num: "02", title: "Solusi Cepat", desc: "Pengerjaan efisien tanpa membuang waktumu." },
    { num: "03", title: "Komunikatif", desc: "Update progres aktif setiap saat kamu butuh." },
    { num: "04", title: "Harga Terjangkau", desc: "Harga bersahabat, kualitas profesional." },
    { num: "05", title: "Revisi Sampai Fix", desc: "Tidak berhenti sampai kamu puas." },
    { num: "06", title: "Garansi Kepuasan", desc: "Jaminan kualitas dan hasil sesuai keinginan." },
];

interface WhyChooseUsSectionProps {
    sectionRef: React.RefObject<HTMLElement | null>;
}

export default function WhyChooseUsSection({ sectionRef }: WhyChooseUsSectionProps) {
    const inView = useInView(sectionRef, { once: true, margin: "-80px" });

    return (
        <>
            <div
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 text-[clamp(15rem,40vw,40rem)] font-black text-white/[0.012] leading-none pointer-events-none select-none"
                aria-hidden
            >
                05
            </div>

            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle at 50% 50%, rgba(225,6,0,0.04) 0%, transparent 70%)",
                }}
            />

            <div className="relative z-10 w-full">
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-sm font-bold uppercase tracking-[0.3em] text-[#E10600] mb-6 font-mono"
                    >
                        — 05 / Why Us
                    </motion.p>

                    <div className="space-y-1">
                        {["WHY", "CHOOSE", "US?"].map((word, i) => (
                            <div key={word} className="overflow-hidden">
                                <motion.h2
                                    initial={{ y: "110%" }}
                                    animate={inView ? { y: 0 } : {}}
                                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.1 }}
                                    className={`text-[clamp(2.5rem,7vw,5.5rem)] font-black uppercase leading-[0.85] tracking-[-0.02em] ${i === 1 ? "text-[#E10600]" : ""}`}
                                >
                                    {word}
                                </motion.h2>
                            </div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: 80 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="h-1 bg-[#E10600] mt-8"
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="text-white/50 text-base max-w-lg mt-6 leading-relaxed prose"
                    >
                        Kenapa harus pilih kami? Karena kami fokus pada kepuasan dan hasil terbaik untuk setiap project.
                    </motion.p>
                </div>

                <div className="flex flex-col gap-4 max-w-3xl mx-auto">
                    {reasons.map((r, i) => (
                        <motion.div
                            key={r.num}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                            className="why-item group p-6 bg-white/5 hover:bg-white/10 transition-all duration-300 border-b border-transparent hover:border-[#E10600]"
                        >
                            <div className="flex flex-col items-center text-center gap-4">
                                <span className="text-4xl md:text-5xl font-black text-[#E10600]/20 group-hover:text-[#E10600]/40 transition-colors font-mono">
                                    {r.num}
                                </span>
                                <div className="flex-1">
                                    <div className="flex items-center justify-center gap-3 mb-2">
                                        <span className="text-lg md:text-xl font-bold uppercase tracking-wide group-hover:text-[#E10600] transition-colors">
                                            {r.title}
                                        </span>
                                    </div>
                                    <p className="text-white/40 group-hover:text-white/60 text-sm md:text-base leading-relaxed transition-colors max-w-lg">
                                        {r.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── Stats row — centered ── */}


            </div>

            <div className="absolute top-20 left-10 w-px h-32 bg-gradient-to-b from-transparent via-[#E10600]/20 to-transparent" />
            <div className="absolute bottom-20 right-10 w-px h-32 bg-gradient-to-t from-transparent via-[#E10600]/20 to-transparent" />
        </>
    );
}