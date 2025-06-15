import { ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        <main className="p-2 flex-1">{children}</main>
      </div>
    </div>
  );
};

export default RootLayout;
