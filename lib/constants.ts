/**
 * Dados e pendências centralizados do Studio Trion.
 * Os campos marcados com TODO NÃO devem ser inventados — aguardam confirmação.
 */

// TODO: substituir pelo número real de WhatsApp (só dígitos, com DDI 55 + DDD).
export const WHATSAPP = "55XXXXXXXXXXX";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP}`;

// TODO: substituir pelo ID real do formulário Formspree (formspree.io) para receber leads.
export const FORMSPREE_ID = "YOUR_FORMSPREE_ID";
export const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;

export const INSTAGRAM_HANDLE = "@studio.trion";
export const INSTAGRAM_URL = "https://instagram.com/studio.trion";

export const ADDRESS = {
  line1: "Estrada do Engenho D'Água nº 1375",
  line2: "Loja 112 — BR Stores",
  line3: "Anil, Rio de Janeiro — RJ",
  cep: "CEP 22765-240",
};

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#modalidades", label: "Modalidades" },
  { href: "#professores", label: "Professores" },
  { href: "#horarios", label: "Horários" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];
