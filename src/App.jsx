import { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isDark, setIsDark] = useState(false); // 🔥 Tambahkan ini

  const toggleTheme = () => setIsDark((prev) => !prev); // 🔥 Fungsi toggle

  return (
    <main
      className={`${
        isDark ? "bg-gray-900 text-white" : "bg-white text-black"
      } flex min-h-screen`}
    >
      <Sidebar
        onSelectCategory={setSelectedCategory}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
      <Dashboard selectedCategory={selectedCategory} isDark={isDark} />
    </main>
  );
}
