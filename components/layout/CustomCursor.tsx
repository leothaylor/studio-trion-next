"use client";

import { useEffect, useRef } from "react";

/**
 * Cursor customizado: anel dourado que acompanha o mouse diretamente.
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

    const onMove = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
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

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  return <div ref={dotRef} className="custom-cursor" aria-hidden="true" />;
}
