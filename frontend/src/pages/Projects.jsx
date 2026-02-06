

const projects = [
  {
    title: "Portfolio Website",
    desc: "Modern personal portfolio showcasing skills, projects and contact details.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/saurabh-kumar-panday-18",
    live: "#",
  },
  {
    title: "ZerodhaClone",
    desc: "Secure login & signup system with JWT authentication and MongoDB.",
    tech: [ "Express", "React", "Node.js"],
    github: "https://github.com/saurabh-kumar-panday-18",
    live: "https://zerodha-clone-project-zbue.vercel.app/",
  },
  {
    title: "ZerodhaClone Watchlist",
    desc: "Stay updated with real-time market moves. Create multiple personalized watchlists to track your favorite stocks, indices, and ETFs seamlessly.",
    tech: ["React", "Node.js"],
    github: "https://github.com/saurabh-kumar-panday-18",
    live: "https://zerodha-clone-project-akam.vercel.app/",
  },

   {
    title: "Simple Calculator",
    desc: "A calculator project is a foundational software development project designed to simulate a handheld calculator, allowing users to perform arithmetic or scientific calculations on a computer or mobile device.",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    github: "https://github.com/saurabh-kumar-panday-18",
    live: "https://code-alpha-calcultor.vercel.app/",
  },

   {
    title: "Restaurant",
    desc: "captures the essence of a dining experience in a few sentences, highlighting its unique cuisine, inviting atmosphere, and signature dishes",
    tech: ["React", "HTML", "CSS","JAVASCRIPT"],
    github: "https://github.com/saurabh-kumar-panday-18",
    live: "https://resturant-project-ashy.vercel.app/",
  },

   {
    title: "Simple Portfolio",
    desc: "A portfolio website is a curated online showcase of your best professional work, skills, and experience, acting as a dynamic, personal brand hub",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    github: "https://github.com/saurabh-kumar-panday-18",
    live: "https://code-alpha-portfolio-rho.vercel.app/",
  },

  {
    title: "Ecommerce Shoping Website ",
    desc: "A great restaurant description captures the essence of a dining experience in a few sentences, highlighting its unique cuisine, inviting atmosphere, and signature dishes",
    tech: ["REACT", "NODEJS", "EXPRESS","BOOTSTRAP","GIT","JAVASCRIPT", "CSS"],
    github: "https://github.com/saurabh-kumar-panday-18",
    live: "https://react-project-nmi4.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section className="py-16 md:py-20 bg-slate-950 text-white px-6" id="projects">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-indigo-400">
          Projects
        </h1>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          A selection of projects demonstrating my skills in full-stack web development.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6
                       hover:border-indigo-500/50 hover:shadow-xl
                       hover:shadow-indigo-500/10 transition-all duration-300"
          >

            {/* Title */}
            <h2 className="text-xl font-semibold mb-2">
              {project.title}
            </h2>

  
            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              {project.desc}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs bg-slate-800 text-indigo-300
                             px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center border border-indigo-500
                           text-indigo-400 py-2 rounded-lg
                           hover:bg-indigo-500 hover:text-white
                           transition"
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-indigo-500 py-2 rounded-lg
                           hover:bg-indigo-600 transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>


    </section>
  );
};

export default Projects;
