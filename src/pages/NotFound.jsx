import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import Lottie from "lottie-react";
import notFoundAnimation from "../assets/animations/404.json";

export default function NotFound() {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen text-center px-4 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="w-full max-w-md md:max-w-xl lg:max-w-2xl mb-6">
        <Lottie animationData={notFoundAnimation} loop={true} />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-2">
        404 - Page Not Found
      </h1>
      <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mb-6">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
    </div>
  );
}
