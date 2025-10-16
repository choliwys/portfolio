// app/page.jsx

import Hero from "./components/Hero";
import ProjectsGrid from "./components/ProjectGrid";
import Skills from "./components/Skills";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import ExperienceAndCerts from "./components/ExperienceAndCerts"; // Importa el nuevo componente

export default function Home() {
  return (
    <main>
      <Hero />

      <div className="container mx-auto px-6 space-y-20 mt-16">
        <section id="projects">
          <h2 className="text-3xl font-bold text-center mb-8">Proyectos Destacados</h2>
          <ProjectsGrid />
        </section>

        <section id="skills">
          <h2 className="text-3xl font-bold text-center mb-8">Habilidades Técnicas</h2>
          <Skills />
        </section>
        
        {/* Nueva Sección de Experiencia y Certificados */}
        <section id="experience">
           <ExperienceAndCerts />
        </section>

        <section id="about">
          <h2 className="text-3xl font-bold text-center mb-8">Sobre Mí</h2>
          <div className="max-w-4xl mx-auto">
             <About />
          </div>
        </section>

        <section id="contact">
          <h2 className="text-3xl font-bold text-center mb-8">Contacto</h2>
          <div className="flex justify-center">
            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
}