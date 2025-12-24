import { useState } from "react";

export const ModalGallery = ({ images, onClose }) => {

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[99999] animate-fadeIn">
      <div className="relative max-w-[80vw] max-h-[80vh] w-full flex items-center justify-center">

        {/* Botón cerrar - X */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 
          bg-red_coral text-lightbg 
          w-12 h-12 rounded-full 
          shadow-lg grid place-items-center 
          text-2xl font-bold
          transition transform hover:scale-110 hover:shadow-xl"
        >
          ✕
        </button>

        {/* Flecha izquierda */}
        <button
          onClick={prev}
          className="absolute left-6 
          bg-indigo_light/90 hover:bg-indigo_light 
          text-lightbg 
          w-16 h-16 rounded-full 
          shadow-lg grid place-items-center text-4xl
          transition transform hover:scale-110 hover:shadow-indigo_light/40"
        >
          ‹
        </button>

        {/* Imagen */}
        <img
          key={index}
          src={images[index].image}
          alt="modal-img"
          className="max-h-[65vh] max-w-[65vw] 
          rounded-xl shadow-2xl object-contain 
          animate-zoomFade"
        />

        {/* Flecha derecha */}
        <button
          onClick={next}
          className="absolute right-6 
          bg-indigo_light/90 hover:bg-indigo_light 
          text-lightbg 
          w-16 h-16 rounded-full 
          shadow-lg grid place-items-center text-4xl
          transition transform hover:scale-110 hover:shadow-indigo_light/40"
        >
          ›
        </button>

      </div>
    </div>
  );
};
