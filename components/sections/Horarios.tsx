"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "@/components/ui/SectionTitle";

type Tipo = "jiujitsu" | "boxe" | "muaythai" | "kids" | null;
interface Aula {
  nome: string;
  prof: string;
  tipo: Tipo;
}

const DIAS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

const jj = (prof: string): Aula => ({ nome: "Jiu-Jitsu", prof, tipo: "jiujitsu" });
const mt = (prof: string): Aula => ({ nome: "Muay Thai", prof, tipo: "muaythai" });
const bx = (prof: string): Aula => ({ nome: "Boxe", prof, tipo: "boxe" });
const kids = (nome: string, prof: string): Aula => ({ nome, prof, tipo: "kids" });
const X: Aula = { nome: "–", prof: "", tipo: null };

// Grade real (não alterar): cada linha segue [Seg, Ter, Qua, Qui, Sex]
const GRADE: { hora: string; aulas: Aula[] }[] = [
  { hora: "06:00–07:30", aulas: [mt("Luiza"), X, mt("Luiza"), X, mt("Luiza")] },
  { hora: "08:00–09:30", aulas: [jj("Allan"), X, jj("Allan"), X, jj("Allan")] },
  { hora: "10:00–11:30", aulas: [jj("Leonardo"), X, jj("Leonardo"), X, jj("Leonardo")] },
  { hora: "12:00–13:30", aulas: [X, X, X, X, X] },
  { hora: "14:00–15:30", aulas: [jj("Yago"), X, jj("Yago"), X, jj("Yago")] },
  { hora: "16:00–17:30", aulas: [mt("Luiza"), bx("Claudio"), mt("Luiza"), bx("Claudio"), mt("Luiza")] },
  { hora: "18:00–19:30", aulas: [kids("Jiu-Jitsu Kids", "Ygor"), kids("JJ Baby Kids", "Yago"), kids("Jiu-Jitsu Kids", "Ygor"), kids("JJ Baby Kids", "Yago"), kids("Jiu-Jitsu Kids", "Ygor")] },
  { hora: "20:00–21:30", aulas: [jj("Ygor"), mt("Luiza"), jj("Ygor"), mt("Luiza"), jj("Ygor")] },
  { hora: "22:00–23:00", aulas: [X, X, X, X, X] },
];

const cellColor: Record<Exclude<Tipo, null>, string> = {
  jiujitsu: "bg-black/[0.04] text-brand-black",
  boxe: "bg-brand-gold/10 text-[#8a7200]",
  muaythai: "bg-[#b41414]/[0.06] text-[#9e1414]",
  kids: "bg-[#00783c]/[0.08] text-[#00622f]",
};
const borderColor: Record<Exclude<Tipo, null>, string> = {
  jiujitsu: "border-brand-black",
  boxe: "border-brand-gold",
  muaythai: "border-[#c0392b]",
  kids: "border-[#27ae60]",
};

const LEGENDA: { label: string; tipo: Exclude<Tipo, null> }[] = [
  { label: "Jiu-Jitsu", tipo: "jiujitsu" },
  { label: "Boxe", tipo: "boxe" },
  { label: "Muay Thai", tipo: "muaythai" },
  { label: "Kids / Baby Kids", tipo: "kids" },
];

export default function Horarios() {
  // Reagrupa a grade por dia (para o mobile)
  const porDia = DIAS.map((dia, di) => ({
    dia,
    aulas: GRADE.map((row) => ({ hora: row.hora, aula: row.aulas[di] })).filter(
      (r) => r.aula.tipo !== null
    ),
  }));

  return (
    <section id="horarios" className="bg-[#f8f8f7] py-20 md:py-[80px]">
      <div className="mx-auto max-w-[1140px] px-6">
        <div className="mb-14">
          <SectionTitle
            label="Grade semanal"
            subtitle="Encontre o melhor horário para a sua rotina."
          >
            Horários
          </SectionTitle>
        </div>

        {/* Desktop / tablet: tabela */}
        <div className="mb-8 hidden overflow-x-auto rounded-[var(--radius-brand-lg)] shadow-[0_2px_8px_rgba(0,0,0,0.10)] sm:block">
          <table className="w-full min-w-[680px] border-collapse bg-brand-white text-[0.85rem]">
            <thead>
              <tr className="bg-brand-black text-brand-white">
                <th className="px-4 py-3.5 text-left text-xs font-bold uppercase tracking-wide">
                  Horário
                </th>
                {DIAS.map((d) => (
                  <th key={d} className="px-2 py-3.5 text-center text-xs font-bold uppercase tracking-wide">
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {GRADE.map((row) => (
                <tr key={row.hora} className="border-b border-neutral-200 last:border-0 hover:bg-neutral-50">
                  <th
                    scope="row"
                    className="whitespace-nowrap bg-neutral-100 px-4 py-3 text-left text-[0.78rem] font-bold text-brand-black"
                  >
                    {row.hora}
                  </th>
                  {row.aulas.map((aula, ci) => (
                    <td
                      key={ci}
                      className={`px-2 py-2.5 text-center align-middle ${
                        aula.tipo ? cellColor[aula.tipo] : "text-brand-gray"
                      }`}
                    >
                      {aula.tipo ? (
                        <>
                          <span className="block text-[0.78rem] font-bold leading-tight">
                            {aula.nome}
                          </span>
                          <span className="block text-[0.7rem] text-brand-gray">{aula.prof}</span>
                        </>
                      ) : (
                        "–"
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: Swiper, um card por dia */}
        <div className="mb-8 sm:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={1.1}
            className="!pb-10"
          >
            {porDia.map((d) => (
              <SwiperSlide key={d.dia}>
                <div className="overflow-hidden rounded-[var(--radius-brand-lg)] bg-brand-white shadow-[0_2px_8px_rgba(0,0,0,0.10)]">
                  <h3 className="bg-brand-black px-5 py-3.5 text-sm font-extrabold uppercase tracking-wide text-brand-white">
                    {d.dia}-feira
                  </h3>
                  <ul className="py-2">
                    {d.aulas.map((r, i) => (
                      <li
                        key={i}
                        className={`flex items-center gap-3 border-l-[3px] px-5 py-2.5 ${
                          r.aula.tipo ? borderColor[r.aula.tipo] : ""
                        }`}
                      >
                        <span className="min-w-[90px] whitespace-nowrap text-xs font-bold text-brand-gray">
                          {r.hora}
                        </span>
                        <span className="text-sm font-semibold">
                          {r.aula.nome}{" "}
                          <em className="font-normal not-italic text-brand-gray">· {r.aula.prof}</em>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Legenda */}
        <div className="flex flex-wrap justify-center gap-3">
          {LEGENDA.map((l) => (
            <span
              key={l.label}
              className={`rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wide ${cellColor[l.tipo]}`}
            >
              {l.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
