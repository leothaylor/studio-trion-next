"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { asset } from "@/lib/asset";

type CarouselImage = {
  src: string;
  alt: string;
};

type AutoImageCarouselProps = {
  images: CarouselImage[];
  intervalMs?: number;
  className?: string;
};

export default function AutoImageCarousel({
  images,
  intervalMs = 4800,
  className = "",
}: AutoImageCarouselProps) {
  const prefersReducedMotion = useReducedMotion();
  const [availableImages, setAvailableImages] = useState<CarouselImage[]>(
    images.slice(0, 1),
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const imageKey = useMemo(
    () => images.map((image) => image.src).join("|"),
    [images],
  );

  useEffect(() => {
    let cancelled = false;

    Promise.all(
      images.map(
        (image) =>
          new Promise<{ image: CarouselImage; loaded: boolean }>((resolve) => {
            const preload = new window.Image();
            preload.onload = () => resolve({ image, loaded: true });
            preload.onerror = () => resolve({ image, loaded: false });
            preload.src = asset(image.src);
          }),
      ),
    ).then((results) => {
      if (cancelled) return;

      const validImages = results
        .filter((result) => result.loaded)
        .map((result) => result.image);

      setAvailableImages(validImages.length > 0 ? validImages : images.slice(0, 1));
      setActiveIndex(0);
    });

    return () => {
      cancelled = true;
    };
  }, [imageKey, images]);

  useEffect(() => {
    if (paused || availableImages.length <= 1 || prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % availableImages.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [availableImages.length, intervalMs, paused, prefersReducedMotion]);

  const activeImage = availableImages[activeIndex] ?? availableImages[0];

  if (!activeImage) return null;

  return (
    <div
      className={`group relative overflow-hidden rounded-[var(--radius-brand-lg)] bg-neutral-100 ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={activeImage.src}
          src={asset(activeImage.src)}
          alt={activeImage.alt}
          className="absolute inset-0 h-full w-full object-cover object-top"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 12, scale: 1.012 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: -12, scale: 1.006 }}
          transition={{ duration: prefersReducedMotion ? 0.15 : 0.75, ease: "easeInOut" }}
          loading={activeIndex === 0 ? "lazy" : "eager"}
          draggable={false}
        />
      </AnimatePresence>

      {availableImages.length > 1 && (
        <div
          className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/35 px-3 py-2 backdrop-blur-sm"
          aria-label="Selecionar imagem do carrossel"
        >
          {availableImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-6 bg-brand-gold" : "w-1.5 bg-white/70 hover:bg-white"
              }`}
              aria-label={`Mostrar imagem ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
}
