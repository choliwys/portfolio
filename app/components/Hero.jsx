// components/Hero.jsx
"use client";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      >
        <img 
          src="/images/Carlos.png" 
          alt="Foto de perfil de Carlos Adrianzén" 
          className="w-32 h-32 rounded-full shadow-2xl border-4 border-card mb-8"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground"
      >
        Carlos Arturo Adrianzén
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl"
      >
        Estudiante de <strong>Ingeniería de Software</strong> apasionado por crear soluciones robustas y elegantes que resuelvan problemas del mundo real.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
        className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a href="#projects" className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg">
          Ver mis Proyectos
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-muted text-muted-foreground font-bold rounded-full text-lg transition-transform transform hover:scale-105 hover:bg-card">
          Descargar CV
        </a>
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10"
      >
        <FaArrowDown className="text-muted-foreground" size={24} />
      </motion.div>
    </section>
  );
}