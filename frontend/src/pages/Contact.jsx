import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    await axios.post(`${BASE_URL}/api/contact`, {
      name,
      email,
      message,
    });

    alert("Message sent successfully");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <form
        onSubmit={submitHandler}
        className="bg-slate-800 p-8 rounded-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-400 mb-6">
          Contact Me
        </h2>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 px-4 py-2 rounded bg-slate-900 text-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-4 px-4 py-2 rounded bg-slate-900 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          placeholder="Your Message"
          className="w-full mb-4 px-4 py-2 rounded bg-slate-900 text-white"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button className="w-full bg-indigo-500 py-2 rounded font-semibold">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
