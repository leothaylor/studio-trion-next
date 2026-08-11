"use client";

import { useState, type FormEvent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Quote, X } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { WHATSAPP } from "@/lib/constants";

// PLACEHOLDER: nunca inventar nome/texto de aluno — aguardando depoimentos reais autorizados.
const DEPOIMENTOS = [
  { modal: "Jiu-Jitsu" },
  { modal: "Muay Thai" },
  { modal: "Boxe" },
  { modal: "Jiu-Jitsu Kids" },
];

export default function Depoimentos() {
  const [formOpen, setFormOpen] = useState(false);
  const [anonymous, setAnonymous] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const data = new FormData(e.currentTarget);
    const nome = String(data.get("nome") || "").trim();
    const modalidade = String(data.get("modalidade") || "").trim();
    const depoimento = String(data.get("depoimento") || "").trim();

    if ((!anonymous && !nome) || !modalidade || !depoimento) {
      setError("Preencha os campos obrigatórios para enviar seu depoimento.");
      return;
    }

    const nomePublico = anonymous ? "Anônimo" : nome;
    const mensagem = [
      "Olá, Studio Trion! Quero enviar um depoimento para o site.",
      "",
      `Nome: ${nomePublico}`,
      `Modalidade / vínculo: ${modalidade}`,
      "",
      "Depoimento:",
      depoimento,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  const inputCls =
    "w-full rounded-[var(--radius-brand)] border border-white/15 bg-brand-black px-4 py-3 text-sm text-brand-white outline-none transition-colors placeholder:text-neutral-500 focus:border-brand-gold";
  const labelCls =
    "mb-1.5 block text-xs font-bold uppercase tracking-wide text-neutral-300";

  return (
    <section id="depoimentos" className="bg-brand-black py-20 md:py-[80px]">
      <div className="mx-auto max-w-[1140px] px-6">
        <div className="mb-14">
          <SectionTitle label="Comunidade" dark>
            Quem treina <span className="text-brand-gold">fala por nós.</span>
          </SectionTitle>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-12"
        >
          {DEPOIMENTOS.map((d, i) => (
            <SwiperSlide key={i} className="h-auto">
              <figure className="flex h-full min-h-[260px] flex-col gap-4 rounded-[var(--radius-brand-lg)] border border-white/10 bg-brand-black-soft p-7 transition-colors hover:border-brand-gold">
                <Quote className="h-8 w-8 text-brand-gold/70" aria-hidden="true" />
                <div className="text-base tracking-wide text-brand-gold" aria-label="5 estrelas">
                  ★★★★★
                </div>
                <blockquote className="flex-1 font-serif text-[0.95rem] italic leading-relaxed text-neutral-300">
                  &ldquo;[Depoimento a inserir — aguardando texto real de aluno
                  autorizado]&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gold/15 font-bold text-brand-gold">
                    A
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-brand-white">
                      [Nome do aluno]
                    </span>
                    <span className="block text-xs tracking-wide text-brand-gray">
                      {d.modal}
                    </span>
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-2 flex justify-center">
          <Button
            type="button"
            variant="gold-outline"
            onClick={() => setFormOpen(true)}
          >
            Deixar meu depoimento
          </Button>
        </div>
      </div>

      {formOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="testimonial-form-title"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setFormOpen(false);
          }}
        >
          <div className="relative w-full max-w-[540px] rounded-[var(--radius-brand-lg)] border border-white/10 bg-brand-black-soft p-7 shadow-2xl md:p-9">
            <button
              type="button"
              onClick={() => setFormOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-neutral-400 transition-colors hover:text-brand-white"
              aria-label="Fechar formulário de depoimento"
            >
              <X className="h-5 w-5" />
            </button>

            <h3
              id="testimonial-form-title"
              className="mb-2 pr-10 text-xl font-extrabold text-brand-white"
            >
              Deixe seu depoimento
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-brand-gray">
              Você pode se identificar ou enviar de forma anônima. O depoimento será
              encaminhado à equipe do Studio Trion para publicação.
            </p>

            <form onSubmit={handleSubmit}>
              <label className="mb-5 flex items-center gap-3 text-sm text-neutral-300">
                <input
                  type="checkbox"
                  checked={anonymous}
                  onChange={(e) => setAnonymous(e.target.checked)}
                  className="h-4 w-4 accent-[#f2cb00]"
                />
                Quero enviar como anônimo
              </label>

              {!anonymous && (
                <div className="mb-5">
                  <label htmlFor="depoimento-nome" className={labelCls}>
                    Nome <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    id="depoimento-nome"
                    name="nome"
                    type="text"
                    placeholder="Seu nome"
                    className={inputCls}
                  />
                </div>
              )}

              <div className="mb-5">
                <label htmlFor="depoimento-modalidade" className={labelCls}>
                  Modalidade / vínculo <span className="text-brand-gold">*</span>
                </label>
                <select
                  id="depoimento-modalidade"
                  name="modalidade"
                  defaultValue=""
                  className={inputCls}
                  required
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  <option value="Jiu-Jitsu">Jiu-Jitsu</option>
                  <option value="Jiu-Jitsu Kids / Baby Kids">Jiu-Jitsu Kids / Baby Kids</option>
                  <option value="Muay Thai">Muay Thai</option>
                  <option value="Boxe">Boxe</option>
                  <option value="Responsável por aluno">Responsável por aluno</option>
                </select>
              </div>

              <div className="mb-5">
                <label htmlFor="depoimento-texto" className={labelCls}>
                  Seu depoimento <span className="text-brand-gold">*</span>
                </label>
                <textarea
                  id="depoimento-texto"
                  name="depoimento"
                  rows={5}
                  placeholder="Conte como tem sido sua experiência no Studio Trion..."
                  className={`${inputCls} resize-none`}
                  required
                />
              </div>

              {error && (
                <p className="mb-4 text-sm font-semibold text-[#ff8173]">{error}</p>
              )}

              <Button type="submit" variant="gold" block>
                Enviar depoimento
              </Button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
