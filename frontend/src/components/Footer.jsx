import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-center gap-4">

        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} Saurabh. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl">
          <a href="https://github.com/saurabh-kumar-panday-18" className="hover:text-white transition">
            <FaGithub />
          </a>
          <a href="" className="hover:text-blue-500 transition">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
