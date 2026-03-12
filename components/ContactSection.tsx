"use client";

import { motion, useInView } from "framer-motion";
import { MessageSquare, Instagram, Mail, MapPin, Heart } from "lucide-react";

const contacts = [
    {
        label: "WhatsApp",
        value: "+62 823-3265-3341",
        href: "https://wa.me/6282332653341",
        icon: MessageSquare,
    },
    {
        label: "Instagram",
        value: "@realitycodee",
        href: "https://instagram.com/realitycodee",
        icon: Instagram,
    },
    {
        label: "Email",
        value: "realitycodee@gmail.com",
        href: "mailto:realitycodee@gmail.com",
        icon: Mail,
    },
    {
        label: "Location",
        value: "Indonesia",
        href: "#",
        icon: MapPin,
    },
];

interface ContactSectionProps {
    sectionRef: React.RefObject<HTMLElement | null>;
}

export default function ContactSection({ sectionRef }: ContactSectionProps) {
    const inView = useInView(sectionRef, { once: true, margin: "-80px" });

    return (
        <>
            <div className="overflow-hidden border-y border-white/10 py-4 mb-20 w-full text-center">
                <div className="marquee-inner text-[10px] font-bold tracking-[0.3em] uppercase text-white/20">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <span key={i} className="mx-10 whitespace-nowrap">
                            REALITY CODE &nbsp;·&nbsp; BUILD YOUR DIGITAL REALITY &nbsp;·&nbsp; DIGITAL WITHOUT
                            LIMITS &nbsp;·&nbsp;
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex flex-col items-start text-left w-full mx-auto mb-20 lg:mb-32">
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    className="section-label mb-6 text-left"
                >
                    — 07 / Contact
                </motion.p>

                <div className="overflow-hidden mb-2">
                    <motion.h2
                        initial={{ y: "110%" }}
                        animate={inView ? { y: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        className="text-[clamp(3rem,8vw,6.5rem)] font-black uppercase leading-[0.9] tracking-tight"
                    >
                        GET IN
                    </motion.h2>
                </div>
                <div className="overflow-hidden">
                    <motion.h2
                        initial={{ y: "110%" }}
                        animate={inView ? { y: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
                        className="text-[clamp(3rem,8vw,6.5rem)] font-black uppercase leading-[0.9] tracking-tight text-[#E10600]"
                    >
                        TOUCH.
                    </motion.h2>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                    className="text-white/50 text-lg md:text-xl mt-8 leading-relaxed max-w-[55ch] prose"
                >
                    Siap membahas project-mu. Hubungi kami sekarang dan mulai diskusi gratis untuk mengubah konsep Anda menjadi kenyataan digital.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {contacts.map((c, i) => (
                    <motion.a
                        key={c.label}
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                        className="group flex flex-col items-start text-left gap-4 p-8 bg-white/5 border border-white/10 hover:border-[#E10600]/40 transition-all duration-300 relative"
                    >
                        <c.icon className="w-8 h-8 text-[#E10600] group-hover:scale-110 transition-transform duration-300" />
                        <div className="flex-1">
                            <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-2 font-mono">
                                {c.label}
                            </div>
                            <div className="text-base md:text-lg font-bold text-white group-hover:text-[#E10600] transition-colors">
                                {c.value}
                            </div>
                        </div>
                        <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                            <span className="text-[#E10600] text-xl">→</span>
                        </div>
                    </motion.a>
                ))}
            </div>

            <motion.footer
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1 }}
                className="mt-32 border-t border-white/10 pt-10"
            >
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 text-[10px] text-white/25 uppercase tracking-[0.3em]">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-[#E10600] flex items-center justify-center font-black text-black text-[10px]">
                            RC
                        </div>
                        <span className="font-bold text-white/40">Reality Code</span>
                    </div>
                    <span className="text-center">© 2026 Reality Code – Digital Without Limits.</span>

                </div>
            </motion.footer>
        </>
    );
}
