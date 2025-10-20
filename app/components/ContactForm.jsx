// app/components/ContactForm.jsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm();
  const [sent, setSent] = useState(false);

  const onSubmit = async (data) => {
    try {
      console.log("Contact form submit:", data);
      setSent(true);
      reset();
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
      {sent && (
        <div className="p-4 mb-4 text-sm text-green-800 bg-green-100 rounded-lg dark:bg-green-900/50 dark:text-green-300">
          ¡Mensaje enviado con éxito! Gracias por contactarme.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre</label>
          <input 
            {...register("name")} 
            id="name"
            required 
            placeholder="Tu nombre completo" 
            className="w-full bg-white/80 dark:bg-gray-900/80 border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" 
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Correo Electrónico</label>
          <input 
            {...register("email")} 
            id="email"
            required 
            type="email" 
            placeholder="tu.correo@ejemplo.com" 
            className="w-full bg-white/80 dark:bg-gray-900/80 border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" 
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensaje</label>
          <textarea 
            {...register("message")} 
            id="message"
            required 
            rows="5" 
            placeholder="Escribe tu mensaje aquí..." 
            className="w-full bg-white/80 dark:bg-gray-900/80 border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" 
          />
        </div>
        <button 
          type="submit" 
          className="w-full px-6 py-3 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-primary-hover transition-all transform hover:scale-105"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
}