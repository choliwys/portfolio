import "./globals.css";
import { Inter } from 'next/font/google';
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

export const metadata = {
  title: "Carlos Adrianzén — Portafolio de Software",
  description: "Portafolio profesional de Carlos Arturo Adrianzén Flores, estudiante de Ingeniería de Software."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark"> {/* Forzamos el modo oscuro por defecto para un look tech */}
      <body className={`${inter.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}