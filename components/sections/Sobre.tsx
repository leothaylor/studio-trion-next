"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import Counter from "@/components/ui/Counter";
import AutoImageCarousel from "@/components/ui/AutoImageCarousel";

// TODO: confirmar números reais (sócios, professores, modalidades) com o Studio Trion.
const STATS = [
  { to: 3, suffix: "", label: "Sócios Faixa-Preta" },
  { to: 5, suffix: "", label: "Professores" },
  { to: 3, suffix: "", label: "Modalidades" },
];

// A primeira imagem já existe no projeto. As demais entram automaticamente
// quando forem enviadas para public/images com estes nomes exatos.
const SOBRE_CAROUSEL_IMAGES = [
  {
    src: "/images/grupo-familia-05.jpg",
    alt: "Studio Trion — apresentação da academia",
  },
  {
    src: "/images/sobre-carousel-02.jpg",
    alt: "Studio Trion — ambiente e comunidade 2",
  },
  {
    src: "/images/sobre-carousel-03.jpg",
    alt: "Studio Trion — ambiente e comunidade 3",
  },
  {
    src: "/images/sobre-carousel-04.jpg",
    alt: "Studio Trion — ambiente e comunidade 4",
  },
  {
    src: "/images/sobre-carousel-05.jpg",
    alt: "Studio Trion — ambiente e comunidade 5",
  },
  {
    src: "/images/sobre-carousel-06.jpg",
    alt: "Studio Trion — ambiente e comunidade 6",
  },
  {
    src: "/images/sobre-carousel-07.jpg",
    alt: "Studio Trion — ambiente e comunidade 7",
  },
  {
    src: "/images/sobre-carousel-08.jpg",
    alt: "Studio Trion — ambiente e comunidade 8",
  },
  {
    src: "/images/sobre-carousel-muaythai-terca-quinta.jpg",
    alt: "Studio Trion — Muay Thai terça e quinta",
  },
  {
    src: "/images/sobre-carousel-bjj-babykids.jpg",
    alt: "Studio Trion — BJJ Baby Kids",
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="bg-brand-white py-20 md:py-[80px]">
      <div className="mx-auto grid max-w-[1140px] items-center gap-16 px-6 md:grid-cols-2">
        <div>
          <SectionTitle label="Quem somos" align="left">
            Três faixas-pretas.
            <br />
            Uma missão.
          </SectionTitle>

          <div className="mt-6 space-y-4">
            <p className="text-[0.97rem] leading-relaxed text-neutral-700">
              O Studio Trion nasceu da união de três faixas-pretas com uma visão
              compartilhada: tornar as artes marciais acessíveis para qualquer
              pessoa — independente de idade, nível físico ou experiência anterior.
            </p>
            {/* PLACEHOLDER: texto institucional detalhado — inserir quando fornecido pelos sócios. */}
            <p className="text-[0.97rem] leading-relaxed text-neutral-500 italic">
              [Texto institucional a inserir: história da academia, valores dos
              sócios, visão de comunidade e propósito da Tríade Mente, Corpo e
              Espírito.]
            </p>
            <p className="text-[0.97rem] leading-relaxed text-neutral-700">
              Localizado no Anil, Rio de Janeiro, o Studio Trion é mais do que uma
              academia — é uma comunidade que cresce junta, respeitando cada passo
              da jornada de cada aluno.
            </p>
          </div>

          <div className="mt-8 flex gap-8 border-t border-neutral-200 pt-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <span className="block text-[2.2rem] font-extrabold leading-none text-brand-gold">
                  <Counter to={s.to} suffix={s.suffix} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-gray">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-first md:order-last"
        >
          <AutoImageCarousel
            images={SOBRE_CAROUSEL_IMAGES}
            intervalMs={4000}
            className="aspect-[4/5] w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
