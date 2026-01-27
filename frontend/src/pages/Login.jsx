import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

import { useNavigate, Link } from "react-router-dom";

const Login = ({ setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  
const submit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(`${BASE_URL}/api/auth/login`, {
      email,
      password,
    });

    if (res.data.message === "Login success") {
      localStorage.setItem("isLogin", "true");
      setIsLogin(true);
      navigate("/");
    }
  } catch (error) {
    alert("Invalid email or password");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <form
        onSubmit={submit}
        className="w-full max-w-md bg-slate-800 p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-400 mb-6">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 rounded bg-slate-900 text-white border border-slate-700"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 rounded bg-slate-900 text-white border border-slate-700"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-indigo-500 py-2 rounded font-semibold">
          Login
        </button>

        <p className="text-sm text-center text-gray-400 mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-indigo-400">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
