import { useState, useEffect } from 'react';

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if window exists (for SSR safety)
        if (typeof window === 'undefined') return;

        const checkMobile = () => {
            // Check for screen width < 768px (standard tablet/mobile breakpoint)
            // OR if device supports coarse pointer (touch)
            const isMobileDevice = window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches;
            setIsMobile(isMobileDevice);
        };

        // Initial check
        checkMobile();

        // Listen for resize
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
};

export default useIsMobile;
