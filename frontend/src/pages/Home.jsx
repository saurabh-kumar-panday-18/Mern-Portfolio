import profile from "../assets/profile.jpeg";
import { Link } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center bg-slate-950 text-white px-6 py-12 md:py-20" >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Saurabh
              </span>
            </h1>

            <h2 className="text-lg md:text-xl font-medium text-indigo-400">
              Full Stack Developer (MERN)
            </h2>

            <p className="text-gray-400 max-w-xl text-base md:text-lg">
              I build modern, scalable, and user-focused web applications using
              the MERN stack. Passionate about clean UI, efficient backend
              systems, and continuous learning.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/resume"
                className="px-8 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition font-semibold shadow-lg shadow-indigo-500/30"
              >
                View Resume
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className="relative group">
              {/* Image */}
              <img
                src={profile}
                alt="Saurabh Profile"
                className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-4 border-indigo-500 object-cover shadow-2xl transform group-hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
