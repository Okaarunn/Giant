import { FaMoon, FaSnowflake } from "react-icons/fa";
import Company from "./Company";
import SidebarItem from "./SidebarItem";

export default function Sidebar({ onSelectCategory, isDark, toggleTheme }) {
  const categories = [
    { label: "All", value: "all" },
    { label: "Sandwiches & Meals", value: "sandwiches" },
    { label: "McNuggets & Meals", value: "meals" },
    { label: "Fries", value: "fries" },
    { label: "Happy Meals", value: "happymeals" },
    { label: "McCafé Coffees", value: "mccafe_coffees" },
    { label: "Beverages", value: "beverages" },
    { label: "Sides & More", value: "sides_more" },
    { label: "McCafé Bakery", value: "mccafe_bakery" },
    { label: "Sweets & Treats", value: "sweets_treats" },
    { label: "Shareables", value: "shareables" },
    { label: "Seasonal Specials", value: "seasonal_specials" },
    { label: "Breakfast", value: "breakfast" },
    { label: "Burgers & More", value: "burgers_more" },
    { label: "Cold Drinks", value: "cold_drinks" },
    { label: "Hot Beverages", value: "hot_beverages" },
  ];

  return (
    <div
      className={`w-72 h-screen ${
        isDark ? "bg-[#1e2a44] text-white" : "bg-[#f8f8f8] text-black"
      } flex flex-col justify-between border-r border-gray-300 p-4`}
    >
      <div className="mb-6">
        <Company />
      </div>

      <div className="flex-1 overflow-y-auto text-[15px] font-medium divide-y divide-gray-300 custom-scroll">
        {categories.map((item, index) => (
          <SidebarItem
            key={index}
            label={item.label}
            onClick={() => onSelectCategory(item.value)}
          />
        ))}
      </div>

      {/* Toggle Theme Button */}
      <div className="border-t border-gray-300 mt-4 pt-4">
        <button
          onClick={toggleTheme}
          className={`w-full cursor-pointer transition-all duration-300 border rounded-lg px-4 py-3 shadow flex items-center justify-between ${
            isDark
              ? "bg-gradient-to-r from-[#1e2a44] to-blue-950 border-[#1e2a44] hover:from-[#243354] hover:to-blue-900 text-white"
              : "bg-gradient-to-r from-white to-red-50 border-red-200 hover:from-white hover:to-red-100 text-red-700"
          }`}
        >
          <div className="flex items-center gap-3 ">
            <div
              className={`p-2 rounded-full ring-1  ${
                isDark
                  ? "bg-[#243354] text-white ring-blue-300"
                  : "bg-red-100 text-red-600 ring-red-300"
              }`}
            >
              {isDark ? (
                <FaMoon className="text-md" />
              ) : (
                <FaSnowflake className="text-md" />
              )}
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
