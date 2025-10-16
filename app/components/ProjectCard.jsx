import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
      <img src={project.cover} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
        <p className="mt-2 text-sm text-gray-600 h-10">{project.short}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map(tech => (
            <span key={tech} className="text-xs font-semibold bg-sky-100 text-sky-800 px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex justify-between items-center">
          <Link href={`/projects/${project.id}`} className="text-sm font-semibold text-sky-600 hover:underline">
            Ver detalles
          </Link>
          <a href={project.repo} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900" aria-label="GitHub Repository">
            <FaGithub size={22} />
          </a>
        </div>
      </div>
    </article>
  );
}