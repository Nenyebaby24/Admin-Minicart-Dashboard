import { useState } from "react"; // Added useState
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";

const Shell = () => {
  // 1. Initialize the state here
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex relative min-h-screen bg-[#f8fafc]">
      
      {/* 2. Pass isOpen and the ability to close to Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      <div className="flex-1 flex flex-col">
        {/* 3. Pass both state and setter to TopNav */}
        <TopNav 
          isSidebarOpen={isSidebarOpen} 
          setIsSidebarOpen={setIsSidebarOpen} 
        />
        
        <main className="flex-1 p-8 overflow-x-hidden">
          <Outlet />
        </main>
      </div>

    </div>
  );
};

export default Shell; 
