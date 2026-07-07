"use client";

import { motion } from "framer-motion";
import { Trophy, Globe } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { asset } from "@/lib/asset";

const DESTAQUES = [
  {
    name: "Ygor Rodrigues",
    modal: "Jiu-Jitsu · Kids",
    photo: "/images/ygor-professor-07.jpg",
    conquistas: [
      { Icon: Trophy, text: "Pódio — Campeonato Brasileiro de Jiu-Jitsu 2019" },
      { Icon: Globe, text: "Participação — Campeonato Kids World Tour" },
    ],
    bio: "Faixa-preta com trajetória competitiva no nível nacional, Ygor traz para o tatame do Studio Trion a mesma dedicação que o levou ao pódio. Suas aulas combinam técnica apurada e didática acessível — para adultos e crianças.",
  },
  {
    name: "Yago Rodrigues",
    modal: "Jiu-Jitsu · Baby Kids",
    photo: "/images/yago-professor-09.jpg",
    conquistas: [
      { Icon: Trophy, text: "Pódio — Campeonato Brasileiro de Jiu-Jitsu 2019" },
      { Icon: Globe, text: "Participação — Campeonato Kids World Tour" },
    ],
    bio: "Faixa-preta e especialista em turmas de iniciação infantil, Yago une vivência competitiva a uma abordagem lúdica e segura para os menores. No adulto, conduz turmas com foco técnico e progressão real.",
  },
];

// TODO: confirmar identidade/foto do terceiro sócio faixa-preta.
const EQUIPE = [
  { name: "Luiza", modal: "Muay Thai" },
  { name: "Allan", modal: "Jiu-Jitsu" },
  { name: "Leonardo", modal: "Jiu-Jitsu" },
  { name: "Claudio", modal: "Boxe" },
];

export default function Professores() {
  return (
    <section id="professores" className="bg-brand-black py-20 text-brand-white md:py-[80px]">
      <div className="mx-auto max-w-[1140px] px-6">
        <div className="mb-14">
          <SectionTitle
            label="Quem te ensina"
            dark
            subtitle="Nossos instrutores têm histórico competitivo real — prova de que dominam o que ensinam. Aqui você aprende com quem viveu cada movimento."
          >
            Professores com{" "}
            <span className="text-brand-gold">autoridade comprovada.</span>
          </SectionTitle>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2">
          {DESTAQUES.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              className="group grid grid-cols-[140px_1fr] overflow-hidden rounded-[var(--radius-brand-lg)] border border-brand-gold/15 bg-brand-black-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold sm:grid-cols-[180px_1fr]"
            >
              <div
                className="min-h-[240px] bg-cover bg-top"
                style={{ backgroundImage: `url('${asset(p.photo)}')` }}
                role="img"
                aria-label={`${p.name}, faixa-preta de Jiu-Jitsu`}
              />
              <div className="p-7">
                <h3 className="mb-1.5 text-xl font-extrabold text-brand-white">
                  {p.name}
                </h3>
                <span className="mb-1 inline-block rounded-full bg-brand-gold/10 px-2.5 py-0.5 text-xs font-bold uppercase tracking-widest text-brand-gold">
                  ⚫ Faixa-Preta
                </span>
                <p className="mb-4 mt-1 text-[0.82rem] text-brand-gray">{p.modal}</p>
                <div className="mb-4 space-y-1.5">
                  {p.conquistas.map((c, ci) => (
                    <div key={ci} className="flex items-start gap-2 text-[0.82rem] text-neutral-300">
                      <c.Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-gold" aria-hidden="true" />
                      <span>{c.text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[0.85rem] leading-relaxed text-brand-gray">{p.bio}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <h3 className="mb-7 text-center text-base font-bold uppercase tracking-widest text-brand-gray">
          Equipe de instrutores
        </h3>
        <div className="flex flex-wrap justify-center gap-5">
          {EQUIPE.map((prof, i) => (
            <motion.div
              key={prof.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex min-w-[120px] flex-col items-center gap-2 rounded-[var(--radius-brand-lg)] border border-white/10 bg-brand-black-soft px-6 py-5 transition-colors hover:border-brand-gold"
            >
              {/* placeholder-foto: iniciais até foto real do professor. */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-black-soft to-[#3d3200] text-xl font-bold text-brand-gold">
                {prof.name.charAt(0)}
              </div>
              <span className="text-sm font-bold text-brand-white">{prof.name}</span>
              <span className="text-xs tracking-wide text-brand-gray">{prof.modal}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
