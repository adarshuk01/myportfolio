import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "../../public/data/projectData";
import { Link } from "react-router-dom";



function Projects() {
  return (
    <section className="py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl lg:text-4xl font-extrabold uppercase">
          My Works
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
        {projects.map((project) => (
          <Link
          to={`/project/${project.id}`}
            key={project.id}
            className="e dark:bg-gray-700 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />

            {/* Card Content */}
            <div className="p-5 flex flex-col h-56">
              <Link to={`/project/${project.id}`} className="text-xl font-bold mb-2 underline">{project.name}</Link>

              {/* Languages */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.languages.map((lang, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium"
                >
                  <ExternalLink size={18} /> Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-medium"
                >
                  <Github size={18} /> Code
                </a>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
