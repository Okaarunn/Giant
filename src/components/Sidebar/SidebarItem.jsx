export default function SidebarItem({
  label,
  value,
  onClick,
  isActive,
  isDark,
}) {
  const activeClass = isActive
    ? isDark
      ? "bg-white text-[#1e2a44]"
      : "bg-red-500 text-white"
    : isDark
    ? "text-white hover:bg-gray-700"
    : "text-black hover:bg-gray-200";

  return (
    <div
      onClick={onClick}
      className={`px-4 py-2 cursor-pointer transition font-medium rounded ${activeClass}`}
    >
      {label}
    </div>
  );
}
