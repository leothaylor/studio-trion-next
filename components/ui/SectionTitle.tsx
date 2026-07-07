"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionTitleProps {
  label: string;
  children: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  dark?: boolean;
}

/**
 * Cabeçalho de seção padronizado (kicker dourado + título + subtítulo),
 * com revelação suave ao entrar no viewport (Framer Motion).
 */
export default function SectionTitle({
  label,
  children,
  subtitle,
  align = "center",
  dark = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={align === "center" ? "text-center" : "text-left"}
    >
      <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">
        {label}
      </span>
      <h2
        className={`text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-tight tracking-tight ${
          dark ? "text-brand-white" : "text-brand-black"
        }`}
      >
        {children}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-xl text-base ${
            align === "center" ? "" : "mx-0"
          } text-brand-gray`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
