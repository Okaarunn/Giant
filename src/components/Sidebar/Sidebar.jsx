import { useNavigate } from "react-router-dom";
import { FaMoon, FaSnowflake } from "react-icons/fa";
import Company from "./Company";
import SidebarItem from "./SidebarItem";
import { useTheme } from "../../contexts/ThemeContext";
import api from "../../services/api";
import { useEffect, useState } from "react";

export default function Sidebar({ selectedCategory, toggleTheme }) {
  // set theme
  const { isDark } = useTheme();
  const navigate = useNavigate();
  // set categories
  const [categories, setCategories] = useState([]);

  // get data categories from /categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get("/categories");
        setCategories(res.data);
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    };
    // mount
    fetchCategories();
  }, []);

  return (
    <div
      className={`w-72 h-screen ${
        isDark ? "bg-[#1e2a44] text-white" : "bg-[#f8f8f8] text-black"
      } flex flex-col justify-between border-r border-gray-500 p-4`}
    >
      <div className="mb-6">
        <Company />
      </div>

      <div className="flex-1 overflow-y-auto text-[15px] font-medium divide-y divide-gray-300 custom-scroll">
        {/* if user navigate home = category all */}
        <SidebarItem
          key="all"
          label="All Products"
          value="all"
          onClick={() => navigate("/")}
          isActive={selectedCategory === "all"}
        />
        {/* if user navigate home = category name */}
        {categories.map((item) => (
          <SidebarItem
            key={item.id}
            label={item.label}
            value={item.value}
            onClick={() => navigate(`/category/${item.value}`)}
            isActive={selectedCategory === item.value}
          />
        ))}
      </div>

      <div className="border-t border-gray-300 mt-4 pt-4">
        <button
          onClick={toggleTheme}
          className={`w-full cursor-pointer transition-all duration-300 border rounded-lg px-4 py-3 shadow flex items-center justify-between ${
            isDark
              ? "bg-gradient-to-r from-[#1e2a44] to-blue-950 border-[#1e2a44] hover:from-[#243354] hover:to-blue-900 text-white"
              : "bg-gradient-to-r from-white to-red-50 border-red-200 hover:from-white hover:to-red-100 text-red-700"
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-full ring-1 ${
                isDark
                  ? "bg-[#243354] text-white ring-blue-300"
                  : "bg-red-100 text-red-600 ring-red-300"
              }`}
            >
              {isDark ? <FaMoon /> : <FaSnowflake />}
            </div>
            <span className="text-sm font-semibold">
              {isDark ? "Midnight" : "Winter Rose"}
            </span>
          </div>
          <div
            className={`flex items-center gap-1 text-sm font-semibold ${
              isDark ? "text-blue-200" : "text-blue-900"
            }`}
          >
            {isDark ? <FaSnowflake /> : <FaMoon />}
            <span>{isDark ? "Winter Rose" : "Midnight"}</span>
          </div>
        </button>
      </div>
    </div>
  );
}
