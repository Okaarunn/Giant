import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

import Sidebar from "../components/Sidebar/Sidebar";
import Dashboard from "../components/Dashboard/Dashboard";
import api from "../services/api";
import axios from "axios";

export default function Home() {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();

  const [validCategories, setValidCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // fetch categories data
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await api.getCategories();
        const values = categories.map((cat) => cat.value);
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

  // if categories name not valid, redirect in /
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
