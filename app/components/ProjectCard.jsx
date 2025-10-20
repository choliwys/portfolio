// app/components/ProjectCard.jsx
import Link from "next/link";
import { FaGithub, FaArrowRight } from "react-icons/fa";

const SingleImageView = ({ src, alt }) => (
  <div className="aspect-video w-full overflow-hidden">
    <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
  </div>
);

const MobileCollageView = ({ images, alt }) => (
  <div className="aspect-video w-full overflow-hidden p-4 bg-slate-200 dark:bg-slate-800/50 flex items-center justify-center gap-3">
    {images.slice(0, 3).map((src, index) => (
      <img
        key={src}
        src={src}
        alt={`${alt} screenshot ${index + 1}`}
        className={`w-1/3 rounded-lg shadow-lg object-cover transition-transform duration-500 group-hover:scale-105 ${
          index === 1 ? 'scale-110 -translate-y-2' : ''
        } group-hover:rotate-${index === 0 ? '-3' : index === 2 ? '3' : '0'}`}
      />
    ))}
  </div>
);

export default function ProjectCard({ project }) {
  const isMobileProject = project.cover.length > 1;

  return (
    <article className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:border-primary/50">
      {isMobileProject ? (
        <MobileCollageView images={project.cover} alt={project.title} />
      ) : (
        <SingleImageView src={project.cover[0]} alt={project.title} />
      )}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
        <p className="text-base text-gray-600 dark:text-gray-300 min-h-[4rem]">{project.short}</p>
        
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map(tech => (
            <span key={tech} className="text-sm font-semibold bg-sky-100 text-sky-800 px-4 py-1.5 rounded-full dark:bg-sky-900/50 dark:text-sky-300">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700/50 flex justify-between items-center">
          <Link href={`#`} className="flex items-center gap-2 text-md font-bold text-white bg-primary hover:bg-primary-hover px-5 py-3 rounded-full transition-all transform hover:scale-105 shadow-md">
            Ver Detalles <FaArrowRight />
          </Link>
          <a href={project.repo} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors" aria-label="GitHub Repository">
            <FaGithub size={28} />
          </a>
        </div>
      </div>
    </article>
  );
}