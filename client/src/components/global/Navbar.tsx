import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isAuthenticatedAtom, userDetailsAtom } from "../../recoil/atom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isAuthenticated = useRecoilValue(isAuthenticatedAtom);
  const userDetails = useRecoilValue(userDetailsAtom);
  const setIsAuthenticated = useSetRecoilState(isAuthenticatedAtom);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <header className="bg-gradient-to-r from-[#3d2659] to-[#0c2856] text-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        <Link to="/" className="text-2xl font-bold tracking-wide">
          Uni-Guide
        </Link>


        <div className="hidden md:flex items-center gap-8">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="hover:text-blue-300 transition">Dashboard</Link>
              <Link to="/classifications" className="hover:text-blue-300 transition">Classifications</Link>
            </>
          ) : (
            <Link to="/" className="hover:text-blue-300 transition">Home</Link>
          )}
          <Link to="/about" className="hover:text-blue-300 transition">About</Link>
        </div>


        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <span className="font-semibold">{userDetails.username}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-full bg-gradient-to-br from-[#00a6ff] to-red-500 hover:opacity-90 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/register"
                className="px-4 py-2 bg-gradient-to-br from-[#00a6ff] to-red-500 rounded-full hover:opacity-90 transition"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-[#0c2856] transition"
              >
                Log In
              </Link>
            </>
          )}
        </div>


        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>


      {menuOpen && (
        <div className="md:hidden bg-[#3d2659] px-4 py-4 space-y-4">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" onClick={() => setMenuOpen(false)} className="block">Dashboard</Link>
              <Link to="/classifications" onClick={() => setMenuOpen(false)} className="block">Classifications</Link>
            </>
          ) : (
            <Link to="/" onClick={() => setMenuOpen(false)} className="block">Home</Link>
          )}
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block">About</Link>
          <div className="border-t border-gray-500 pt-4">
            {isAuthenticated ? (
              <>
                <p className="mb-2 font-semibold">{userDetails.username}</p>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    handleLogout();
                  }}
                  className="w-full px-4 py-2 bg-gradient-to-br from-[#00a6ff] to-red-500 rounded-full"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full px-4 py-2 bg-gradient-to-br from-[#00a6ff] to-red-500 rounded-full text-center mb-2"
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full px-4 py-2 border border-white rounded-full text-center"
                >
                  Log In
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;       
