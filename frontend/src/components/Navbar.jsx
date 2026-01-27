import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Navbar = ({ isLogin, setIsLogin }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("isLogin");
    setIsLogin(false);
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 w-full bg-slate-900 text-white border-b border-gray-800 z-50">
      <div className="flex justify-around items-center px-6 py-5">
        <h1 className="text-xl font-bold text-indigo-500">Saurabh</h1>

        {/* DESKTOP */}
        <div className="hidden md:flex space-x-6 items-center">
          {isLogin ? (
            <>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>

              <button
                onClick={logoutHandler}
                className="bg-red-500 px-4 py-1 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="bg-indigo-500 px-4 py-1 rounded">
                Login
              </Link>
              <Link to="/signup" className="border px-4 py-1 rounded">
                Signup
              </Link>
            </>
          )}
        </div>

        {/* MOBILE ICON */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-slate-800 flex flex-col items-center py-4 space-y-4">
          {isLogin ? (
            <>
              <Link to="/" onClick={() => setOpen(false)}>Home</Link>
              <Link to="/about" onClick={() => setOpen(false)}>About</Link>
              <Link to="/skills" onClick={() => setOpen(false)}>Skills</Link>
              <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
              <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
              <button onClick={logoutHandler} className="text-red-400">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
              <Link to="/signup" onClick={() => setOpen(false)}>Signup</Link>
            </>
          )}
        </div>
      )}
    </nav>

  );
  
};

export default Navbar;
