import { ReactNode } from "react";
import Navbar from "./global/Navbar";
import AcademicSidebar from "./academic/Sidebar";
import PeerSidebar from "./peer/Sidebar";
import SocialSidebar from "./social/Sidebar";
import FinancialSidebar from "./financial/Sidebar"; 

interface LayoutProps {
  children: ReactNode;
  showPeerSidebar?: boolean;
  showSocialSidebar?: boolean; 
  showFinancialSidebar?: boolean; 
}

const Layout: React.FC<LayoutProps> = ({ children, showPeerSidebar = false, showSocialSidebar = false, showFinancialSidebar = false }) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        {showPeerSidebar && <PeerSidebar />}
        {showSocialSidebar && <SocialSidebar />}
        {showFinancialSidebar && <FinancialSidebar />} 
        {!showPeerSidebar && !showSocialSidebar && !showFinancialSidebar && <AcademicSidebar />} 
        <main className="p-2 flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
