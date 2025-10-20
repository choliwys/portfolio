// app/page.jsx
import Hero from "./components/Hero";
import ProjectsGrid from "./components/ProjectGrid";
import Skills from "./components/Skills";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import ExperienceAndCerts from "./components/ExperienceAndCerts";

export default function Home() {
  return (
    // Hemos eliminado la clase <main> de aquí para ponerla en el layout
    <>
      <Hero />

      <div className="container mx-auto px-6 space-y-24 md:space-y-32 mt-16">
        <section id="projects">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Proyectos Destacados</h2>
          <ProjectsGrid />
        </section>

        <section id="skills">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Habilidades Técnicas</h2>
          <Skills />
        </section>
        
        <section id="experience">
           <ExperienceAndCerts />
        </section>

        <section id="about">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Sobre Mí</h2>
          <div className="max-w-4xl mx-auto">
             <About />
          </div>
        </section>

        <section id="contact" className="pb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Contacto</h2>
          <ContactForm />
        </section>
      </div>
    </>
  );
}