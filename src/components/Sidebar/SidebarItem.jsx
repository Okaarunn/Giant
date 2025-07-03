export default function SidebarItem({ label, onClick }) {
  return (
    <div
      onClick={onClick}
      className="px-4 py-2 cursor-pointer hover:bg-gray-200 transition"
    >
      {label}
    </div>
  );
}
