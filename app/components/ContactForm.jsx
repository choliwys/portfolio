"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm();
  const [sent, setSent] = useState(false);

  const onSubmit = async (data) => {
    try {
      // Aquí puedes integrar EmailJS / Formspree. Por ahora solo logueamos.
      console.log("Contact form submit:", data);
      setSent(true);
      reset();
      // Opcional: volver a false tras X segundos
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-xl bg-white p-6 rounded shadow">
      {sent && (
        <div className="p-4 mb-3 text-sm text-green-800 bg-green-50 rounded">
          Mensaje enviado. ¡Gracias!
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 mt-2">
        <input {...register("name")} required placeholder="Nombre" className="w-full border px-3 py-2 rounded" />
        <input {...register("email")} required type="email" placeholder="Correo" className="w-full border px-3 py-2 rounded" />
        <textarea {...register("message")} required rows="4" placeholder="Mensaje" className="w-full border px-3 py-2 rounded" />
        <button type="submit" className="px-4 py-2 bg-sky-600 text-white rounded">Enviar</button>
      </form>
    </div>
  );
}