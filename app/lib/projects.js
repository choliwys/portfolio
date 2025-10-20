// app/lib/projects.js
export const projects = [
  {
    id: "diligencetech",
    title: "DiligenceTech",
    short: "Plataforma web completa para la gestión de procesos de Due Diligence.",
    stack: ["Angular", "Spring Boot", "Firebase", "MySQL"],
    repo: "https://github.com/choliwys/DiligenceTech",
    cover: ["/images/diligencetech.png"], // Ahora es un array
    details: "..."
  },
  {
    id: "paway",
    title: "PawayApp",
    short: "App móvil nativa para la gestión financiera de microempresas.",
    stack: ["Kotlin", "Spring Boot", "Android Studio", "MySQL"],
    repo: "https://github.com/choliwys/PawayMobileApp",
    cover: [ // ¡Múltiples imágenes para el collage!
      "/images/paway.png", 
      "/images/paway2.png",
      "/images/paway3.png"
    ],
    details: "..."
  }
];