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
    <>
      <Hero />
      <div className="space-y-40">
        <section id="projects" className="container mx-auto px-6">
          <SectionTitle>Proyectos que He Construido</SectionTitle>
          <ProjectsGrid />
        </section>

        <section id="skills" className="container mx-auto px-6">
          <SectionTitle>Mi Arsenal de Tecnologías</SectionTitle>
          <Skills />
        </section>

        <section id="experience" className="container mx-auto px-6">
          <SectionTitle>Mi Trayectoria Profesional</SectionTitle>
          <ExperienceAndCerts />
        </section>
        
        <section id="about" className="container mx-auto px-6">
          <SectionTitle>Un Poco Sobre Mí</SectionTitle>
          <About />
        </section>

        <section id="contact" className="container mx-auto px-6 pb-40">
          <SectionTitle>Trabajemos Juntos</SectionTitle>
          <ContactForm />
        </section>
      </div>
    </>
  );
}