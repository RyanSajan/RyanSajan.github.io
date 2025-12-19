import React from 'react';

const projectsData = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS to showcase projects.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS to showcase projects.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS to showcase projects.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS to showcase projects.",
    tech: ["React", "Tailwind", "Framer Motion",],
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS to showcase projects.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS to showcase projects.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="w-full min-h-screen relative bg-black text-white transition-all py-20">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full blur-[100px] bg-gradient-to-r from-[#1e3c72] to-[#2a5298] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full blur-[100px] bg-gradient-to-r from-[#1e3c72] to-[#2a5298] opacity-30 animate-pulse delay-1000"></div>
      </div>

      {/* Section Heading */}
      <h2 className="pb-10 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center text-transparent bg-clip-text text-8xl sm:text-5xl mb-6 bg-linear-to-r from-indigo-400 to-indigo-500 relative z-10">
        My Projects
      </h2>

      {/* Projects Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 sm:px-12">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300 flex flex-col justify-between"
          >
            <h3 className="text-xl font-bold mb-2 text-indigo-400">{project.title}</h3>
            <p className="text-gray-300 flex-1">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-indigo-700 text-indigo-200 text-sm px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="mt-4 inline-block text-indigo-500 hover:text-indigo-400 font-semibold"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
