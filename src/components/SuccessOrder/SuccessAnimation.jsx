import Lottie from "lottie-react";
import successAnimation from "../../assets/animations/successOrder.json";
import { useTheme } from "../../contexts/ThemeContext";

export default function SuccessAnimation({ fadeOut }) {
  const isDark = useTheme();

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-colors duration-500 ${
        isDark ? "bg-gray-900" : "bg-white"
      } ${fadeOut ? "animate-fade-out" : "animate-fade-in"}`}
    >
      <Lottie
        animationData={successAnimation}
        loop={false}
        style={{ width: 700, height: 700 }}
      />
    </div>
  );
}
