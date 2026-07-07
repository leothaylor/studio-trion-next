"use client";

import { motion, type Variants } from "framer-motion";
import { Swords, Dumbbell, Flame } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { asset } from "@/lib/asset";

interface Modalidade {
  title: string;
  text: string;
  image: string;
  Icon: LucideIcon;
}

const MODALIDADES: Modalidade[] = [
  {
    title: "Jiu-Jitsu",
    text: "Arte marcial de origem japonesa aperfeiçoada no Brasil. Desenvolve técnica, estratégia e autoconhecimento. Turmas para adultos, kids e baby kids — todos os níveis são bem-vindos, do iniciante ao avançado.",
    image: "/images/jiujitsu-treino-03.jpg",
    Icon: Swords,
  },
  {
    title: "Boxe",
    text: "Condicionamento físico de alto nível aliado à técnica de socos e footwork. Treino completo para quem busca preparo físico, disciplina e confiança — sem precisar ser atleta para começar.",
    image: "/images/boxe-aula-06.jpg",
    Icon: Dumbbell,
  },
  {
    title: "Muay Thai",
    text: "A arte dos oito membros: punhos, cotovelos, joelhos e chutes. Trabalha resistência, coordenação e força de forma progressiva. Treinos dinâmicos e acessíveis, do iniciante ao experiente.",
    image: "/images/muaythai-treino-08.jpg",
    Icon: Flame,
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const card: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Modalidades() {
  return (
    <section id="modalidades" className="bg-[#f8f8f7] py-20 md:py-[80px]">
      <div className="mx-auto max-w-[1140px] px-6">
        <div className="mb-14">
          <SectionTitle label="O que ensinamos">
            Três modalidades.
            <br />
            Um só caminho.
          </SectionTitle>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-7 md:grid-cols-3"
        >
          {MODALIDADES.map((m) => (
            <motion.article
              key={m.title}
              variants={card}
              className="group overflow-hidden rounded-[var(--radius-brand-lg)] border-2 border-transparent bg-brand-white shadow-[0_2px_8px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-2 hover:border-brand-gold hover:shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
            >
              <div
                className="relative flex h-[220px] items-center justify-center bg-brand-black bg-cover bg-center"
                style={{ backgroundImage: `url('${asset(m.image)}')` }}
                role="img"
                aria-label={`Treino de ${m.title} no Studio Trion`}
              >
                <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/20" />
                <m.Icon
                  className="relative z-[1] h-14 w-14 text-brand-gold drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
              <div className="p-7">
                <h3 className="mb-3 text-xl font-extrabold tracking-wide text-brand-black">
                  {m.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-neutral-600">
                  {m.text}
                </p>
                <Button href="#contato" variant="gold-outline">
                  Quero começar
                </Button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
