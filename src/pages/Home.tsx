import Navbar from "../components/global/Navbar";
import Categories from "../components/home/Categories";
import Hero from "../components/home/Hero";

function Home() {
  return (
    <div className="relative bg-custom flex flex-col bg-[#0b0b26] items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-50 mix-blend-overlay pointer-events-none noise-texture"></div>
      </div>
      <Navbar />
      <Hero />
      <Categories />
    </div>
  );
}

export default Home;
