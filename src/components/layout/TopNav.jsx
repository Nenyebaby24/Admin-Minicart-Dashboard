import { useState, useEffect, useRef } from 'react';
import { Search, Moon, Sun, Bell, ChevronDown, LogOut, User } from 'lucide-react';
import Input from '../ui/Input';

const TopNav = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="h-20 bg-white dark:bg-slate-900 border-b border-gray-500 dark:border-slate-800 flex items-center justify-between px-8 sticky top-0 z-10 transition-colors">

      {/* Search */}
      <div className="w-96 border border-gray-700 rounded-lg px-4 py-1 focus-within:ring-2 focus-within:ring-red-200">
        <Input
          icon={<Search size={16} />}
          placeholder="Search or type command"
          border="border-b border-gray-700"
        />
      </div>

      <div className="flex items-center gap-4">

        {/* Dark Mode */}
        <button
          onClick={toggleDarkMode}
          className="p-2.5 rounded-full border border-gray-100 dark:border-slate-700 text-gray-500 hover:bg-gray-50 dark:hover:bg-slate-800 transition"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Notifications */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2.5 rounded-full border border-gray-100 dark:border-slate-700 text-gray-500 hover:bg-gray-50 dark:hover:bg-slate-800 relative transition"
          >
            <Bell size={18} />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-orange-400 rounded-full border-2 border-white"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-3 w-72 bg-white dark:bg-slate-800 shadow-xl rounded-xl border border-gray-100 dark:border-slate-700 p-4 space-y-3 animate-in fade-in slide-in-from-top-2">
              <p className="font-semibold text-sm text-slate-700 dark:text-slate-200">
                Notifications
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                You have 3 new updates.
              </div>
              <div className="text-xs text-gray-400">
                Revenue increased by 5%
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div
          className="relative"
          ref={profileRef}
        >
          <div
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-3 ml-2 cursor-pointer group"
          >
            <img
              src="https://i.pravatar.cc/150?u=jane"
              alt="Jane"
              className="w-10 h-10 rounded-full object-cover border border-gray-100"
            />
            <div className="flex items-center gap-1">
              <span className="font-semibold text-sm text-slate-800 dark:text-white">
                Jane Austin
              </span>
              <ChevronDown
                size={14}
                className="text-gray-400 group-hover:text-gray-600 transition-colors"
              />
            </div>
          </div>

          {showProfileMenu && (
            <div className="absolute right-0 mt-3 w-48 bg-white dark:bg-slate-800 shadow-xl rounded-xl border border-gray-100 dark:border-slate-700 py-2">
              <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 w-full">
                <User size={16} />
                Profile
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-gray-50 dark:hover:bg-slate-700 w-full">
                <LogOut size={16} />
                Log Out
              </button>
            </div>
          )}
        </div>

      </div>
    </header>
  );
};

export default TopNav;
