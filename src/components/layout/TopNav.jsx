import { useState, useEffect, useRef } from 'react';
import { Search, Moon, Sun, Bell, ChevronDown, LogOut, User, Menu, X } from 'lucide-react';
import Input from '../ui/Input';

// Note: You should pass setSidebarOpen and isSidebarOpen from your Layout/App component 
// if the Sidebar lives outside of TopNav. For this example, I'll include the state here.

const TopNav = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="h-20 bg-white dark:bg-slate-900 border-b border-gray-400 dark:border-slate-800 flex items-center justify-between px-4 md:px-8 sticky top-0 z-50 transition-colors">
      
      <div className="flex items-center gap-4">
        {/* Mobile Toggle Bar - Hidden on Desktop (md:hidden) */}
        
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 lg:hidden text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition"
          >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Search - Hidden on very small screens to save space, or use full width logic */}
        <div className="hidden sm:block w-96 -ml-7 border border-gray-400 rounded-lg px-4 py-3 bg-[#f8fafc] dark:bg-slate-800/50 focus-within:ring-2 focus-within:ring-red-200 ">
           <Search
           size={16}
           className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
           />
           <input 
            placeholder="Search type command"
            border= "none"
            className="bg-transparent border-none focus:ring-0 focus:outline-transparent w-full pl-5"/>
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        {/* Dark Mode */}
        <button
          onClick={toggleDarkMode}
          className="p-3.5 rounded-full border border-gray-400 dark:border-slate-700 text-gray-500 hover:bg-gray-50 dark:hover:bg-slate-800 transition cursor-pointer"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Notifications */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-3.5 rounded-full border border-gray-400 dark:border-slate-700 text-gray-500 hover:bg-gray-50 dark:hover:bg-slate-800 relative transition cursor-pointer"
          >
            <Bell size={20} />
            <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-orange-400 rounded-full border-2 border-white"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-3 w-72 bg-white dark:bg-slate-800 shadow-xl rounded-xl border border-gray-100 dark:border-slate-700 p-4 space-y-3">
              <p className="font-semibold text-sm text-slate-700 dark:text-slate-200">Notifications</p>
              <div className="text-sm text-gray-500 dark:text-gray-400">You have 3 new updates.</div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative" ref={profileRef}>
          <div
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <img
              src="https://i.pravatar.cc/150?u=jane"
              alt="Jane"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-gray-400"
            />
            <span className="hidden md:block font-semibold text-sm text-slate-800 dark:text-white">
              Jane Austin
            </span>
            <ChevronDown size={20} className="text-gray-400 group-hover:text-gray-600" />
          </div>

          {showProfileMenu && (
            <div className="absolute right-0 mt-3 w-48 bg-white dark:bg-slate-800 shadow-xl rounded-xl border border-gray-100 dark:border-slate-700 py-2">
              <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 w-full text-left">
                <User size={20} /> Profile
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-gray-50 dark:hover:bg-slate-700 w-full text-left">
                <LogOut size={20} /> Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopNav;
