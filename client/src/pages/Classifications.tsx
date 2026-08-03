import Navbar from "../components/global/Navbar";
import Categories from "../components/home/Categories";
import Footer from "../components/global/Footer";

const Classifications = () => {
  return (
    <div className="w-full min-h-screen bg-[#0b0b26]">
      <Navbar />

      <Categories />

      <Footer />
    </div>
  );
};

export default Classifications;