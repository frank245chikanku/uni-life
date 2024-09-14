import { ReactNode } from "react";
import Navbar from "./global/Navbar";
import Sidebar from "./academic/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="p-2 flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
