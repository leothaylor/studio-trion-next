import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "gold" | "outline" | "gold-outline" | "whatsapp";
type Size = "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  block?: boolean;
  external?: boolean;
  type?: "button" | "submit";
  className?: string;
  ariaLabel?: string;
}

const base =
  "group inline-flex items-center justify-center gap-2 rounded-[var(--radius-brand)] border-2 px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-all duration-300 will-change-transform hover:-translate-y-0.5 active:translate-y-0";

const variants: Record<Variant, string> = {
  gold: "border-brand-gold bg-brand-gold text-brand-black hover:bg-brand-gold-dark hover:border-brand-gold-dark hover:shadow-[0_8px_24px_rgba(242,203,0,0.30)]",
  outline:
    "border-brand-white bg-transparent text-brand-white hover:bg-brand-white hover:text-brand-black",
  "gold-outline":
    "border-brand-gold bg-transparent text-brand-gold hover:bg-brand-gold hover:text-brand-black",
  whatsapp:
    "border-[#25D366] bg-[#25D366] text-white hover:bg-[#1ebe5d] hover:border-[#1ebe5d]",
};

const sizes: Record<Size, string> = {
  md: "",
  lg: "px-9 py-4 text-base",
};

export default function Button({
  children,
  href,
  variant = "gold",
  size = "md",
  block = false,
  external = false,
  type = "button",
  className = "",
  ariaLabel,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${
    block ? "w-full" : ""
  } ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={cls}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }

    if (href.startsWith("#")) {
      return (
        <a
          href={href}
          className={cls}
          aria-label={ariaLabel}
          onClick={(event) => {
            event.preventDefault();
            const target = document.querySelector(href);
            if (target) {
              target.scrollIntoView({ behavior: "smooth", block: "start" });
              window.history.replaceState(null, "", href);
            }
          }}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
