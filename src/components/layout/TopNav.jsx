import { useState, useEffect, useRef } from 'react';
import { Search, Moon, Sun, Bell, ChevronDown, LogOut, User, Menu, X, ArrowLeft } from 'lucide-react';

const TopNav = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const notificationRef = useRef(null);
  const profileRef = useRef(null);

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
    <header className="h-20 bg-white dark:bg-slate-900 border-b border-gray-400 dark:border-slate-800 flex items-center justify-between px-3 sm:px-6 lg:px-8 sticky top-0 z-40 transition-colors">
      
      {/* Left Section: Menu Toggle + Search */}
      <div className={`flex items-center gap-2 sm:gap-4 ${isSearchExpanded ? 'w-full' : 'flex-1'}`}>
        {!isSearchExpanded && (
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 lg:hidden text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition shrink-0"
          >
            {isSidebarOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        )}

        {/* Search Bar Container */}
        <div className={`relative flex items-center transition-all duration-300 ${
          isSearchExpanded 
            ? 'w-full bg-white dark:bg-slate-900 z-50' 
            : 'hidden sm:flex max-w-xs md:max-w-sm w-full border border-gray-400 rounded-lg px-3 py-2 bg-[#f8fafc] dark:bg-slate-800/50'
        }`}>
          {isSearchExpanded && (
            <button 
              onClick={() => setIsSearchExpanded(false)}
              className="p-2 mr-1 text-gray-500 sm:hidden"
            >
              <ArrowLeft size={20} />
            </button>
          )}
          
          <Search size={16} className={`text-gray-500 shrink-0 ${isSearchExpanded ? 'hidden' : 'block'}`} />
          
          <input 
            placeholder="Search..."
            className={`bg-transparent border-none focus:ring-0 focus:outline-none w-full text-sm ${
              isSearchExpanded ? 'p-2 border rounded-lg border-gray-300 dark:border-slate-700' : 'pl-2'
            }`}
            autoFocus={isSearchExpanded}
          />
        </div>

        {/* Search Trigger for Mobile */}
        {!isSearchExpanded && (
          <button 
            onClick={() => setIsSearchExpanded(true)}
            className="sm:hidden p-2 rounded-full border border-gray-400 text-gray-500 hover:bg-gray-50 transition"
          >
            <Search size={18} />
          </button>
        )}
      </div>

      {/* Right Section: Icons (Hidden on mobile when search is expanded) */}
      {!isSearchExpanded && (
        <div className="flex items-center gap-1.5 sm:gap-3 md:gap-4 shrink-0 ml-2">
          {/* Dark Mode */}
          <button
            onClick={toggleDarkMode}
            className="p-2 sm:p-3 rounded-full border border-gray-400 dark:border-slate-700 text-gray-500 hover:bg-gray-50 dark:hover:bg-slate-800 transition"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Notifications */}
          <div className="relative" ref={notificationRef}>
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 sm:p-3 rounded-full border border-gray-400 dark:border-slate-700 text-gray-500 hover:bg-gray-50 dark:hover:bg-slate-800 relative transition"
            >
              <Bell size={18} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-orange-400 rounded-full border border-white"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-3 w-64 sm:w-72 bg-white dark:bg-slate-800 shadow-xl rounded-xl border border-gray-100 dark:border-slate-700 p-4 space-y-3 z-50">
                <p className="font-semibold text-sm text-slate-700 dark:text-slate-200">Notifications</p>
                <div className="text-sm text-gray-500 dark:text-gray-400">You have 3 new updates.</div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative" ref={profileRef}>
            <div
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-1.5 sm:gap-2 cursor-pointer group"
            >
              <img
                src="https://i.pravatar.cc/150?u=jane"
                alt="Jane"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-gray-400"
              />
              <ChevronDown size={16} className="text-gray-400 group-hover:text-gray-600 hidden xs:block" />
            </div>

            {showProfileMenu && (
              <div className="absolute right-0 mt-3 w-44 sm:w-48 bg-white dark:bg-slate-800 shadow-xl rounded-xl border border-gray-100 dark:border-slate-700 py-2 z-50">
                <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 w-full text-left">
                  <User size={18} /> Profile
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-gray-50 dark:hover:bg-slate-700 w-full text-left">
                  <LogOut size={18} /> Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default TopNav;
