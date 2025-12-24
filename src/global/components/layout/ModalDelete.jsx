import React from "react";

export const ModalDelete = ({ onClose, onConfirm, title, children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      
      {/* Contenedor modal */}
      <div className="relative w-full max-w-md p-6">
        <div className="relative bg-lightbg rounded-2xl shadow-xl border border-greybg overflow-hidden">

          {/* Botón cerrar */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-lighttext hover:text-darktext transition-colors rounded-full p-1"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Cerrar modal</span>
          </button>

          {/* Contenido */}
          <div className="flex flex-col items-center text-center p-6 gap-4">

            {/* Icono alerta */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red_coral/20">
              <svg
                className="w-8 h-8 text-red_coral"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>

            {/* Título */}
            <h3 className="text-2xl font-semibold text-darktext font-[Poppins]">
              {title}
            </h3>

            {/* Descripción */}
            {children && (
              <p className="text-lighttext text-base leading-relaxed font-[Poppins]">
                {children}
              </p>
            )}

            {/* Botones */}
            <div className="flex gap-4 mt-4 w-full justify-center">
              <button
                onClick={onConfirm}
                className="flex-1 py-3 px-5 bg-red_coral text-white font-[Poppins] rounded-xl hover:bg-red-700 transition"
              >
                Sí, eliminar
              </button>

              <button
                onClick={onClose}
                className="flex-1 py-3 px-5 border border-greybg bg-lightbg text-darktext rounded-xl font-[Poppins] hover:bg-greybg transition"
              >
                Cancelar
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
