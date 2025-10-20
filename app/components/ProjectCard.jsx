// app/components/ProjectCard.jsx
import Link from "next/link";
import { FaGithub, FaArrowRight } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <article className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl">
      <div className="relative w-full aspect-video overflow-hidden">
        <img src={project.cover} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 h-12">{project.short}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map(tech => (
            <span key={tech} className="text-xs font-semibold bg-sky-100 text-sky-800 px-3 py-1 rounded-full dark:bg-sky-900/50 dark:text-sky-300">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex justify-between items-center">
          <Link href={`#`} className="flex items-center gap-2 text-sm font-semibold text-white bg-primary hover:bg-primary-hover px-4 py-2 rounded-lg transition-all transform hover:scale-105 shadow-md">
            Ver detalles <FaArrowRight />
          </Link>
          <a href={project.repo} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors" aria-label="GitHub Repository">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </article>
  );
}