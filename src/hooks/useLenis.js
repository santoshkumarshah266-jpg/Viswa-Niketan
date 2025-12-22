import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

/**
 * Custom hook to initialize and manage Lenis smooth scrolling
 * Works on both desktop and mobile devices
 */
export default function useLenis(options = {}) {
    const lenisRef = useRef(null);

    useEffect(() => {
        // Initialize Lenis with custom options
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            smoothTouch: true, // Enable smooth scrolling on touch devices (mobile)
            touchMultiplier: 2, // Adjust touch scroll sensitivity
            wheelMultiplier: 1, // Adjust mouse wheel scroll sensitivity
            touchInertiaMultiplier: 35, // Touch inertia for mobile
            infinite: false,
            ...options, // Allow custom options to override defaults
        });

        lenisRef.current = lenis;

        // RequestAnimationFrame loop for smooth scrolling
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        const rafId = requestAnimationFrame(raf);

        // Cleanup on unmount
        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    return lenisRef;
}
