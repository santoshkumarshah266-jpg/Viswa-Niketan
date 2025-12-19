"use client";

import React from "react";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";

export const BorderBeam = ({
    className,
    size = 50,
    delay = 0,
    duration = 6,
    colorFrom = "#F7931E", // Brand Orange
    colorTo = "#3498db",   // Brand Blue (Complementary)
    transition,
    style,
    reverse = false,
    initialOffset = 0,
    borderThickness = 2,
    opacity = 1,
    glowIntensity = 0.5,
    beamBorderRadius,
    pauseOnHover = false,
    speedMultiplier = 1,
}) => {
    // Calculate actual duration based on speed multiplier
    const actualDuration = speedMultiplier ? duration / speedMultiplier : duration;

    // Generate box shadow for glow effect
    const glowEffect = glowIntensity > 0
        ? `0 0 ${glowIntensity * 5}px ${glowIntensity * 2}px var(--color-from)`
        : undefined;

    return (
        <div
            className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent"
            style={{
                // Masking logic handled manually via styles since we might not have full Tailwind config
                maskClip: 'padding-box, border-box',
                maskComposite: 'intersect',
                WebkitMaskComposite: 'source-in', // Adjust for browser compatibility if needed
                maskImage: 'linear-gradient(transparent, transparent), linear-gradient(#000, #000)',
                WebkitMaskImage: 'linear-gradient(transparent, transparent), linear-gradient(#000, #000)',
                width: '100%',
                height: '100%',
            }}
        >
            <motion.div
                className={cn(
                    "absolute aspect-square",
                    // Tailwind gradient classes might not work if not configured, using inline style for gradient
                    pauseOnHover && "group-hover:animation-play-state-paused",
                    className,
                )}
                style={{
                    width: size,
                    height: size,
                    background: `linear-gradient(to left, var(--color-from), var(--color-to), transparent)`,
                    offsetPath: `rect(0 auto auto 0 round ${beamBorderRadius ?? size}px)`,
                    "--color-from": colorFrom,
                    "--color-to": colorTo,
                    opacity: opacity,
                    boxShadow: glowEffect,
                    borderRadius: beamBorderRadius ? `${beamBorderRadius}px` : undefined,
                    ...style,
                }}
                initial={{ offsetDistance: `${initialOffset}%` }}
                animate={{
                    offsetDistance: reverse
                        ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
                        : [`${initialOffset}%`, `${100 + initialOffset}%`],
                }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: actualDuration,
                    delay: -delay,
                    ...transition,
                }}
            />
        </div>
    );
};
