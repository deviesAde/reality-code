"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 flex justify-center ${scrolled ? "bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-white/5" : "bg-transparent"
                    }`}
            >
                <div className="w-full max-w-6xl px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-8 h-8 bg-[#E10600] flex items-center justify-center font-black text-black text-sm">
                            RC
                        </div>
                        <span className="font-bold text-sm tracking-[0.2em] uppercase text-white group-hover:text-[#E10600] transition-colors">
                            Reality Code
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {links.map((l) => (
                            <a
                                key={l.label}
                                href={l.href}
                                className="text-sm font-medium tracking-widest uppercase text-white/60 hover:text-white transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#E10600] after:transition-all hover:after:w-full"
                            >
                                {l.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="btn-brutal btn-brutal-filled text-xs px-6 py-2.5"
                        >
                            Hubungi
                        </a>
                    </nav>

                    <button
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                        />
                        <span
                            className={`block w-4 h-0.5 bg-[#E10600] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                        />
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[999] bg-[#0A0A0A] flex flex-col justify-center items-start px-10"
                    >
                        <div className="absolute top-16 right-6">
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="text-white/40 hover:text-white text-2xl"
                            >
                                ✕
                            </button>
                        </div>
                        <nav className="flex flex-col gap-8 w-full">
                            {links.map((l, i) => (
                                <motion.a
                                    key={l.label}
                                    href={l.href}
                                    onClick={() => setMenuOpen(false)}
                                    initial={{ opacity: 0, x: 40 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.08 }}
                                    className="text-4xl font-bold uppercase tracking-tight hover:text-[#E10600] transition-colors"
                                >
                                    {l.label}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#contact"
                                onClick={() => setMenuOpen(false)}
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="btn-brutal btn-brutal-filled self-start mt-4"
                            >
                                Hubungi Sekarang
                            </motion.a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
