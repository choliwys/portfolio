// components/Header.jsx

import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <>
      <a href="#projects" className="hover:text-sky-600 transition-colors">Proyectos</a>
      <a href="#skills" className="hover:text-sky-600 transition-colors">Habilidades</a>
      <a href="#about" className="hover:text-sky-600 transition-colors">Sobre mí</a>
      <a href="#contact" className="hover:text-sky-600 transition-colors">Contacto</a>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 border-2 border-sky-600 text-sky-600 rounded-md hover:bg-sky-600 hover:text-white transition-all">
        CV
      </a>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="font-bold text-xl text-gray-800">
          Carlos A. Adrianzén
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          {navLinks}
          <a href="https://github.com/choliwys" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-sky-600"><FaGithub size={20} /></a>
          <a href="https://www.linkedin.com/in/arturo-adrianzen/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-sky-600"><FaLinkedin size={20} /></a>
        </nav>

        {/* Mobile Nav Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full flex flex-col items-center gap-4 py-6 text-gray-700 font-medium">
          {navLinks}
           <div className="flex gap-4 mt-4">
             <a href="https://github.com/choliwys" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-sky-600"><FaGithub size={24} /></a>
             <a href="https://www.linkedin.com/in/arturo-adrianzen/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-sky-600"><FaLinkedin size={24} /></a>
           </div>
        </nav>
      )}
    </header>
  );
}