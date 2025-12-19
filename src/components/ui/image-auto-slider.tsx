"use client"

import { useState } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  wrap,
  PanInfo
} from 'framer-motion';

interface ImageAutoSliderProps {
  images?: string[];
}

export const ImageAutoSlider = ({ images: propImages }: ImageAutoSliderProps) => {
  const defaultImages = [
    "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2152&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1673264933212-d78737f38e48?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1675705721263-0bbeec261c49?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1524799526615-766a9833dec0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  const images = propImages || defaultImages;

  // We duplicate enough times to ensure we have "infinite" content to wrap around
  const duplicatedImages = [...images, ...images, ...images, ...images];

  const baseX = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Wrap logic: when x goes beyond -25% (one full set), it wraps back to 0%.
  // This assumes 4 sets of images (100% / 4 = 25%).
  const x = useTransform(baseX, (v) => `${wrap(0, -25, v)}%`);

  useAnimationFrame((_, delta) => {
    if (!isDragging && !isHovered) {
      // Auto-scroll speed. 
      // Adjust this value to control speed. simpler than velocity spring for now.
      baseX.set(baseX.get() - 0.02 * (delta / 10));
    }
  });

  const onDragStart = () => {
    setIsDragging(true);
  };

  const onDragEnd = () => {
    setIsDragging(false);
  };

  const onDrag = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // Update baseX based on drag delta.
    // Scaling factor for drag sensitivity
    const moveBy = info.delta.x * 0.05;
    baseX.set(baseX.get() + moveBy);
  };

  return (
    <div
      className="w-full relative overflow-hidden flex items-center justify-center bg-transparent py-6 md:py-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="scroll-container w-full max-w-[98vw] relative overflow-hidden cursor-grab active:cursor-grabbing">
        <style>{`
            .scroll-container {
              mask: linear-gradient(90deg, transparent 0%, black 5%, black 95%, transparent 100%);
              -webkit-mask: linear-gradient(90deg, transparent 0%, black 5%, black 95%, transparent 100%);
            }
          `}</style>

        <motion.div
          className="flex gap-4 md:gap-6 w-max"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0}
          dragMomentum={false}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onDrag={onDrag}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="image-item flex-shrink-0 w-48 h-36 sm:w-56 sm:h-42 md:w-64 md:h-48 lg:w-80 lg:h-60 rounded-xl overflow-hidden shadow-xl border border-white/10 select-none pointer-events-none"
            >
              <img
                src={image}
                alt={`Gallery image ${index}`}
                className="w-full h-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
