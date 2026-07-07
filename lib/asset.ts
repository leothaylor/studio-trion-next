/**
 * Prefixo de assets para funcionar sob o basePath do GitHub Pages
 * (/studio-trion-next) em produção e na raiz durante o dev.
 * Usar em <img src>, backgrounds CSS inline e no iframe do mapa.
 */
export const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/studio-trion-next" : "";

export const asset = (path: string) => `${BASE_PATH}${path}`;
