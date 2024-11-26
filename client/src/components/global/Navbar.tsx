import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isAuthenticatedAtom, userDetailsAtom } from "../../recoil/atom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isAuthenticated = useRecoilValue(isAuthenticatedAtom);
  const userDetails = useRecoilValue(userDetailsAtom);
  const setIsAuthenticated = useSetRecoilState(isAuthenticatedAtom);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="p-6 bg-gradient-to-r from-[#3d2659] to-[#0c2856] items-center justify-between text-white w-full flex">
      <div className="flex gap-20 items-center">
        <Link className="font-bold md:text-xl text-lg" to="/">
          Uni-Guide
        </Link>
        <div className="md:flex hidden gap-6">
          <Link to="/">Home</Link>
          {isAuthenticated && <Link to="/classifications">Classifications</Link>}
          <Link to="/about">About</Link>
        </div>
      </div>

      <div className="flex gap-6 items-center">
        {isAuthenticated ? (
          <>
            <span className="font-semibold">{userDetails.username}</span>
            <button
              onClick={handleLogout}
              className="p-3 rounded-full bg-gradient-to-br from-[#00a6ff] to-red-500"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/register"
              className="p-3 bg-gradient-to-br from-[#00a6ff] to-red-500 rounded-full md:flex hidden"
            >
              Sign Up
            </Link>
            <Link to="/login" className="p-3 shadow shadow-blue-200 rounded-full">
              Log In
            </Link>
          </>
        )}
      </div>

      {/* Small screen menu toggle */}
      <div className="md:hidden">
        {menuOpen ? (
          <X className="cursor-pointer" onClick={toggleMenu} />
        ) : (
          <Menu className="cursor-pointer" onClick={toggleMenu} />
        )}
      </div>

      {/* Small screen menu links */}
      {menuOpen && (
        <div className="absolute top-28 left-0 w-full bg-[#3d2659] text-white flex flex-col gap-4 p-4 md:hidden">
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/classifications" onClick={toggleMenu}>
            Classifications
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
