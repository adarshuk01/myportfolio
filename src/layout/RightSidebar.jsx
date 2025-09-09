import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Briefcase, GraduationCap, Home, MessageSquare, Presentation } from "lucide-react";

function RightSidebar() {
  const { theme } = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState(0);

  // Static sidebar items with target sections
  const menuItems = [
    { icon: <Home />, label: "Home", targetId: "home" },
    { icon: <GraduationCap />, label: "Education", targetId: "education" },
    { icon: <Briefcase />, label: "Work", targetId: "work" },
    { icon: <Presentation />, label: "Presentation", targetId: "presentation" },
    { icon: <MessageSquare />, label: "Messages", targetId: "messages" },
  ];

  // 🔹 Update activeIndex when scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = menuItems.findIndex((item) => item.targetId === entry.target.id);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      { threshold: 0.6 } // section must be 60% visible to count as active
    );

    menuItems.forEach((item) => {
      const section = document.getElementById(item.targetId);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`${
        theme === "light" ? "bg-white" : "bg-gray-900 text-white"
      } py-6 rounded-2xl`}
    >
      <div className="flex flex-col justify-center items-center gap-8">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={`#${item.targetId}`}
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById(item.targetId);
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
              setActiveIndex(index);
            }}
            className={`p-3 rounded-full w-fit cursor-pointer transition-all duration-300 ${
              activeIndex === index
                ? "bg-yellow-400 text-black"
                : "bg-gray-200 text-gray-500"
            }`}
          >
            {React.cloneElement(item.icon, {
              stroke: activeIndex === index ? "black" : "gray",
              fill: activeIndex === index ? "black" : "gray",
            })}
          </a>
        ))}
      </div>
    </div>
  );
}

export default RightSidebar;
