const About = () => {
  return (
   <section 
      className="py-16 md:py-20 bg-slate-950 text-white px-6" 
      id="about"
    > 
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-500 mb-8 text-center md:text-left">
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              I am a <span className="text-indigo-400">BCA student</span> and a passionate{" "}
              <span className="text-indigo-400 font-semibold">Full Stack Web Developer</span>.
              I love working with MERN stack and building real-world projects.
              My focus is on clean UI, optimized code, and responsive design.
            </p>

            <p className="text-gray-300 text-base leading-relaxed">
              My focus is on writing clean, optimized code and ensuring that every project I build 
              is fully responsive and user-friendly. I'm constantly learning new technologies to 
              stay updated with the latest industry standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
