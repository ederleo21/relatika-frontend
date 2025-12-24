import { X } from "lucide-react";

export const ModalContent = ({ onClose, children, dark = false }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 font-poppins p-4">
      
      <div
        className={`
          ${dark ? "bg-slate-800" : "bg-white"} 
          rounded-2xl shadow-xl w-full max-w-7xl max-h-[85vh] min-w-[300px] flex flex-col relative overflow-hidden
        `}
      >
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className={`
            absolute top-4 right-4 p-2 rounded-full 
            ${dark ? "text-gray-300 hover:text-white hover:bg-slate-700" : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"}
            transition
          `}
        >
          <X size={24} />
        </button>

        {/* Contenido separado de la X */}
        <div className="mt-10 p-6 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};
