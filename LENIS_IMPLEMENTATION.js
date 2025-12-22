/**
 * Lenis Smooth Scrolling Integration Guide
 * =========================================
 * 
 * Implementation Details:
 * ----------------------
 * 
 * 1. **Hook Location**: src/hooks/useLenis.js
 *    - Custom React hook that initializes Lenis
 *    - Handles cleanup on unmount
 *    - Works with both desktop and mobile
 * 
 * 2. **Integration**: src/App.jsx
 *    - useLenis() hook called at the app root level
 *    - Enables smooth scrolling for the entire application
 * 
 * 3. **CSS Optimizations**: src/index.css
 *    - Added .lenis class styles for optimal performance
 *    - Ensures smooth scrolling behavior overrides native browser scrolling
 * 
 * Configuration Used:
 * ------------------
 * - duration: 1.2s (smooth animation duration)
 * - easing: easeOutExpo (natural deceleration curve)
 * - smooth: true (enables smooth scrolling)
 * - smoothTouch: true (ENABLED for mobile devices)
 * - touchMultiplier: 2 (touch scroll sensitivity)
 * - wheelMultiplier: 1 (mouse wheel scroll sensitivity)
 * - touchInertiaMultiplier: 35 (momentum on mobile)
 * 
 * Testing:
 * --------
 * 1. Desktop: Scroll with mouse wheel - should feel smooth and natural
 * 2. Mobile: Swipe to scroll - should have momentum and smooth deceleration
 * 3. Navigation Links: Click anchor links - should animate smoothly
 * 
 * Advanced Usage:
 * --------------
 * If you want to disable smooth scrolling on specific elements, add:
 * data-lenis-prevent attribute to that element.
 * 
 * Example:
 * <div data-lenis-prevent>
 *   This div will use native scrolling
 * </div>
 * 
 * To programmatically control Lenis:
 * 
 * import useLenis from './hooks/useLenis';
 * 
 * function MyComponent() {
 *   const lenisRef = useLenis();
 *   
 *   const scrollToTop = () => {
 *     lenisRef.current?.scrollTo(0, { duration: 2 });
 *   };
 *   
 *   const scrollToElement = () => {
 *     lenisRef.current?.scrollTo('#section-id', { offset: -100 });
 *   };
 * }
 */

export { }; // Make this a module
