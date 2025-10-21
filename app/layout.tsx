import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Esta importación es correcta

// --- LA CORRECCIÓN ESTÁ AQUÍ ---
// Las rutas relativas correctas, ya que 'components' está en el mismo nivel que 'layout.tsx'
import Header from "./components/Header";
import Footer from "./components/Footer";

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
        === LA PRUEBA DE FUEGO ===
        He añadido 'bg-black' y 'text-red-500'.
        Si Tailwind funciona, el fondo de tu página se volverá NEGRO y el texto ROJO.
        Esto nos confirmará que el problema de importación está resuelto.
      */}
      <body className={`${inter.variable} font-sans bg-black text-red-500`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}