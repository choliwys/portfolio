"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Efecto para detectar el scroll y cambiar el estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    // Limpieza al desmontar el componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#projects", text: "Proyectos" },
    { href: "#skills", text: "Habilidades" },
    { href: "#experience", text: "Experiencia" },
    { href: "#contact", text: "Contacto" },
  ];

  // Componente interno para los enlaces de navegación de escritorio
  const NavLink = ({ href, text }) => (
    <a href={href} className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium">
      {text}
    </a>
  );

  return (
    <>
      {/* Contenedor principal del header, se ajusta con el scroll */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${hasScrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
              hasScrolled 
                ? 'bg-card/70 backdrop-blur-xl shadow-lg border-white/10' 
                : 'bg-transparent border-transparent'
            }`}
          >
            {/* Logo o Nombre */}
            <Link href="/" className="font-bold text-xl text-foreground">
              Carlos A. Adrianzén
            </Link>

            {/* Navegación de Escritorio */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => <NavLink key={link.href} {...link} />)}
            </nav>

            {/* Iconos y CV para Escritorio */}
            <div className="hidden md:flex items-center gap-6">
              <a href="https://github.com/choliwys" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><FaGithub size={22} /></a>
              <a href="https://www.linkedin.com/in/arturo-adrianzen/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><FaLinkedin size={22} /></a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-primary text-primary-foreground font-bold rounded-full text-sm transition-transform transform hover:scale-105">
                Ver CV
              </a>
            </div>

            {/* Botón de Menú para Móvil */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-foreground z-50 p-2">
                {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Menú Overlay para Móvil con Animación */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-40 bg-background/90 backdrop-blur-xl flex flex-col items-center justify-center space-y-8"
          >
            <nav className="flex flex-col items-center space-y-6">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-3xl text-foreground font-bold">
                  {link.text}
                </a>
              ))}
            </nav>
            <div className="flex flex-col items-center space-y-8 pt-8 w-full">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full text-lg w-4/5 text-center">
                Descargar CV
              </a>
              <div className="flex justify-center gap-8">
                <a href="https://github.com/choliwys" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground"><FaGithub size={32} /></a>
                <a href="https://www.linkedin.com/in/arturo-adrianzen/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground"><FaLinkedin size={32} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}