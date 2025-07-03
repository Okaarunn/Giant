import { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import { useTheme } from "./contexts/ThemeContext.jsx";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { isDark, toggleTheme } = useTheme();

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
