"use client";

import { motion, useInView } from "framer-motion";

const problems = [
    { text: "BISNIS ANDA BELUM DIKENAL?", delay: 0 },
    { text: "DEADLINE TUGAS MEPET?", delay: 0.12 },
    { text: "MEMPERMUDAH PEKERJAAN BISNIS?", delay: 0.24 },
];

const services = [
    { title: "Pembuatan Website Usaha", icon: "01" },
    { title: "Website Katalog Produk", icon: "02" },
    { title: "Website Profile Bisnis", icon: "03" },
    { title: "Website Sistem Pencatatan", icon: "04" },
    { title: "Pembuatan Tugas IT / Coding", icon: "05" },
    { title: "Digital Solution & Konsultasi", icon: "06" },
    { title: "Revisi Sampai Selesai", icon: "07" },
    { title: "Pendampingan Sampai Paham", icon: "08" },
];

interface ServicesSectionProps {
    sectionRef: React.RefObject<HTMLElement | null>;
}

export default function ServicesSection({ sectionRef }: ServicesSectionProps) {
    const inView = useInView(sectionRef, { once: true, margin: "-80px" });

    return (
        <>
            <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02]"
                aria-hidden
            >
                <span className="text-[20vw] font-black uppercase leading-none whitespace-nowrap">
                    SOLUTIONS
                </span>
            </div>

            <div className="relative z-10 w-full">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-48 gap-12">
                    <div className="max-w-2xl">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5 }}
                            className="text-sm font-bold uppercase tracking-[0.4em] text-[#E10600] mb-8 font-mono"
                        >
                            — 03 / Problems & Services
                        </motion.p>

                        <div className="overflow-hidden">
                            <motion.h2
                                initial={{ y: "110%" }}
                                animate={inView ? { y: 0 } : {}}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                                className="text-[clamp(2.5rem,7vw,5.5rem)] font-black uppercase leading-[1.1] tracking-[-0.03em] text-balance"
                            >
                                THE <span className="text-[#E10600]">SOLUTIONS</span> <br />
                                YOU NEED.
                            </motion.h2>
                        </div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="text-white/50 text-base md:text-xl max-w-[45ch] leading-relaxed md:text-right prose"
                    >
                        Apapun masalah digital Anda, Reality Code hadir dengan layanan profesional
                        yang menjamin hasil maksimal dan pengerjaan tepat waktu.
                    </motion.p>
                </div>

                <div className="flex flex-col space-y-8 mb-32">
                    {problems.map((p, i) => (
                        <div key={i} className="group overflow-hidden">
                            <motion.div
                                initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
                                animate={inView ? { x: 0, opacity: 1 } : {}}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.2 + p.delay,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className={`flex items-baseline gap-6 ${i % 2 === 1 ? "md:justify-end" : ""}`}
                            >
                                <span className={`text-[#E10600] text-3xl md:text-5xl font-black opacity-20 group-hover:opacity-100 transition-opacity duration-500 font-mono ${i % 2 === 1 ? "order-2" : ""}`}>
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="font-black uppercase text-[clamp(1.25rem,4vw,3.5rem)] leading-none tracking-tighter text-white/90 group-hover:text-white transition-colors">
                                    {p.text}
                                </span>
                                <div className={`hidden lg:block h-px bg-white/10 flex-1 mt-6 group-hover:bg-[#E10600]/30 transition-colors ${i % 2 === 1 ? "order-1" : ""}`} />
                            </motion.div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.5,
                                delay: 0.2 + i * 0.06,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <div className="service-card group h-full flex flex-col items-center text-center justify-between min-h-[220px] bg-[#0A0A0A] hover:bg-[#E10600] transition-all duration-300 p-8">
                                <span className="text-xs font-mono text-[#E10600]/60 group-hover:text-white/60 transition-colors">
                                    {service.icon}
                                </span>

                                <p className="text-sm md:text-base font-bold uppercase leading-tight tracking-wide text-white group-hover:text-white transition-colors mt-4">
                                    {service.title}
                                </p>

                                <div className="mt-4 flex items-center justify-center gap-2">
                                    <div className="w-6 h-px bg-[#E10600] group-hover:bg-white group-hover:w-8 transition-all" />
                                    <span className="text-xs text-[#E10600]/60 group-hover:text-white/60 transition-colors font-mono">
                                        →
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="mt-16 flex justify-center"
                >

                </motion.div>
            </div >
        </>
    );
}