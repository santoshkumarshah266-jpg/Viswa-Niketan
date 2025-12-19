"use client";

import React, { useState, useEffect, useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";
import { cn } from "../lib/utils";
import { Card, CardContent } from "./card";
import { Calendar } from "lucide-react";

// Default colors adjusted for brand (Orange/Blue)
const DEFAULT_EVENTS = [
    {
        year: "2023",
        title: "Major Achievement",
        subtitle: "Organization Name",
        description:
            "Description of the achievement or milestone reached during this time period.",
    },
];

export const ScrollTimeline = ({
    events = DEFAULT_EVENTS,
    title = "Timeline",
    subtitle = "Scroll to explore the journey",
    animationOrder = "sequential",
    cardAlignment = "alternating",
    lineColor = "bg-primary/30",
    activeColor = "bg-primary",
    progressIndicator = true,
    cardVariant = "default",
    cardEffect = "none",
    parallaxIntensity = 0.2,
    progressLineWidth = 4, // Thicker beam
    progressLineCap = "round",
    dateFormat = "badge",
    revealAnimation = "fade",
    className = "",
    connectorStyle = "line",
    perspective = false,
    darkMode = false,
    smoothScroll = true,
}) => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(-1);
    const timelineRefs = useRef([]);

    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start center", "end center"], // Adjusted offset for better trigger
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((v) => {
            const newIndex = Math.floor(v * events.length);
            if (
                newIndex !== activeIndex &&
                newIndex >= 0 &&
                newIndex < events.length
            ) {
                setActiveIndex(newIndex);
            }
        });
        return () => unsubscribe();
    }, [scrollYProgress, events.length, activeIndex]);

    const getCardVariants = (index) => {
        const baseDelay =
            animationOrder === "simultaneous"
                ? 0
                : animationOrder === "staggered"
                    ? index * 0.2
                    : index * 0.3;

        const initialStates = {
            fade: { opacity: 0, y: 20 },
            slide: {
                x:
                    cardAlignment === "left"
                        ? -100
                        : cardAlignment === "right"
                            ? 100
                            : index % 2 === 0
                                ? -100
                                : 100,
                opacity: 0,
            },
            scale: { scale: 0.8, opacity: 0 },
            flip: { rotateY: 90, opacity: 0 },
            none: { opacity: 1 },
        };

        return {
            initial: initialStates[revealAnimation],
            whileInView: {
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
                rotateY: 0,
                transition: {
                    duration: 0.7,
                    delay: baseDelay,
                    ease: [0.25, 0.1, 0.25, 1.0],
                },
            },
            viewport: { once: false, margin: "-100px" },
        };
    };

    const getConnectorClasses = () => {
        const baseClasses = cn(
            "absolute left-1/2 transform -translate-x-1/2",
            lineColor
        );
        // Explicit pixel width from prop
        const widthStyle = `w-[${progressLineWidth}px]`;
        // Fallback if dynamic class fails in strict tailwind
        const styleObj = { width: progressLineWidth };

        switch (connectorStyle) {
            case "dots":
                return cn(baseClasses, "w-1 rounded-full");
            case "dashed":
                return cn(
                    baseClasses,
                    "border-l-2 border-dashed border-gray-300"
                );
            case "line":
            default:
                return cn("absolute left-1/2 transform -translate-x-1/2 bg-gray-200");
        }
    };

    const getCardClasses = (index) => {
        const baseClasses = "relative z-30 rounded-lg transition-all duration-300";
        const variantClasses = {
            default: "bg-white border shadow-sm",
            elevated: "bg-white border border-gray-100 shadow-md",
            outlined: "bg-white/90 backdrop-blur border-2 border-blue-100",
            filled: "bg-blue-50/50 border border-blue-100",
        };
        const effectClasses = {
            none: "",
            glow: "hover:shadow-[0_0_15px_rgba(52,152,219,0.3)]",
            shadow: "hover:shadow-lg hover:-translate-y-1",
            bounce: "hover:scale-[1.03] hover:shadow-md active:scale-[0.97]",
        };
        const alignmentClassesDesktop =
            cardAlignment === "alternating"
                ? index % 2 === 0
                    ? "lg:mr-[calc(50%+40px)]"
                    : "lg:ml-[calc(50%+40px)]"
                : cardAlignment === "left"
                    ? "lg:mr-auto lg:ml-0"
                    : "lg:ml-auto lg:mr-0";
        const perspectiveClass = perspective
            ? "transform transition-transform hover:rotate-y-1 hover:rotate-x-1"
            : "";

        return cn(
            baseClasses,
            variantClasses[cardVariant],
            effectClasses[cardEffect],
            alignmentClassesDesktop,
            "w-full lg:w-[calc(50%-40px)]"
        );
    };

    return (
        <div
            ref={scrollRef}
            className={cn(
                "relative w-full overflow-hidden",
                darkMode ? "bg-slate-900 text-white" : "",
                className
            )}
        >
            <div className="text-center py-16 px-4">
                {title && <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">{title}</h2>}
                {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {subtitle}
                </p>}
            </div>

            <div className="relative max-w-6xl mx-auto px-4 pb-24">
                <div className="relative mx-auto">
                    {/* Background static line */}
                    <div
                        className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full bg-gray-200 z-10"
                        style={{ width: progressLineWidth }}
                    ></div>

                    {/* Enhanced Progress Indicator with Traveling Glow */}
                    {progressIndicator && (
                        <>
                            {/* The main filled progress line */}
                            <motion.div
                                className="absolute top-0 z-10"
                                style={{
                                    height: progressHeight,
                                    width: progressLineWidth,
                                    left: "50%",
                                    translateX: "-50%", // Correct centering
                                    borderRadius:
                                        progressLineCap === "round" ? "9999px" : "0px",
                                    background: `linear-gradient(to bottom, #F7931E, #3498db, #9b59b6)`, // Brand colors
                                    // Enhanced shadow for a constant glow effect along the path
                                    boxShadow: `
                    0 0 15px rgba(247, 147, 30, 0.5),
                    0 0 25px rgba(52, 152, 219, 0.3)
                  `,
                                }}
                            />
                            {/* The traveling glow "comet" at the head of the line */}
                            <motion.div
                                className="absolute z-20"
                                style={{
                                    top: progressHeight,
                                    left: "50%",
                                    translateX: "-50%",
                                    translateY: "-50%", // Center the comet on the line's end point
                                }}
                            >
                                <motion.div
                                    className="w-5 h-5 rounded-full" // Size of the comet core
                                    style={{
                                        background:
                                            "radial-gradient(circle, rgba(247, 147, 30, 0.9) 0%, rgba(52, 152, 219, 0.6) 50%, rgba(255,255,255,0) 80%)",
                                        // Intense, layered glow effect for the comet
                                        boxShadow: `
                      0 0 15px 4px rgba(247, 147, 30, 0.6),
                      0 0 25px 8px rgba(52, 152, 219, 0.4),
                      0 0 40px 15px rgba(155, 89, 182, 0.2)
                    `,
                                    }}
                                    animate={{
                                        scale: [1, 1.3, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                            </motion.div>
                        </>
                    )}

                    <div className="relative z-20">
                        {events.map((event, index) => {
                            const yOffset = useTransform(
                                smoothProgress,
                                [0, 1],
                                [parallaxIntensity * 50, -parallaxIntensity * 50] // Adjusted parallax intensity
                            );
                            return (
                                <div
                                    key={event.id || index}
                                    ref={(el) => {
                                        timelineRefs.current[index] = el;
                                    }}
                                    className={cn(
                                        "relative flex items-center mb-20 py-4",
                                        "flex-col lg:flex-row",
                                        cardAlignment === "alternating"
                                            ? index % 2 === 0
                                                ? "lg:justify-start"
                                                : "lg:flex-row-reverse lg:justify-start"
                                            : cardAlignment === "left"
                                                ? "lg:justify-start"
                                                : "lg:flex-row-reverse lg:justify-start"
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "absolute top-1/2 transform -translate-y-1/2 z-30",
                                            "left-1/2 -translate-x-1/2"
                                        )}
                                    >
                                        <motion.div
                                            className={cn(
                                                "w-8 h-8 rounded-full border-4 flex items-center justify-center", // Slightly larger connection point
                                                index <= activeIndex
                                                    ? "border-[#F7931E] bg-white"
                                                    : "border-gray-300 bg-gray-100"
                                            )}
                                            animate={
                                                index <= activeIndex
                                                    ? {
                                                        scale: [1, 1.2, 1],
                                                        boxShadow: [
                                                            "0 0 0px rgba(247, 147, 30, 0)",
                                                            "0 0 15px rgba(247, 147, 30, 0.6)",
                                                            "0 0 0px rgba(247, 147, 30, 0)",
                                                        ],
                                                    }
                                                    : {}
                                            }
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                repeatDelay: 2,
                                                ease: "easeInOut",
                                            }}
                                        />
                                    </div>
                                    <motion.div
                                        className={cn(
                                            getCardClasses(index),
                                            "mt-12 lg:mt-0"
                                        )}
                                        variants={getCardVariants(index)}
                                        initial="initial"
                                        whileInView="whileInView"
                                        viewport={{ once: false, margin: "-100px" }}
                                        style={parallaxIntensity > 0 ? { y: yOffset } : undefined}
                                    >
                                        <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#F7931E] to-[#3498db]"></div>
                                            <CardContent className="p-6">
                                                {dateFormat === "badge" ? (
                                                    <div className="flex items-center mb-3">
                                                        {event.icon || (
                                                            <Calendar className="h-5 w-5 mr-2 text-[#3498db]" />
                                                        )}
                                                        <span
                                                            className={cn(
                                                                "text-sm font-bold px-3 py-1 rounded-full bg-blue-50 text-[#3498db]",
                                                            )}
                                                        >
                                                            {event.year}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <p className="text-xl font-bold text-[#F7931E] mb-2">
                                                        {event.year}
                                                    </p>
                                                )}
                                                <h3 className="text-xl font-bold mb-2 text-gray-800">
                                                    {event.title}
                                                </h3>
                                                {event.subtitle && (
                                                    <p className="text-sm font-medium text-[#F7931E] mb-3 uppercase tracking-wider">
                                                        {event.subtitle}
                                                    </p>
                                                )}
                                                <p className="text-gray-600 leading-relaxed">
                                                    {event.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
