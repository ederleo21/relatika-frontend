import { X } from "lucide-react";

export const ModalContent = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 font-poppins">
      
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative flex flex-col">
        
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
        >
          <X size={24} />
        </button>

        <div className="overflow-y-auto max-h-[70vh] mt-8 px-4 pb-4">
          {children}
        </div>
      </div>
    </div>
  );
};
