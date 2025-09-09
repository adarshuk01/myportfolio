import React, { useContext, useState } from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import { ThemeContext } from "../context/ThemeContext";
import Switch from "../components/Switch";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";
import MobileBar from "./MobileBar"; // ✅ import mobile bar

function Layout() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div
      className={`grid grid-cols-12 h-screen ${
        theme === "light" ? "bg-slate-100" : "bg-gray-700"
      } gap-2 p-2 relative`}
    >
      {/* Mobile menu button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="lg:hidden absolute top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded-md shadow"
      >
        <Menu size={20} />
      </button>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-gradient-to-b from-black/70 to-black/50 z-30 lg:hidden"
        />
      )}

      {/* Left Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 col-span-12 lg:col-span-2 fixed lg:static top-0 left-0 h-full w-64 z-40 transition-transform duration-300
          ${theme === "light" ? "bg-white shadow-gray-500" : "bg-gray-900 text-white shadow-white/30"} 
           shadow-2xl overflow-y-auto hide-scrollbar`}
      >
        <LeftSidebar />
      </div>

      {/* Main Content */}
      <div
        className={`col-span-12 lg:col-span-9 ${
          theme === "light" ? "bg-white" : "bg-gray-900 text-white"
        } shadow-lg py-6 px-4 lg:px-14 overflow-y-auto hide-scrollbar`}
      >
        <Outlet />
      </div>

      {/* Right Sidebar (Desktop only) */}
      <div className="hidden lg:flex col-span-1 flex-col gap-4">
        <Switch onclick={() => toggleTheme()} />
        <RightSidebar />
      </div>

      {/* ✅ Mobile bottom bar (only visible on mobile) */}
      <div className="lg:hidden">
        <MobileBar />
      </div>
    </div>
  );
}

export default Layout;
