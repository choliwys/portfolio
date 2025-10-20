// components/Header.jsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#projects", text: "Proyectos" },
    { href: "#skills", text: "Habilidades" },
    { href: "#about", text: "Sobre mí" },
    { href: "#contact", text: "Contacto" },
  ];

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const NavContent = () => (
    <>
      {navLinks.map((link, i) => (
        <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium">
          {link.text}
        </a>
      ))}
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-5 py-2 border-2 border-primary text-primary rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300">
        CV
      </a>
    </>
  );

  return (
    <header className="sticky top-4 z-50 container mx-auto px-4">
      <div className="w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg rounded-2xl shadow-lg flex items-center justify-between py-3 px-6 border border-white/50 dark:border-gray-800/50">
        <Link href="/" className="font-bold text-xl text-foreground">
          Carlos A. Adrianzén
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <NavContent />
          <div className="w-px h-6 bg-gray-200 dark:bg-gray-700"></div>
          <a href="https://github.com/choliwys" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary dark:hover:text-primary transition-colors"><FaGithub size={22} /></a>
          <a href="https://www.linkedin.com/in/arturo-adrianzen/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary dark:hover:text-primary transition-colors"><FaLinkedin size={22} /></a>
        </nav>

        {/* Mobile Nav Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground z-50">
            {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-xl rounded-2xl absolute top-full left-0 w-full mt-2 flex flex-col items-center gap-4 py-8 border border-white/50 dark:border-gray-800/50"
          >
            <NavContent />
            <div className="flex gap-6 mt-4">
              <a href="https://github.com/choliwys" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary"><FaGithub size={26} /></a>
              <a href="https://www.linkedin.com/in/arturo-adrianzen/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary"><FaLinkedin size={26} /></a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}