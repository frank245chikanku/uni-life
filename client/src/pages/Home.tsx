import Navbar from "../components/global/Navbar";
import Categories from "../components/home/Categories";
import Hero from "../components/home/Hero";
import Footer from "../components/global/Footer";

function Home() {
  return (
    <div className="w-full flex flex-col bg-[#0b0b26]">
      <Navbar />
      <Hero />
      <Categories />
      <Footer />
    </div>
  );
}

export default Home;