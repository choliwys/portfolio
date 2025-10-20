import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Importación clave
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Carlos Adrianzén — Portafolio de Software",
  description: "Portafolio profesional de Carlos Arturo Adrianzén Flores, estudiante de Ingeniería de Software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Aplicamos la clase 'dark' aquí para un look tech por defecto
    <html lang="es" className="dark">
      <body className={`${inter.variable} font-sans bg-background text-foreground`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}