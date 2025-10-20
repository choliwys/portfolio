import "../app/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Carlos Adrianzén — Portafolio",
  description: "Portafolio profesional - Carlos Arturo Adrianzén Flores"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-background text-foreground`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
