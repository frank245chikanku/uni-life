import Navbar from "../components/global/Navbar";
import Categories from "../components/home/Categories";
import Hero from "../components/home/Hero";

function Home() {
  return (
    <div className="w-full flex flex-col bg-[#0b0b26]">
      <Navbar />
      <Hero />
      <Categories />
    </div>
  );
}

export default Home;
