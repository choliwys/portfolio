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
      <div className="container mx-auto px-6">
        <section id="projects" className="section-padding">
          <SectionTitle>Proyectos Destacados</SectionTitle>
          <ProjectsGrid />
        </section>

        <div className="my-16 h-px w-full bg-gray-200 dark:bg-gray-800/50"></div>

        <section id="skills" className="section-padding">
          <SectionTitle>Habilidades Técnicas</SectionTitle>
          <Skills />
        </section>

        <div className="my-16 h-px w-full bg-gray-200 dark:bg-gray-800/50"></div>

        <section id="experience" className="section-padding">
          <SectionTitle>Experiencia y Certificados</SectionTitle>
          <ExperienceAndCerts />
        </section>
        
        <div className="my-16 h-px w-full bg-gray-200 dark:bg-gray-800/50"></div>

        <section id="about" className="section-padding">
          <SectionTitle>Sobre Mí</SectionTitle>
          <div className="max-w-4xl mx-auto">
             <About />
          </div>
        </section>

        <div className="my-16 h-px w-full bg-gray-200 dark:bg-gray-800/50"></div>

        <section id="contact" className="section-padding">
          <SectionTitle>Contacto</SectionTitle>
          <ContactForm />
        </section>
      </div>
    </>
  );
}