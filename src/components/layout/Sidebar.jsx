import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  DollarSign,
  Map,
  ScrollText,
  Store,
  Layers,
  Image as ImageIcon,
  Users,
  Info,
  ChevronDown,
  Settings,
  MoveRight,
  FileText,
  Wrench,
  LogOut,
  ShoppingCart,
  X,
} from "lucide-react";

const NavItem = ({ icon: Icon, label, active, hasSubmenu, size = "md" }) => {
  const textSize =
    size === "lg"
      ? "text-lg font-semibold"
      : size === "sm"
      ? "text-sm font-medium"
      : "text-base font-medium";

  return (
    <div
      className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-200 ${
        active ? "bg-[#150b3d] text-white shadow-lg" : "text-[#150b3d] hover:bg-gray-50"
      }`}
    >
      <div className="flex items-center gap-4">
        <Icon size={22} className={active ? "text-white" : "text-[#150b3d]"} />
        <span className={textSize}>{label}</span>
      </div>
      {hasSubmenu && (
        <ChevronDown
          size={18}
          className={active ? "text-white" : "text-[#150b3d] opacity-50"}
        />
      )}
    </div>
  );
};

const Sidebar = ({ isOpen, setIsSidebarOpen }) => {
  const menuItems = [
    { path: "/", icon: Home, label: "Dashboard" },
    { path: "/revenue", icon: DollarSign, label: "Revenue" },
    { path: "/locations", icon: Map, label: "Locations" },
    { path: "/plans", icon: ScrollText, label: "Plans", hasSubmenu: true },
    { path: "/stores", icon: Store, label: "Stores", hasSubmenu: true },
    { path: "/pages", icon: Layers, label: "Pages", hasSubmenu: true },
    { path: "/media", icon: ImageIcon, label: "Media" },
    { path: "/users", icon: Users, label: "Users" },
    { path: "/support", icon: Info, label: "Support", hasSubmenu: true },
  ];

  const systemItems = [
    { path: "/settings", icon: Settings, label: "Profile Settings" },
    { path: "/gateway", icon: MoveRight, label: "Payment Gateway" },
    { path: "/email", icon: FileText, label: "Email Templates" },
    { path: "/logo", icon: Wrench, label: "Logo Management" },
  ];

  // Close sidebar when clicking outside (for mobile)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        !e.target.closest("#sidebar") &&
        !e.target.closest("#sidebar-toggle-button")
      ) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, setIsSidebarOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-black/30 lg:hidden"></div>
      )}

      <aside
        id="sidebar"
        className={`fixed inset-y-0 left-0 z-[70] lg:z-40 w-64 bg-white border-r border-gray-100 
        flex flex-col p-6 h-screen overflow-y-auto transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:sticky lg:top-0 lg:inset-auto`}
      >
        {/* Header: Minicart + Logo */}
        <div className="flex items-center gap-2 mb-10 px-2">
          <div className="bg-red-500 p-1.5 rounded-lg text-white">
            <ShoppingCart size={20} />
          </div>
          <span className="text-2xl font-bold italic text-[#150b3d] tracking-tight">
            minicart
          </span>

          {/* X button for mobile */}
          <button
            className="ml-auto lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-8">
          {/* MENU */}
          <div>
            <p className="text-base font-medium text-gray-500 uppercase mb-4 mr-4">
              Menu
            </p>
            <div className="space-y-1">
              {menuItems.map((item) => (
                <NavLink key={item.path} to={item.path} end={item.path === "/"}>
                  {({ isActive }) => (
                    <NavItem {...item} active={isActive} size="base" />
                  )}
                </NavLink>
              ))}
            </div>
          </div>

          {/* SYSTEM SECTION */}
          <div>
            <p className="text-base font-medium text-gray-500 uppercase mb-4 mr-4 px-2">
              System
            </p>
            <div className="space-y-1">
              {systemItems.map((item) => (
                <NavLink key={item.path} to={item.path}>
                  {({ isActive }) => (
                    <NavItem {...item} active={isActive} size="base" />
                  )}
                </NavLink>
              ))}

              <div className="mt-4">
                <NavItem icon={LogOut} label="Log Out" size="base" />
              </div>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;




