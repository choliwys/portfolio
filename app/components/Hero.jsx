// components/Hero.jsx
"use client";

import { motion } from "framer-motion";
import { FaArrowDown, FaEye, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center bg-transparent">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground"
            >
              Carlos Arturo Adrianzén
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0"
            >
              Estudiante de <strong>Ingeniería de Software</strong> (8.º ciclo, Quinto Superior) con pasión por el desarrollo de soluciones empresariales, la gestión de datos y la arquitectura de software.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a href="#projects" className="group flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary-hover transition-all transform hover:-translate-y-1">
                <FaEye /> Ver Proyectos
              </a>
              <a href="#contact" className="group flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all transform hover:-translate-y-1 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700">
                <FaEnvelope /> Contactar
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative w-3/4 md:w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-violet-500 rounded-full blur-2xl opacity-50"></div>
              <img 
                src="/images/Carlos.png" 
                alt="Foto de perfil de Carlos Adrianzén" 
                className="relative w-full rounded-full shadow-2xl border-4 border-white/80 dark:border-gray-800/80"
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
        >
          <FaArrowDown size={20} />
        </motion.div>
      </div>
    </section>
  );
}