import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./global/Navbar";
import AcademicSidebar from "./academic/Sidebar";
import PeerSidebar from "./peer/Sidebar";
import SocialSidebar from "./social/Sidebar";
import FinancialSidebar from "./financial/Sidebar";
import CareerSidebar from "./career/Sidebar";
import DiscriminationSidebar from "./discrimination/Sidebar";
import EntrepreneurshipSidebar from "./entrepreneurship/Sidebar";
import AdjustmentSidebar from "./adjustment/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");

  const category = pathSegments[1];
  console.log(category);

  const renderSidebar = () => {
    switch (category) {
      case "peer":
        return <PeerSidebar />;
      case "social":
        return <SocialSidebar />;
      case "financial":
        return <FinancialSidebar />;
      case "career":
        return <CareerSidebar />;
      case "discrimination":
        return <DiscriminationSidebar />;
      case "entrepreneurship":
        return <EntrepreneurshipSidebar />;
      case "adjustment":
        return <AdjustmentSidebar />;
      default:
        return <AcademicSidebar />;
    }
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        {renderSidebar()}
        <main className="p-2 flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
