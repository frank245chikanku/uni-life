import academic from "../../assets/education.png";
import peer from "../../assets/peer-to-peer.png";
import responsibility from "../../assets/reliability.png";
import financial from "../../assets/financial-statement.png";
import career from "../../assets/career-path.png";
import criticism from "../../assets/criticism.png";
import presentation from "../../assets/presentation.png";
import leader from "../../assets/leadership.png";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <section className="w-full flex flex-col min-h-screen justify-center items-center p-6">
      <p className="font-bold text-[50px] text-gray-200">Categories</p>
      <div className="w-full grid md:grid-cols-4 grid-cols-1 gap-4 mt-16">
        <Link
          to={"/academics"}
          className="w-full shadow shadow-gray-600 bg-[#71c1fa] cursor-pointer hover:shadow-slate-900 hover:shadow-md p-4 rounded-sm flex flex-col justify-center items-center"
        >
          <img className="h-20 w-20" src={academic} alt="academic" />
          <p className="mt-4 font-bold text-slate-900 text-lg text-center">
            Academic Integrity
          </p>
        </Link>

        <Link to={"/peer"}>
          <div className="w-full shadow shadow-gray-600 bg-[#8122cf] cursor-pointer hover:shadow-slate-900 hover:shadow-md p-4 rounded-sm flex flex-col justify-center items-center">
            <img className="h-20 w-20" src={peer} alt="peer" />
            <p className="mt-4 font-bold text-slate-200 text-lg text-center">
              Peer Pressure
            </p>
          </div>
        </Link>

        <Link
          to={"/social"}
          className="w-full shadow shadow-gray-600 bg-[#ffb09d] cursor-pointer hover:shadow-slate-900 hover:shadow-md p-4 rounded-sm flex flex-col justify-center items-center"
        >
          <img className="h-20 w-20" src={responsibility} alt="responsibility" />
          <p className="mt-4 font-bold text-[#0101cf] text-lg text-center">
            Social Responsibility
          </p>
        </Link>

        <Link to={"/financial"}>
          <div className="w-full shadow shadow-gray-600 bg-[#fecf48] cursor-pointer hover:shadow-slate-900 hover:shadow-md p-4 rounded-sm flex flex-col justify-center items-center">
            <img className="h-20 w-20" src={financial} alt="financial" />
            <p className="mt-4 font-bold text-slate-900 text-lg text-center">
              Financial Strain
            </p>
          </div>
        </Link>

        
        <Link to={"/career"} className="w-full shadow shadow-gray-600 bg-[#353568] cursor-pointer hover:shadow-slate-900 hover:shadow-md p-4 rounded-sm flex flex-col justify-center items-center">
          <img className="h-20 w-20" src={career} alt="career" />
          <p className="mt-4 font-bold text-slate-200 text-lg text-center">
            Career Uncertainty
          </p>
        </Link>

        <Link to={"/discrimination"} className="w-full shadow shadow-gray-600 bg-[#71c1fa] cursor-pointer hover:shadow-slate-900 hover:shadow-md p-4 rounded-sm flex flex-col justify-center items-center">
          <img className="h-20 w-20" src={criticism} alt="criticism" />
          <p className="mt-4 font-bold text-slate-900 text-lg text-center">
            Discrimination & Bias
          </p>
        </Link>

        <Link to={"/entrepreneurship"}className="w-full shadow shadow-gray-600 bg-[#da3163] cursor-pointer hover:shadow-slate-900 hover:shadow-md p-4 rounded-sm flex flex-col justify-center items-center">
          <img className="h-20 w-20" src={presentation} alt="presentation" />
          <p className="mt-4 font-bold text-slate-200 text-lg text-center">
            Entrepreneurship Uncertainty
          </p>
        </Link>

        <Link to={"/adjustment"}className="w-full shadow shadow-gray-600 bg-[#1e993d] cursor-pointer hover:shadow-slate-900 hover:shadow-md p-4 rounded-sm flex flex-col justify-center items-center">
          <img className="h-20 w-20" src={leader} alt="leader" />
          <p className="mt-4 font-bold text-slate-200 text-lg text-center">
            Adjustment to Independence
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Categories;