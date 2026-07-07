import type { NextConfig } from "next";

/**
 * Publicação estática no GitHub Pages.
 * O site vive em https://leothaylor.github.io/studio-trion-next/,
 * por isso basePath/assetPrefix apontam para /studio-trion-next em produção.
 */
const isProd = process.env.NODE_ENV === "production";
const repo = "studio-trion-next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  trailingSlash: true,
};

export default nextConfig;
