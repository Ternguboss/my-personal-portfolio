import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React.",
    image: "/picture/Screenshot of portfolio.png",
    github: "https://github.com/Ternguboss/new-portfolio-website",
    live: "#",
  },

];

const Project = () => {
  return (
    <section
      id="project"
      className="container mx-auto px-6 py-20"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative overflow-hidden rounded-xl shadow-lg"
          >

            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition duration-500">

              <h3 className="text-white text-xl font-bold">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm mt-2 text-center px-4">
                {project.description}
              </p>

              <div className="flex gap-6 mt-4">

                <a
                  href={project.live}
                  className="px-4 py-2 bg-secondary text-white rounded"
                >
                  Live
                </a>

                <a
                  href={project.github}
                  className="px-4 py-2 border border-white text-white rounded"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Project;