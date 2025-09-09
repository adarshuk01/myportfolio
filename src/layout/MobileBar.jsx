import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import {
  Briefcase,
  GraduationCap,
  Home,
  MessageSquare,
  Presentation,
  Sun,
  Moon,
} from "lucide-react";

function MobileBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState(0);

  // Static menu items (excluding theme toggle, which will be in the center)
  const menuItems = [
    { icon: <Home />, label: "Home", targetId: "home" },
    { icon: <GraduationCap />, label: "Education", targetId: "education" },
    { icon: <Briefcase />, label: "Work", targetId: "work" },
    { icon: <Presentation />, label: "Presentation", targetId: "presentation" },
  ];

  // 🔹 Intersection observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = menuItems.findIndex(
              (item) => item.targetId === entry.target.id
            );
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    menuItems.forEach((item) => {
      const section = document.getElementById(item.targetId);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-lg flex items-center justify-around py-3 px-4 rounded-2xl shadow-lg transition-all duration-300 ${
        theme === "light" ? "bg-white text-gray-800" : "bg-gray-900 text-white"
      }`}
    >
      {/* First 2 items */}
      {menuItems.slice(0, 2).map((item, index) => (
        <a
          key={index}
          href={`#${item.targetId}`}
          onClick={(e) => {
            e.preventDefault();
            const section = document.getElementById(item.targetId);
            if (section) section.scrollIntoView({ behavior: "smooth" });
            setActiveIndex(index);
          }}
          className={`p-3 rounded-full transition-all duration-300 ${
            activeIndex === index
              ? "bg-yellow-400 text-black"
              : "text-gray-500 hover:text-yellow-400"
          }`}
        >
          {React.cloneElement(item.icon, {
            stroke: activeIndex === index ? "black" : "gray",
            fill: "none",
          })}
        </a>
      ))}

      {/* 🔆 Theme toggle in center */}
      <button
        onClick={toggleTheme}
        className="p-3 rounded-full bg-yellow-400 text-black shadow-md hover:scale-105 transition-transform duration-200"
      >
        {theme === "light" ? <Sun size={22} /> : <Moon size={22} />}
      </button>

      {/* Last 3 items */}
      {menuItems.slice(2).map((item, index) => {
        const adjustedIndex = index + 2;
        return (
          <a
            key={adjustedIndex}
            href={`#${item.targetId}`}
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById(item.targetId);
              if (section) section.scrollIntoView({ behavior: "smooth" });
              setActiveIndex(adjustedIndex);
            }}
            className={`p-3 rounded-full transition-all duration-300 ${
              activeIndex === adjustedIndex
                ? "bg-yellow-400 text-black"
                : "text-gray-500 hover:text-yellow-400"
            }`}
          >
            {React.cloneElement(item.icon, {
              stroke: activeIndex === adjustedIndex ? "black" : "gray",
              fill: "none",
            })}
          </a>
        );
      })}
    </div>
  );
}

export default MobileBar;
