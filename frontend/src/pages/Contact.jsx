import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  console.log("Form submitted:", formData);
    alert("Message sent!");
      
    
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-slate-950 text-white px-6 md:px-12 lg:px-24 py-16 md:py-24 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left side - Text */}
        <div className="space-y-8 md:space-y-10">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-slate-700/70">
            CONTACT
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
            I would love to hear about your project and how I could help. Please fill the form, and I'll get back to you as soon as possible.
          </p>
        </div>

        {/* Right side - Form */}
        <div className="space-y-10 md:space-y-12">
          
          <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
            {/* Name */}

            <div className="group">
              <label className="block text-sm font-medium text-gray-500 mb-2 group-focus-within:text-indigo-400 transition-colors">
                NAME
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-slate-700 focus:border-indigo-500 outline-none pb-3 text-lg text-gray-200 placeholder-gray-600 transition-colors duration-300"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-500 mb-2 group-focus-within:text-indigo-400 transition-colors">
                EMAIL
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-slate-700 focus:border-indigo-500 outline-none pb-3 text-lg text-gray-200 placeholder-gray-600 transition-colors duration-300"
                placeholder="Enter your email"
              />
            </div>

            {/* Message */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-500 mb-2 group-focus-within:text-indigo-400 transition-colors">
                MESSAGE
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full bg-transparent border-b-2 border-slate-700 focus:border-indigo-500 outline-none pb-3 text-lg text-gray-200 placeholder-gray-600 resize-none transition-colors duration-300"
                placeholder="Enter your message"
              />
            </div>
            {/* Submit Button */}
            <div className="flex justify-end pt-6">
              <button 
                type="submit"
                className="group relative px-10 py-4 bg-transparent border-2 border-indigo-600 text-indigo-400 font-medium rounded-full overflow-hidden hover:bg-indigo-600 hover:text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] active:scale-95"
              >
                <span className="relative z-10">SEND MESSAGE</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;