import { useNavigate } from "react-router-dom";
import { FaMoon, FaSnowflake } from "react-icons/fa";
import Company from "./Company";
import SidebarItem from "./SidebarItem";
import { useTheme } from "../../contexts/ThemeContext";

export default function Sidebar({
  onSelectCategory,
  selectedCategory,
  toggleTheme,
}) {
  const { isDark } = useTheme();
  const navigate = useNavigate();

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
      } flex flex-col justify-between border-r border-gray-500 p-4`}
    >
      <div className="mb-6">
        <Company />
      </div>

      <div className="flex-1 overflow-y-auto text-[15px] font-medium divide-y divide-gray-300 custom-scroll">
        {categories.map((item, index) => (
          <SidebarItem
            key={index}
            label={item.label}
            value={item.value}
            onClick={() => {
              onSelectCategory(item.value);
              navigate(item.value === "all" ? "/" : `/category/${item.value}`);
            }}
            isActive={selectedCategory === item.value}
          />
        ))}
      </div>
    </div>
  );
}
