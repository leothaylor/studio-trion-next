"use client";

import { MapPin } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { ADDRESS, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/constants";

// Embed por consulta (sem necessidade de API key) apontando para o endereço exato.
const MAPS_QUERY =
  "Estrada do Engenho D'Água 1375, Anil, Rio de Janeiro, RJ 22765-240";
const MAPS_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  MAPS_QUERY
)}&output=embed`;

export default function Localizacao() {
  return (
    <section id="localizacao" className="bg-[#f8f8f7] py-20 md:py-[80px]">
      <div className="mx-auto max-w-[1140px] px-6">
        <div className="mb-14">
          <SectionTitle label="Onde estamos">Localização</SectionTitle>
        </div>

        <div className="grid items-start gap-12 md:grid-cols-[340px_1fr]">
          <div className="flex flex-col gap-7">
            <div className="flex items-start gap-3.5">
              <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-gold" aria-hidden="true" />
              <div>
                <strong className="mb-1 block text-xs font-bold uppercase tracking-wide text-brand-black">
                  Endereço
                </strong>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {ADDRESS.line1}
                  <br />
                  {ADDRESS.line2}
                  <br />
                  {ADDRESS.line3}
                  <br />
                  {ADDRESS.cep}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <div>
                <strong className="mb-1 block text-xs font-bold uppercase tracking-wide text-brand-black">
                  Instagram
                </strong>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-brand-gold hover:underline"
                >
                  {INSTAGRAM_HANDLE}
                </a>
              </div>
            </div>

            <Button href="#contato" variant="gold">
              Agendar aula experimental
            </Button>
          </div>

          <div className="overflow-hidden rounded-[var(--radius-brand-lg)] shadow-[0_2px_8px_rgba(0,0,0,0.10)]">
            <iframe
              title="Localização do Studio Trion no Google Maps"
              src={MAPS_SRC}
              width="100%"
              height="350"
              style={{ border: 0, minHeight: 350 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
