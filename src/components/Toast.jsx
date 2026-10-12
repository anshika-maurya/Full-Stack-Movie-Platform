import { useEffect } from "react";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";

function Toast({ message, type = "success", onClose }) {
  useEffect(() => {
    const timeout = setTimeout(onClose, 3500);
    return () => clearTimeout(timeout);
  }, [message, onClose]);

  const isError = type === "error";

  return (
    <div
      role={isError ? "alert" : "status"}
      aria-live={isError ? "assertive" : "polite"}
      className={`fixed right-4 top-4 z-50 flex w-[calc(100%-2rem)] max-w-sm items-start gap-3 rounded-xl border p-4 shadow-2xl backdrop-blur sm:right-6 sm:top-6 ${
        isError
          ? "border-red-500/30 bg-gray-950/95 text-red-200"
          : "border-emerald-500/30 bg-gray-950/95 text-emerald-200"
      }`}
    >
      {isError ? (
        <FaExclamationCircle className="mt-0.5 shrink-0 text-red-400" />
      ) : (
        <FaCheckCircle className="mt-0.5 shrink-0 text-emerald-400" />
      )}
      <p className="flex-1 text-sm font-medium leading-5">{message}</p>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close notification"
        className="shrink-0 text-gray-400 transition hover:text-white"
      >
        <FaTimes />
      </button>
    </div>
  );
}

export default Toast;
