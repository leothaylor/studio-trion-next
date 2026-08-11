import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const SOCIAL_PREVIEW_IMAGE =
  "https://leothaylor.github.io/studio-trion-next/images/studio-trion-whatsapp-preview.jpg";

export const metadata: Metadata = {
  title: "Studio Trion | Jiu-Jitsu, Boxe e Muay Thai | Anil, Rio de Janeiro",
  description:
    "Academia de artes marciais no Anil, Rio de Janeiro. Jiu-Jitsu, Boxe e Muay Thai para todos os níveis. Agende sua aula experimental.",
  openGraph: {
    title: "Studio Trion | Jiu-Jitsu, Boxe e Muay Thai | Anil, Rio de Janeiro",
    description:
      "Academia de artes marciais no Anil, Rio de Janeiro. Jiu-Jitsu, Boxe e Muay Thai para todos os níveis. Agende sua aula experimental.",
    url: "https://leothaylor.github.io/studio-trion-next/",
    siteName: "Studio Trion",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: SOCIAL_PREVIEW_IMAGE,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Studio Trion | Jiu-Jitsu, Boxe e Muay Thai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Trion | Jiu-Jitsu, Boxe e Muay Thai | Anil, Rio de Janeiro",
    description:
      "Academia de artes marciais no Anil, Rio de Janeiro. Jiu-Jitsu, Boxe e Muay Thai para todos os níveis. Agende sua aula experimental.",
    images: [
      {
        url: SOCIAL_PREVIEW_IMAGE,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Studio Trion | Jiu-Jitsu, Boxe e Muay Thai",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${playfair.variable}`}>
      <body>
        <SmoothScroll />
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
