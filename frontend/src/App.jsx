import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Resume from "./pages/Resume";


function App() {
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("isLogin") === "true",
  );

  return (

   
    <BrowserRouter>
  

      <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />

      <Routes>
        {/* PUBLIC */}
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/signup" element={<Signup />} />

        {/* PROTECTED */}
        <Route
          path="/"
          element={isLogin ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/about"
          element={isLogin ? <About /> : <Navigate to="/login" />}
        />
        <Route
          path="/skills"
          element={isLogin ? <Skills /> : <Navigate to="/login" />}
        />
        <Route
          path="/projects"
          element={isLogin ? <Projects /> : <Navigate to="/login" />}
        />
        <Route
          path="/contact"
          element={isLogin ? <Contact /> : <Navigate to="/login" />}
        />

        <Route
  path="/resume"
  element={isLogin ? <Resume /> : <Navigate to="/login" />}
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
