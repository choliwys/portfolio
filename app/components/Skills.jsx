// app/components/Skills.jsx

import { FaJava, FaDatabase, FaCode, FaTools, FaAngular, FaHtml5 } from "react-icons/fa";
// Se han corregido los nombres de los íconos
import { SiDotnet, SiKotlin, SiTypescript, SiSpringboot, SiFirebase, SiMysql, SiGithub } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

export default function Skills() {
  const skillsData = [
    {
      category: "Lenguajes de Programación",
      icon: <FaCode className="text-sky-500" />,
      items: [
        { name: "Java", icon: <FaJava /> },
        { name: "C#", icon: <SiDotnet /> },
        { name: "Kotlin", icon: <SiKotlin /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "HTML5", icon: <FaHtml5 /> },
      ],
    },
    {
      category: "Frameworks y Plataformas",
      icon: <FaTools className="text-emerald-500" />,
      items: [
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "Angular", icon: <FaAngular /> },
        { name: "Firebase", icon: <SiFirebase /> },
      ],
    },
    {
      category: "Bases de Datos",
      icon: <FaDatabase className="text-amber-500" />,
      items: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Modelado E-R", icon: null },
        { name: "Diseño Relacional & No-Relacional", icon: null },
      ],
    },
    {
      category: "Herramientas y Otros",
      icon: <FaTools className="text-violet-500" />,
      items: [
        { name: "GitHub", icon: <SiGithub /> },
        { name: "Visual Studio", icon: <DiVisualstudio /> }, // Ícono corregido
        { name: "MySQL Workbench", icon: <SiMysql /> },
        { name: "Power BI", icon: <FaTools /> }, 
        { name: "Excel Avanzado", icon: null },
      ],
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {skillsData.map((skillSection) => (
        <div key={skillSection.category} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{skillSection.icon}</span>
            <h5 className="font-bold text-lg text-gray-800">{skillSection.category}</h5>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillSection.items.map((item) => (
              <span key={item.name} className="flex items-center gap-2 text-sm bg-gray-100 px-3 py-1.5 rounded-full font-medium text-gray-700">
                {item.icon}
                {item.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}