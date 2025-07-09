import { Link } from "react-router-dom";
import bg from "../../assets/online-education-3412473_1280-removebg-preview.png";

const Hero = () => {
  return (
    <section className="p-6 w-full flex flex-col min-h-screen text-white">
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
        <div className="w-full flex flex-col">
          <p className="md:text-[50px] text-[30px] max-w-96 font-bold md:text-start text-center">
            <span className="animated-text">Get started to adjust with university </span>
            <span className="gradient-text md:text-[50px] text-[30px] font-bold animated-life">life</span>.
          </p>
          <div className="mt-8 flex md:justify-start justify-center">
            <Link
              className="p-3 rounded bg-gradient-to-br from-[#00a6ff] to-red-500 text-white text-xl px-6 hover:bg-[#ff4276]"
              to="/register"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div>
          <img src={bg} alt="bg" />
        </div>
      </div>
      
    </section>
  );
};

export default Hero;    
