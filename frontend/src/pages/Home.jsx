import profile from "../assets/profile.jpeg";
import About from "./About";

import { Link } from "react-router-dom";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <> 
    <section className="min-h-screen flex items-center bg-slate-950 text-white px-6 py-12 md:py-20" 
  id="home">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2  gap-12 items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-indigo-500">Saurabh</span>{" "}
          </h1>

          <p className="mt-6 text-gray-400 text-base md:text-lg max-w-md">
            I am a Full-stack Developer (MERN) building efficient, scalable web
            applications. I create intuitive frontends and reliable backends,
            solve problems, learn constantly, and deliver high-quality,
            user-focused digital solutions.{" "}
          </p>

          <Link
            to="/resume"
            className="bg-indigo-500 px-8 py-3 mt-4 rounded-lg font-semibold hover:bg-indigo-600 transition shadow-lg shadow-indigo-500/20"
          >
            Resume
          </Link>
        </div>
        <div className="flex justify-center items-center order-1 md:order-2">
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500 blur-3xl opacity-20 rounded-full"></div>

            <img
              src={profile}
              alt="profile"
              className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-4 border-indigo-500 object-cover shadow-2xl"
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
