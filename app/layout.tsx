import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header"; // Usamos el alias @ para una ruta más limpia
import Footer from "@/app/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Carlos Adrianzén — Portafolio de Software",
  description: "Portafolio profesional de Carlos Arturo Adrianzén Flores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark"> {/* Aplicamos el modo oscuro por defecto */}
      <body className={`${inter.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}