
import resume from "../assets/resume.pdf";

const Resume = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold">
            My <span className="text-indigo-500">Resume</span>
          </h1>
          <p className="text-gray-400 mt-3">
            View or download my resume
          </p>
        </div>

        {/* Resume Card */}
        <div className="bg-slate-900 rounded-xl shadow-lg overflow-hidden border border-slate-800">
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 p-4 bg-slate-800">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-500 hover:bg-indigo-600 px-6 py-2 rounded-lg font-semibold text-center transition"
            >
              View Fullscreen
            </a>

            <a
              href={resume}
              download
              className="border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white px-6 py-2 rounded-lg font-semibold text-center transition"
            >
              Download Resume
            </a>
          </div>

          {/* PDF Preview */}
          <div className="w-full h-[80vh]">
            <iframe
              src={resume}
              title="Resume PDF"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
