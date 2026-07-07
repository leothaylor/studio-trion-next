"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import Button from "@/components/ui/Button";
import { asset } from "@/lib/asset";

const HEADLINE = [
  "Jiu-Jitsu, Boxe e Muay Thai",
  "para quem nunca pisou num tatame —",
  "e para quem já não quer parar.",
];

/** Divide o texto em letras (agrupadas por palavra para não quebrar no meio). */
function SplitHeadline() {
  let counter = 0;
  return (
    <>
      {HEADLINE.map((line, li) => {
        const gold = li === HEADLINE.length - 1;
        return (
          <span key={li} className="block">
            {line.split(" ").map((word, wi) => (
              <span key={wi} className="inline-block whitespace-nowrap">
                {Array.from(word).map((char) => {
                  const delay = counter * 0.03;
                  counter += 1;
                  return (
                    <motion.span
                      key={counter}
                      initial={{ opacity: 0, y: "0.4em" }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 + delay }}
                      className={`inline-block ${gold ? "text-brand-gold" : ""}`}
                    >
                      {char}
                    </motion.span>
                  );
                })}
                {/* espaço entre palavras */}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        );
      })}
    </>
  );
}

const PARTICLES = [
  { top: "18%", left: "12%", size: 6, delay: 0 },
  { top: "30%", left: "82%", size: 4, delay: 1.5 },
  { top: "62%", left: "22%", size: 5, delay: 0.8 },
  { top: "48%", left: "68%", size: 3, delay: 2.2 },
  { top: "74%", left: "88%", size: 5, delay: 1.1 },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(bgRef.current, {
        yPercent: 22,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="grain relative flex min-h-[100svh] flex-col overflow-hidden bg-brand-black pt-20"
    >
      {/* Fundo com parallax */}
      <div
        ref={bgRef}
        aria-hidden="true"
        className="absolute inset-x-0 -top-[10%] h-[120%] bg-cover bg-center"
        style={{ backgroundImage: `url('${asset("/images/hero-logo-wall.jpg")}')` }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/80 to-brand-black/95"
      />

      {/* Partículas douradas */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="gold-particle"
          aria-hidden="true"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Conteúdo */}
      <div className="relative z-[3] mx-auto flex w-full max-w-[1140px] flex-1 items-center px-6 pb-10 pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-[820px]"
        >
          <h1 className="mb-6 text-[clamp(2rem,5.5vw,3.5rem)] font-extrabold leading-[1.15] tracking-tight text-brand-white">
            <SplitHeadline />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-10 font-serif text-[clamp(1.05rem,2vw,1.3rem)] italic text-brand-gray"
          >
            A tríade que te move: mente, corpo e espírito.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="flex flex-wrap gap-4"
          >
            <Button href="#contato" variant="gold" size="lg">
              Agendar Aula Experimental
            </Button>
            <Button href="#modalidades" variant="outline" size="lg">
              Ver Modalidades
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Faixa de modalidades */}
      <div className="relative z-[3] bg-brand-white py-6">
        <div className="mx-auto flex max-w-[1140px] flex-wrap items-center justify-center gap-x-2 px-6">
          {[
            { icon: "🥋", label: "Jiu-Jitsu" },
            { icon: "🥊", label: "Boxe" },
            { icon: "🦵", label: "Muay Thai" },
          ].map((m, i, arr) => (
            <div key={m.label} className="flex items-center">
              <span className="flex items-center gap-2.5 px-8 py-2 text-[0.95rem] font-bold uppercase tracking-widest text-brand-black">
                <span className="text-2xl" aria-hidden="true">
                  {m.icon}
                </span>
                {m.label}
              </span>
              {i < arr.length - 1 && (
                <span className="h-8 w-px bg-brand-gray/30" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
