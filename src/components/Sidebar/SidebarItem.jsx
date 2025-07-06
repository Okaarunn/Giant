import { useTheme } from "../../contexts/ThemeContext.jsx";

export default function SidebarItem({ label, onClick, isActive }) {
  const { isDark } = useTheme();

  const activeClass = isActive
    ? isDark
      ? "bg-white text-[#1e2a44] font-semibold"
      : "bg-red-500 text-white font-semibold"
    : isDark
    ? "text-white border-b border-gray-600 hover:bg-gray-700"
    : "text-black hover:bg-gray-100";

  return (
    <div
      onClick={onClick}
      className={`px-4 py-3 mb-1 rounded-md cursor-pointer transition-all duration-200 ${activeClass}`}
    >
      {label}
    </div>
  );
}
