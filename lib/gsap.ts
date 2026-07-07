"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registra o plugin uma única vez, apenas no cliente.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
