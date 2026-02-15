import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";

const Shell = () => {
  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <TopNav />
        
        <main className="flex-1 p-8 overflow-x-hidden">
          <Outlet />
        </main>
      </div>

    </div>
  );
};

export default Shell;
