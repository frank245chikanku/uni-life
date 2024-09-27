import { ReactNode } from "react";
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
  showPeerSidebar?: boolean;
  showSocialSidebar?: boolean;
  showFinancialSidebar?: boolean;
  showCareerSidebar?: boolean;
  showDiscriminationSidebar?: boolean;
  showEntrepreneurshipSidebar?: boolean;
  showAdjustmentSidebar?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  showPeerSidebar = false,
  showSocialSidebar = false,
  showFinancialSidebar = false,
  showCareerSidebar = false,
  showDiscriminationSidebar = false,
  showEntrepreneurshipSidebar = false,
  showAdjustmentSidebar = false,
}) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        {showPeerSidebar && <PeerSidebar />}
        {showSocialSidebar && <SocialSidebar />}
        {showFinancialSidebar && <FinancialSidebar />}
        {showCareerSidebar && <CareerSidebar />}
        {showDiscriminationSidebar && <DiscriminationSidebar />}
        {showEntrepreneurshipSidebar && <EntrepreneurshipSidebar />}
        {showAdjustmentSidebar && <AdjustmentSidebar />}

        {!showPeerSidebar && !showSocialSidebar && !showFinancialSidebar && (
          <AcademicSidebar />
        )}
        <main className="p-2 flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
