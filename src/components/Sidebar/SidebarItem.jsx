// SidebarItem.jsx
export default function SidebarItem({ label, active = false }) {
  return (
    // using ternary for give active atribute in sidebar
    <div
      className={`py-3 px-2 cursor-pointer transition-colors hover:text-red-600 ${
        active ? "text-red-600 font-semibold" : ""
      }`}
    >
      {label}
    </div>
  );
}
