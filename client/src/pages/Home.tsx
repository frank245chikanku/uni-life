import { useRecoilValue } from "recoil";
import Navbar from "../components/global/Navbar";
import Categories from "../components/home/Categories";
import Hero from "../components/home/Hero";
import { isAuthenticatedAtom  } from "../recoil/atom";
import Footer from "../components/global/Footer";



function Home() {
const auth = useRecoilValue(isAuthenticatedAtom)

  
  return (
    <div className="w-full flex flex-col bg-[#0b0b26]">
      <Navbar />
      <Hero />
      {auth && <Categories/>}
      <Footer/>
      
    </div>
  );
}

export default Home;
