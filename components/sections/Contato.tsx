"use client";

import { useState, type FormEvent } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { WHATSAPP, WHATSAPP_URL } from "@/lib/constants";

const MODALIDADE_LABELS: Record<string, string> = {
  "jiujitsu-adulto": "Jiu-Jitsu Adulto",
  "jiujitsu-kids": "Jiu-Jitsu Kids",
  boxe: "Boxe",
  muaythai: "Muay Thai",
};

export default function Contato() {
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const data = new FormData(e.currentTarget);
    const nome = String(data.get("nome") || "").trim();
    const telefone = String(data.get("telefone") || "").trim();
    const modalidade = String(data.get("modalidade") || "").trim();
    const horario = String(data.get("horario") || "").trim();

    if (!nome || !telefone || !modalidade) {
      setError("Preencha nome, telefone e modalidade.");
      return;
    }

    const mensagem = [
      "Olá, Studio Trion! Quero agendar uma aula experimental.",
      "",
      `Nome: ${nome}`,
      `WhatsApp / Telefone: ${telefone}`,
      `Modalidade: ${MODALIDADE_LABELS[modalidade] || modalidade}`,
      `Horário de preferência: ${horario || "Não informado"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  const inputCls =
    "w-full appearance-none rounded-[var(--radius-brand)] border-2 border-neutral-200 bg-brand-white px-4 py-3 text-[0.93rem] text-brand-black transition-colors focus:border-brand-gold focus:outline-none";
  const labelCls =
    "mb-1.5 block text-xs font-bold uppercase tracking-wide text-brand-black";

  return (
    <section id="contato" className="bg-brand-white py-20 md:py-[80px]">
      <div className="mx-auto grid max-w-[1140px] items-start gap-16 px-6 md:grid-cols-2">
        {/* Texto + WhatsApp */}
        <div>
          <SectionTitle label="Primeira aula grátis" align="left">
            Venha treinar{" "}
            <span className="text-brand-gold">sem compromisso.</span>
          </SectionTitle>
          <div className="mt-5 space-y-4 text-[0.97rem] leading-relaxed text-neutral-600">
            <p>
              Agende sua aula experimental. Não precisa ter experiência — nossos
              professores adaptam o treino ao seu nível desde o primeiro dia.
            </p>
            <p>
              Ou, se preferir, fale diretamente com a gente pelo WhatsApp.
              Respondemos rápido.
            </p>
          </div>
          <div className="mt-6">
            <Button
              href={WHATSAPP_URL}
              variant="whatsapp"
              external
              ariaLabel="Falar com Studio Trion no WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Prefiro falar no WhatsApp
            </Button>
          </div>
        </div>

        {/* Formulário */}
        <div className="rounded-[var(--radius-brand-lg)] bg-[#f8f8f7] p-8 shadow-[0_2px_8px_rgba(0,0,0,0.10)] md:p-10">
          <form onSubmit={handleSubmit} noValidate>
            <h3 className="mb-7 text-lg font-extrabold text-brand-black">
              Agende sua aula experimental
            </h3>

            <div className="mb-[18px]">
              <label htmlFor="nome" className={labelCls}>
                Nome completo <span className="text-brand-gold">*</span>
              </label>
              <input id="nome" name="nome" type="text" placeholder="Seu nome" autoComplete="name" className={inputCls} required />
            </div>

            <div className="mb-[18px]">
              <label htmlFor="telefone" className={labelCls}>
                WhatsApp / Telefone <span className="text-brand-gold">*</span>
              </label>
              <input id="telefone" name="telefone" type="tel" placeholder="(21) 99999-9999" autoComplete="tel" className={inputCls} required />
            </div>

            <div className="mb-[18px]">
              <label htmlFor="modalidade" className={labelCls}>
                Modalidade de interesse <span className="text-brand-gold">*</span>
              </label>
              <select id="modalidade" name="modalidade" defaultValue="" className={inputCls} required>
                <option value="" disabled>
                  Selecione a modalidade
                </option>
                <option value="jiujitsu-adulto">Jiu-Jitsu Adulto</option>
                <option value="jiujitsu-kids">Jiu-Jitsu Kids</option>
                <option value="boxe">Boxe</option>
                <option value="muaythai">Muay Thai</option>
              </select>
            </div>

            <div className="mb-[18px]">
              <label htmlFor="horario" className={labelCls}>
                Horário de preferência
              </label>
              <input id="horario" name="horario" type="text" placeholder="Ex: manhã, noite, qualquer horário..." className={inputCls} />
            </div>

            {error && (
              <p className="mb-4 text-sm font-semibold text-[#c0392b]">{error}</p>
            )}

            <Button type="submit" variant="gold" block>
              Agendar Aula Experimental
            </Button>

            <p className="mt-3 text-center text-xs leading-relaxed text-brand-gray">
              Seus dados não serão compartilhados. Entraremos em contato em até 24h.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
