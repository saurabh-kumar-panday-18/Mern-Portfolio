import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 const submit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(`${BASE_URL}/api/auth/signup`, {
      name,
      email,
      password,
    });

    if (res.data.message === "Signup success") {
      alert("Signup successful");
      navigate("/login");
    }
  } catch (error) {
    alert(error.response?.data?.message || "Signup failed");
  }
};



  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <form className="w-full max-w-md bg-slate-800 p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-center text-indigo-400 mb-6">
          Create Account
        </h2>

        <input
          placeholder="Full Name"
          className="w-full mb-4 px-4 py-2 rounded bg-slate-900 text-white"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 rounded bg-slate-900 text-white"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 rounded bg-slate-900 text-white"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={submit} className="w-full bg-indigo-500 py-2 rounded">
          Signup
        </button>

        <p className="text-center text-sm mt-4 text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-400">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
