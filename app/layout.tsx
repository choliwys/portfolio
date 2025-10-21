import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Carlos Adrianzén — Portafolio",
  description: "Portafolio profesional de Carlos Arturo Adrianzén Flores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      {/*
        Aplicamos las clases directamente al body.
        Esto le dice a Tailwind que use el color de fondo y de texto que definimos.
      */}
      <body className={`${inter.variable} font-sans bg-background text-foreground`}>
        {/* Dejamos solo {children} por ahora para confirmar que la base funciona */}
        {children}
      </body>
    </html>
  );
}