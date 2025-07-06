import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Dashboard from "../components/Dashboard/Dashboard";
import { useTheme } from "../contexts/ThemeContext";

export default function Home() {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { isDark, toggleTheme } = useTheme();

  // daftar kategori langsung
  const validCategories = [
    "all",
    "sandwiches",
    "meals",
    "fries",
    "happymeals",
    "mccafe_coffees",
    "beverages",
    "sides_more",
    "mccafe_bakery",
    "sweets_treats",
    "shareables",
    "seasonal_specials",
    "breakfast",
    "burgers_more",
    "cold_drinks",
    "hot_beverages",
  ];

  useEffect(() => {
    if (!categoryName || !validCategories.includes(categoryName)) {
      setSelectedCategory("all");
      navigate("/");
    } else {
      setSelectedCategory(categoryName);
    }
  }, [categoryName]);

  return (
    <main
      className={`${
        isDark ? "bg-gray-900 text-white" : "bg-white text-black"
      } flex min-h-screen`}
    >
      <Sidebar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        toggleTheme={toggleTheme}
      />
      <Dashboard selectedCategory={selectedCategory} />
    </main>
  );
}
