"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Quote } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

// PLACEHOLDER: nunca inventar nome/texto de aluno — aguardando depoimentos reais autorizados.
const DEPOIMENTOS = [
  { modal: "Jiu-Jitsu" },
  { modal: "Muay Thai" },
  { modal: "Boxe" },
  { modal: "Jiu-Jitsu Kids" },
];

export default function Depoimentos() {
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
      </div>
    </section>
  );
}
