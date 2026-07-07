"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import Counter from "@/components/ui/Counter";
import { asset } from "@/lib/asset";

// TODO: confirmar números reais (sócios, professores, modalidades) com o Studio Trion.
const STATS = [
  { to: 3, suffix: "", label: "Sócios Faixa-Preta" },
  { to: 5, suffix: "", label: "Professores" },
  { to: 3, suffix: "", label: "Modalidades" },
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/images/grupo-familia-05.jpg")}
            alt="Equipe Studio Trion — alunos e professores"
            className="aspect-[4/5] w-full rounded-[var(--radius-brand-lg)] object-cover object-top"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
