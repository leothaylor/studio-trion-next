"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { asset } from "@/lib/asset";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  // Header encolhe + sombra ao rolar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy — destaca a seção visível
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]")
    );
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Trava scroll do body com menu mobile aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[1000] border-b border-brand-gold/15 bg-brand-black transition-all duration-300 ${
        scrolled ? "h-[60px] shadow-[0_2px_20px_rgba(0,0,0,0.45)]" : "h-20"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1140px] items-center gap-6 px-6">
        <Link href="#inicio" aria-label="Studio Trion — página inicial" className="flex flex-shrink-0 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/images/logo-white.png")}
            alt="Studio Trion — Brazilian Jiu-Jitsu"
            className={`w-auto object-contain transition-all duration-300 ${
              scrolled ? "h-8" : "h-[42px]"
            }`}
          />
        </Link>

        {/* Nav desktop */}
        <nav
          className="ml-auto hidden items-center gap-1 lg:flex"
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-[var(--radius-brand)] px-3 py-1.5 text-[0.82rem] font-semibold uppercase tracking-wide transition-colors ${
                  isActive
                    ? "bg-white/10 text-brand-white"
                    : "text-brand-gray hover:bg-white/10 hover:text-brand-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="#contato"
          className="ml-4 hidden rounded-[var(--radius-brand)] border-2 border-brand-gold bg-brand-gold px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-black transition-all hover:-translate-y-0.5 hover:bg-brand-gold-dark lg:inline-flex"
        >
          Aula Experimental
        </Link>

        {/* Hambúrguer mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          className="ml-auto flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={`block h-0.5 w-6 rounded bg-brand-white transition-transform duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded bg-brand-white transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded bg-brand-white transition-transform duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Menu mobile fullscreen */}
      <nav
        className={`fixed inset-x-0 bottom-0 top-[60px] flex-col gap-1 overflow-y-auto bg-brand-black px-6 py-8 lg:hidden ${
          menuOpen ? "flex" : "hidden"
        }`}
        aria-label="Navegação mobile"
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="rounded-[var(--radius-brand)] px-4 py-3.5 text-lg font-semibold text-brand-white"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#contato"
          onClick={() => setMenuOpen(false)}
          className="mt-4 rounded-[var(--radius-brand)] bg-brand-gold px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-brand-black"
        >
          Agendar Aula Experimental
        </Link>
      </nav>
    </header>
  );
}
