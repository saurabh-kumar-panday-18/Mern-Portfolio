import { useState } from "react";
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollAndClose = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 w-full bg-slate-900 text-white border-b border-gray-800 z-50 shadow-md">
      <div className="flex justify-between items-center px-6 py-4 md:py-5">
        {/* Logo + Name */}
        <div
          className="flex items-center gap-3 md:gap-4 cursor-pointer group"
          onClick={() => scrollAndClose("home")}
        >
          <img
            src={logo} 
            alt="Saurabh Logo"
            className="h-9 w-9 md:h-10 md:w-10 object-cover rounded-full 
                       ring-2 ring-indigo-500/40 transition-all duration-300
                       group-hover:ring-indigo-500/60 group-hover:scale-105"
          />
          <h1 className="text-xl md:text-2xl font-bold text-indigo-400 
                         transition-colors duration-300 group-hover:text-indigo-300">
            Saurabh
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollAndClose("home")}
            className="hover:text-indigo-400 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollAndClose("about")}
            className="hover:text-indigo-400 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollAndClose("skills")}
            className="hover:text-indigo-400 transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollAndClose("projects")}
            className="hover:text-indigo-400 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollAndClose("contact")}
            className="hover:text-indigo-400 transition-colors"
          >
            Contact
          </button>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl focus:outline-none"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-slate-800 border-t border-gray-700 py-6 px-6 flex flex-col items-center space-y-5">
          <button
            onClick={() => scrollAndClose("home")}
            className="w-full text-center py-3 hover:bg-slate-700 rounded-md transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollAndClose("about")}
            className="w-full text-center py-3 hover:bg-slate-700 rounded-md transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollAndClose("skills")}
            className="w-full text-center py-3 hover:bg-slate-700 rounded-md transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollAndClose("projects")}
            className="w-full text-center py-3 hover:bg-slate-700 rounded-md transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollAndClose("contact")}
            className="w-full text-center py-3 hover:bg-slate-700 rounded-md transition-colors"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;