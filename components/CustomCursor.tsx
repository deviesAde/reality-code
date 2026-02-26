"use client";

import { useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const trailX = useMotionValue(-100);
    const trailY = useMotionValue(-100);

    const springConfig = { damping: 28, stiffness: 300 };
    const trailConfig = { damping: 40, stiffness: 150 };

    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);
    const trailSpringX = useSpring(trailX, trailConfig);
    const trailSpringY = useSpring(trailY, trailConfig);

    const isHovering = useRef(false);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            trailX.set(e.clientX);
            trailY.set(e.clientY);
        };

        const handleEnter = () => { isHovering.current = true; };
        const handleLeave = () => { isHovering.current = false; };

        document.addEventListener("mousemove", move);
        document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
            el.addEventListener("mouseenter", handleEnter);
            el.addEventListener("mouseleave", handleLeave);
        });

        return () => {
            document.removeEventListener("mousemove", move);
        };
    }, [cursorX, cursorY, trailX, trailY]);

    return (
        <>
            {/* Glow trail */}
            <motion.div
                className="fixed pointer-events-none z-[99998]"
                style={{
                    x: trailSpringX,
                    y: trailSpringY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(225,6,0,0.35) 0%, transparent 70%)",
                        filter: "blur(8px)",
                    }}
                />
            </motion.div>

            {/* Main cursor dot */}
            <motion.div
                className="fixed pointer-events-none z-[99999]"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                <div
                    style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "#E10600",
                        boxShadow: "0 0 12px rgba(225,6,0,0.8), 0 0 4px rgba(225,6,0,1)",
                    }}
                />
            </motion.div>
        </>
    );
}
