import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, name: "HTML", color: "group-hover:text-orange-500" },
  { icon: <FaCss3Alt />, name: "CSS", color: "group-hover:text-blue-500" },
  { icon: <FaJs />, name: "JavaScript", color: "group-hover:text-yellow-400" },
  { icon: <FaReact />, name: "React", color: "group-hover:text-cyan-400" },
  { icon: <FaNodeJs />, name: "Node.js", color: "group-hover:text-green-500" },
  { icon: <SiExpress />, name: "Express", color: "group-hover:text-white" },
  { icon: <SiMongodb />, name: "MongoDB", color: "group-hover:text-green-600" },
  {
    icon: <FaBootstrap />,
    name: "Bootstrap",
    color: "group-hover:text-blue-600",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind",
    color: "group-hover:text-sky-400",
  },
];

const Skills = () => {
  return (
    <section className="py-16 md:py-20 bg-slate-950 text-white px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        {/*  Header Text */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {" "}
            Technical  <span className="text-indigo-500">Toolkit</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I specialize in the MERN stack and modern styling libraries to build
            high-performance, beautiful web applications
          </p>
        </div>
        {/*  skill Grid */}

        <div className="grid grid-cols-2 sm:grid-col-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-slate-900 border border-slate-800 p-10 rounded-2xl flex flex-col items-center transition-all duration-300 hover:border-indigo-500/50 hover:-translate-y-2"
            >
              <div
                className={`text-6xl text-slate-600 transition-all duration-300 ${skill.color}`}
              >
                {" "}
                {skill.icon}{" "}
              </div>
              <p className="mt-5 font-medium text-slate-400 group-hover:text-white transition-colors tracking-wide">
                {skill.name}
              </p>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-indigo-500 transition-all duration-500 group-hover:w-full rounded-b-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
