import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Resume from "./pages/Resume";
import Footer from "./components/Footer";


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
  path="/resume"
  element={isLogin ? <Resume /> : <Navigate to="/login" />}
/>
     </Routes>

      <Footer />
    </BrowserRouter>

   
  );
}

export default App;
