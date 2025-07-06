// components/ConfirmModal.jsx
import React from "react";

export default function ConfirmModal({
  show,
  onClose,
  onConfirm,
  title = "Are you sure?",
  message = "You’re about to perform this action. Do you want to continue?",
}) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl w-[90%] max-w-md transform transition-all duration-300 animate-fadeIn"
      >
        <h2 className="text-xl font-bold text-center mb-2 text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-300 mb-6 text-sm">
          {message}
        </p>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="cursor-pointer w-full py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-500 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="cursor-pointer w-full py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition"
          >
            Confirm
          </button>
        </div>

        <button
          onClick={onClose}
          className="cursor-pointer absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-white transition text-xl"
        >
          ×
        </button>
      </div>
    </div>
  );
}
