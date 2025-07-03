export default function Notification({ message, type = "success", onClose }) {
  const baseStyle =
    "fixed top-5 right-5 z-50 px-4 py-3 rounded shadow-lg transition-all duration-300";
  const typeStyle = {
    success: "bg-green-100 text-green-800 border border-green-300",
    error: "bg-red-100 text-red-800 border border-red-300",
    warning: "bg-yellow-100 text-red-800 border border-red-300",
  };

  return (
    <div className={`${baseStyle} ${typeStyle[type]}`}>
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm">{message}</span>
        <button onClick={onClose} className="text-xl font-bold leading-none">
          ×
        </button>
      </div>
    </div>
  );
}
