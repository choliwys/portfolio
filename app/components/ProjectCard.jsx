// app/components/ProjectCard.jsx
import Link from "next/link";
import { FaGithub, FaArrowRight } from "react-icons/fa";

const MobileCollageView = ({ images, alt }) => (
  <div className="aspect-video w-full p-4 flex items-center justify-center gap-2">
    {images.slice(0, 3).map((src, index) => (
      <img
        key={`${src}-${index}`} // Corregido
        src={src}
        alt={`${alt} screenshot ${index + 1}`}
        className="w-1/3 rounded-md shadow-lg object-cover transition-all duration-300 group-hover:rotate-0 group-hover:scale-105"
        style={{
          transform: `rotate(${index === 0 ? '-10deg' : index === 2 ? '10deg' : '0deg'}) scale(${index === 1 ? '1.1' : '1'})`,
          zIndex: index === 1 ? 10 : 1,
        }}
      />
    ))}
  </div>
);

export default function ProjectCard({ project }) {
  const isMobileProject = project.cover.length > 1;

  return (
    <div className="group relative rounded-2xl border border-white/10 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-muted/10">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/50 to-accent/50 opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative rounded-2xl overflow-hidden h-full flex flex-col">
        {isMobileProject ? (
          <MobileCollageView images={project.cover} alt={project.title} />
        ) : (
          <img src={project.cover[0]} alt={project.title} className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105" />
        )}
        <div className="p-8 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
          <p className="text-base text-muted-foreground flex-grow mb-6">{project.short}</p>
          
          <div className="flex flex-wrap gap-3">
            {project.stack.map(tech => (
              <span key={tech} className="text-sm font-semibold bg-muted text-muted-foreground px-4 py-1.5 rounded-full">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex justify-between items-center">
            <Link href={`#`} className="text-md font-bold text-primary hover:underline flex items-center gap-2">
              Ver Estudio de Caso <FaArrowRight />
            </Link>
            <a href={project.repo} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub Repository">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}