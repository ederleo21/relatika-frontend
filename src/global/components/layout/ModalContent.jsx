import { X } from "lucide-react";

export const ModalContent = ({ title, onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 font-poppins">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 flex flex-col gap-4 relative">

        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition">
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 font-lora text-center">
          {title}
        </h2>

        <div className="flex-1 overflow-y-auto max-h-[60vh] pr-2">
          {children}
        </div>
      </div>
    </div>
  );
};