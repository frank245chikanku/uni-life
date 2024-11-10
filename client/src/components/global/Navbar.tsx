import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isAuthenticatedAtom, userDetailsAtom } from "../../recoil/atom";

const Navbar = () => {
  const isAuthenticated = useRecoilValue(isAuthenticatedAtom);
  const userDetails = useRecoilValue(userDetailsAtom);
  const setIsAuthenticated = useSetRecoilState(isAuthenticatedAtom);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  
  return (
    <nav className="p-6 bg-gradient-to-r from-[#3d2659] to-[#0c2856] items-center justify-between text-white w-full flex">
      <div className="flex  gap-20 items-center">
        <Link className="font-bold text-xl" to="/">
          Uni-Guide
        </Link>
        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/">Classifications</Link>
          <Link to="/about">About</Link>
          <Link to="/chat">Chat</Link>
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
              className="p-3 bg-gradient-to-br from-[#00a6ff] to-red-500 rounded-full"
            >
              Sign Up
            </Link>
            <Link to="/login" className="p-3 shadow shadow-blue-200 rounded-full">
              Log In
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

