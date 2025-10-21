import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header"; // Ruta corregida
import Footer from "./components/Footer"; // Ruta corregida

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Variable para usar en tailwind.config.js
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
    <html lang="es" className="dark"> {/* Aplicamos el modo oscuro aquí */}
      {/* Aplicamos nuestras clases de Tailwind al body.
        Esto solucionará el problema del fondo blanco y la fuente.
      */}
      <body className={`${inter.variable} font-sans bg-background text-foreground`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}