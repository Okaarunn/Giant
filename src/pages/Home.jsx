import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Dashboard from "../components/Dashboard/Dashboard";
import { useTheme } from "../contexts/ThemeContext";
import api from "../services/api";

export default function Home() {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();

  const [validCategories, setValidCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Ambil kategori dari API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get("/categories");
        const values = res.data.map((cat) => cat.value);
        setValidCategories(values);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const selectedCategory =
    !categoryName || !validCategories.includes(categoryName)
      ? "all"
      : categoryName;

  // Redirect jika kategori tidak valid (setelah validCategories dimuat)
  useEffect(() => {
    if (!isLoading && categoryName && !validCategories.includes(categoryName)) {
      navigate("/");
    }
  }, [categoryName, validCategories, isLoading]);

  return (
    <main
      className={`${
        isDark ? "bg-gray-900 text-white" : "bg-white text-black"
      } flex min-h-screen`}
    >
      <Sidebar selectedCategory={selectedCategory} toggleTheme={toggleTheme} />
      <Dashboard selectedCategory={selectedCategory} />
    </main>
  );
}
