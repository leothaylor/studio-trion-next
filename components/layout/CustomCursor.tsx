"use client";

import { useEffect, useRef } from "react";

/**
 * Cursor customizado: anel dourado que segue o mouse com leve inércia.
 * Somente desktop (pointer: fine). Cresce ao passar sobre links/botões.
 * Desativado quando prefers-reduced-motion está ligado.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!finePointer || prefersReduced) return;

    const el = dotRef.current;
    if (!el) return;

    document.body.classList.add("has-custom-cursor");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let curX = mouseX;
    let curY = mouseY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const tick = () => {
      curX += (mouseX - curX) * 0.18;
      curY += (mouseY - curY) * 0.18;
      el.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, input, select, textarea, [role='button']")) {
        el.classList.add("is-hover");
      }
    };
    const onOut = () => el.classList.remove("is-hover");

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  return <div ref={dotRef} className="custom-cursor" aria-hidden="true" />;
}
