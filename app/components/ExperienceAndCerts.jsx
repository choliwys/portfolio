// components/ExperienceAndCerts.jsx

import { FaBriefcase, FaCertificate } from "react-icons/fa";

export default function ExperienceAndCerts() {
  const experiences = [
    {
      company: "McDonald's",
      role: "Atención al Cliente",
      period: "Mar 2024 - Jul 2024",
      desc: "Desarrollé habilidades de organización, trabajo en equipo y resolución de problemas bajo presión en un entorno dinámico."
    },
    {
      company: "Bembos",
      role: "Atención al Cliente",
      period: "Jul 2023 - Sep 2023",
      desc: "Fortalecí mi capacidad de trabajo en equipo y atención al detalle en un entorno de alta demanda, manejando caja y control de pedidos."
    }
  ];

  const certifications = [
    { name: "Excel Skills for Business: Intermediate", issuer: "Macquarie University" },
    { name: "Blockchain Basics", issuer: "University at Buffalo" },
    { name: "Scrum Fundamentals Certified", issuer: "SCRUMstudy" }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-12">
      {/* Experiencia */}
      <div>
        <h3 className="flex items-center gap-3 text-2xl font-bold mb-6">
          <FaBriefcase className="text-sky-600" />
          Experiencia
        </h3>
        <div className="space-y-6 border-l-2 border-gray-200 pl-6">
          {experiences.map(exp => (
            <div key={exp.company}>
              <p className="font-semibold text-gray-800">{exp.role} - <span className="font-normal">{exp.company}</span></p>
              <p className="text-sm text-gray-500 mb-1">{exp.period}</p>
              <p className="text-sm text-gray-600">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Certificados */}
      <div>
        <h3 className="flex items-center gap-3 text-2xl font-bold mb-6">
          <FaCertificate className="text-sky-600" />
          Certificados
        </h3>
        <ul className="space-y-3">
          {certifications.map(cert => (
            <li key={cert.name} className="bg-white p-4 rounded-md shadow-sm">
              <p className="font-semibold text-gray-800">{cert.name}</p>
              <p className="text-sm text-gray-500">{cert.issuer}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}