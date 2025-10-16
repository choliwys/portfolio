// components/Hero.jsx
"use client";

import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900"
            >
              Carlos Arturo Adrianzén
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-lg text-gray-600 max-w-xl mx-auto md:mx-0"
            >
              Estudiante de <strong>Ingeniería de Software</strong> (8.º ciclo, Quinto Superior) con pasión por el desarrollo de soluciones empresariales, la gestión de datos y la arquitectura de software.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a href="#projects" className="px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow-md hover:bg-sky-700 transition-transform hover:scale-105">
                Ver Proyectos
              </a>
              <a href="#contact" className="px-6 py-3 bg-white text-sky-600 font-semibold border-2 border-sky-600 rounded-lg hover:bg-gray-100 transition-transform hover:scale-105">
                Contactar
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
            <img 
              src="/images/Carlos.png" 
              alt="Foto de perfil de Carlos Adrianzén" 
              className="w-3/4 md:w-full max-w-sm rounded-full shadow-2xl border-4 border-white"
            />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
        >
          <FaArrowDown className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}