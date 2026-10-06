import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "My space where i showcase my work, built with React and Tailwind.",
    tags: ["React", "Tailwind"],
    image: "/picture/Screenshot of portfolio.png",
    github: "https://github.com/Ternguboss/new-portfolio-website",
    live: "#home",
  },
  {
    id: "next-project",
    title: "Next project",
    description: "One line on the problem it solves and who it helps.",
    tags: ["Node.js"],
    image: null,
    github: "https://github.com/Ternguboss",
    live: "#",
  },
  {
    id: "data-dashboard",
    title: "Data dashboard",
    description: "Turning raw numbers into something you can act on.",
    tags: ["Power BI", "Excel"],
    image: null,
    github: "https://github.com/Ternguboss",
    live: "#",
  },
];

const Project = () => {
  return (
    <section id="project" className="py-16 max-w-6xl mx-auto px-6">
      
      {/* Header */}
      <div 
        className="mb-8"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Personal Projects
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className="group bg-[#131b2e] border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-500 shadow-lg hover:-translate-y-2 hover-glow"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay={idx * 150}
          >
            <div>
              {/* Image / Thumbnail placeholder box */}
              <div className="w-full h-44 rounded-xl overflow-hidden bg-[#0d1322] border border-slate-800 relative flex items-center justify-center mb-5 group-hover:border-indigo-500/30 transition-colors">
                
                {/* Diagonal line grid pattern */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, #4f46e5 0, #4f46e5 1px, transparent 0, transparent 50%)`,
                    backgroundSize: '16px 16px'
                  }}
                />

                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl opacity-90 group-hover:opacity-100 group-hover:scale-108 transition-all duration-700"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                ) : null}

                {!project.image && (
                  <span className="text-slate-500 text-xs font-mono tracking-wide z-10 group-hover:text-indigo-300 transition-colors">
                    project screenshot
                  </span>
                )}

                {/* Hover overlay action buttons */}
                <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition-opacity duration-300 backdrop-blur-xs">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-indigo-400 transition-all duration-200 hover:scale-110"
                    title="View GitHub Repository"
                  >
                    <FaGithub className="text-base" />
                  </a>
                  <a
                    href={project.live}
                    className="p-2.5 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 transition-all duration-200 hover:scale-110 shadow-md"
                    title="View Live Demo"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-indigo-400 font-medium bg-indigo-950/40 px-2.5 py-1 rounded-md border border-indigo-900/40 transition-colors group-hover:border-indigo-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Project;