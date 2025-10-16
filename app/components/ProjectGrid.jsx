// components/ProjectsGrid.jsx

import { projects } from "../lib/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map(p => <ProjectCard key={p.id} project={p} />)}
    </div>
  );
}