// components/Hero.jsx
"use client";

import { motion } from "framer-motion";
import { FaArrowDown, FaEye, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <div className="relative w-40 h-40">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-violet-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
            <img 
              src="/images/Carlos.png" 
              alt="Foto de perfil de Carlos Adrianzén" 
              className="relative w-full h-full rounded-full shadow-2xl border-4 border-white/80 dark:border-gray-800/80"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground tracking-tighter"
        >
          Carlos Arturo Adrianzén
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Estudiante de <strong>Ingeniería de Software</strong> apasionado por crear soluciones robustas y elegantes que resuelvan problemas del mundo real.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#projects" className="group flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-primary-hover transition-all transform hover:-translate-y-1 text-lg">
            <FaEye /> Mis Proyectos
          </a>
          <a href="#contact" className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 font-bold border-2 border-gray-200 rounded-full shadow-sm hover:bg-gray-100 hover:border-gray-300 transition-all transform hover:-translate-y-1 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700 text-lg">
            <FaEnvelope /> Contacto
          </a>
        </motion.div>
      </div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <FaArrowDown size={24} />
      </motion.div>
    </section>
  );
}