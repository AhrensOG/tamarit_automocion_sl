import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "E.J. TAMARIT AUTOMOCION | Taller Mecánico en Valencia (Algirós)",
  description:
    "Tu taller de confianza en Valencia: Mecánica rápida, cambio de aceite, filtros, frenos y revisiones Pre-ITV. Calidad y servicio experto en C/ Sants Just i Pastor 121.",
  keywords: [
    "Taller Mecánico Valencia",
    "Mecánica Rápida Algirós",
    "Cambio Aceite Valencia",
    "Pre-ITV Valencia",
    "Frenos y Ruedas",
    "E.J. TAMARIT AUTOMOCION",
  ],
  authors: [{ name: "E.J. TAMARIT AUTOMOCION" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
