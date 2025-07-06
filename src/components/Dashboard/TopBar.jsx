import { useEffect, useState } from "react";
import { FiClock } from "react-icons/fi";
import { useTheme } from "../../contexts/ThemeContext";

export default function TopBar() {
  const { isDark } = useTheme();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour >= 5 && hour < 12) return "🌤 Good morning";
    if (hour >= 12 && hour < 16) return "☀️ Good afternoon";
    if (hour >= 16 && hour < 19) return "🌇 Good evening";
    return "🌙 Good night";
  };

  const formatDate = (date) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    const getOrdinal = (n) => {
      if (n > 3 && n < 21) return "th";
      switch (n % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${dayName}, ${monthName} ${day}${getOrdinal(day)}, ${year}`;
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div
      className={`border-b px-4 pt-6 pb-4 shadow-lg rounded-t-lg transition-all ${
        isDark
          ? "bg-slate-800 border-gray-800 text-white"
          : "bg-white border-gray-200 text-gray-800"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p
            className={`text-base font-medium ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            {getGreeting()}, everyone!
          </p>
          <p
            className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}
          >
            {formatDate(currentTime)}
          </p>
        </div>

        {/* Clock Button */}
        <button
          className={`flex items-center gap-2 text-xs px-3 py-1.5 rounded-md transition-all border ${
            isDark
              ? "bg-gray-700 border-gray-600 text-gray-200 hover:bg-gray-600"
              : "bg-white border-gray-300 text-gray-700 hover:bg-violet-50 hover:border-red-400 hover:text-red-700"
          }`}
        >
          <FiClock className="text-red-500 text-sm" />
          <span>{formatTime(currentTime)}</span>
        </button>
      </div>
    </div>
  );
}
