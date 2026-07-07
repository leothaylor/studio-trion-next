import Link from "next/link";
import { asset } from "@/lib/asset";
import {
  NAV_LINKS,
  ADDRESS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_URL,
} from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-brand-gold/70 bg-brand-black text-brand-white">
      <div className="mx-auto grid max-w-[1140px] gap-12 px-6 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Link href="#inicio" aria-label="Studio Trion — voltar ao topo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/images/logo-white.png")}
              alt="Studio Trion — Brazilian Jiu-Jitsu"
              className="h-9 w-auto object-contain"
            />
          </Link>
          <p className="font-serif text-[0.9rem] italic text-brand-gray">
            A tríade que te move: mente, corpo e espírito.
          </p>
        </div>

        <nav aria-label="Links rápidos">
          <h4 className="mb-4 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-brand-gold">
            Navegação
          </h4>
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[0.88rem] text-brand-gray transition-colors hover:text-brand-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3">
          <h4 className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-brand-gold">
            Contato &amp; Redes
          </h4>
          <p className="text-[0.85rem] leading-relaxed text-brand-gray">
            {ADDRESS.line1}
            <br />
            {ADDRESS.line2}, Anil
            <br />
            Rio de Janeiro — RJ
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.88rem] font-semibold text-brand-gold transition-colors hover:text-brand-white"
          >
            {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="mx-auto flex max-w-[1140px] flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
          <p className="text-[0.8rem] text-brand-gray">
            © {year} Studio Trion. Todos os direitos reservados.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.8rem] text-brand-gold"
          >
            WhatsApp ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
