// app/page.jsx
import Hero from "./components/Hero";
import ProjectsGrid from "./components/ProjectGrid";
import Skills from "./components/Skills";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import ExperienceAndCerts from "./components/ExperienceAndCerts";
import SectionTitle from "./components/SectionTitle";

export default function Home() {
  return (
    <div className="container mx-auto px-6">
      <Hero />
      <div className="space-y-32 md:space-y-48">
        <section id="projects">
          <SectionTitle>Proyectos que He Construido</SectionTitle>
          <ProjectsGrid />
        </section>

        <section id="skills">
          <SectionTitle>Mi Arsenal de Tecnologías</SectionTitle>
          <Skills />
        </section>

        <section id="experience">
          <SectionTitle>Mi Trayectoria Profesional</SectionTitle>
          <ExperienceAndCerts />
        </section>
        
        <section id="about">
          <SectionTitle>Un Poco Sobre Mí</SectionTitle>
          <About />
        </section>

        <section id="contact" className="pb-32 md:pb-48">
          <SectionTitle>Trabajemos Juntos</SectionTitle>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}