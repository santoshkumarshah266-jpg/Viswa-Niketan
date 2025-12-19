import React, { useEffect, useRef } from 'react';
import './GhostCursor.css';

const GhostCursor = ({ color = "#F7931E", bloomStrength = 1.2, bloomRadius = 0.8, zIndex = 0 }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', resize);
        resize();

        // Cursor Physics
        const cursor = { x: width / 2, y: height / 2 };
        const trail = [];
        const MAX_POINTS = 50;

        const onMouseMove = (e) => {
            cursor.x = e.clientX;
            cursor.y = e.clientY;
        };

        window.addEventListener('mousemove', onMouseMove);

        // Parse hex color to RGB for rgba usage
        const hexToRgb = (hex) => {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : { r: 247, g: 147, b: 30 }; // Default orange
        };

        const rgb = hexToRgb(color);

        // Animation Loop
        let animationFrame;
        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Add new point
            trail.push({ x: cursor.x, y: cursor.y, age: 0 });

            // Remove old points
            if (trail.length > MAX_POINTS) {
                trail.shift();
            }

            // Draw Trail
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            // Draw glowing effect (multiple passes for bloom feel)
            for (let i = 0; i < trail.length - 1; i++) {
                const p1 = trail[i];
                const p2 = trail[i + 1];

                // Age points
                p1.age++;

                // Calculate properties based on age/index
                const ratio = i / trail.length;
                const alpha = (1 - ratio) * 0.5;
                const size = ratio * 15; // Tapering

                // Draw bloom layer
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);

                ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${ratio})`;
                ctx.lineWidth = size;
                ctx.shadowBlur = bloomStrength * 10;
                ctx.shadowColor = color;
                ctx.stroke();
            }

            animationFrame = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animationFrame);
        };
    }, [color, bloomStrength]);

    return (
        <canvas
            ref={canvasRef}
            className="ghost-cursor"
            aria-hidden="true"
            style={{ zIndex }}
        />
    );
};

export default GhostCursor;
