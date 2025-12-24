import React, { useState } from "react";
import { ModalContent } from "../../../global/components/layout/ModalContent";

export const PostDetailModal = ({ onClose, post }) => {
  const images = post.images || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev));
  };

  // Calcula las imágenes a mostrar en la fila actual (máx 3)
  const imagesToShow = images.slice(currentIndex, currentIndex + 3);

  return (
    <ModalContent onClose={onClose} dark={true}>
      <div className="flex flex-col space-y-6 w-full">
        {/* Header */}
        <div className="flex items-center gap-4">
          <img
            src={post.user.avatar}
            alt="avatar"
            className="w-16 h-16 rounded-full object-cover border border-gray-500"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-white text-lg">
              {post.user.first_name} {post.user.last_name}
            </span>
            <span className="text-gray-300 text-sm">
              @{post.user.username} · {new Date(post.created_at).toLocaleDateString()}
            </span>
          </div>
        </div>

        {/* Título */}
        <h2 className="text-2xl font-bold text-white break-words">{post.title}</h2>

        {/* Contenido scrollable */}
        <div className="bg-slate-700 mx-10 p-6 rounded-xl shadow-inner max-h-[60vh] overflow-y-auto">
          <p className="text-gray-200 text-lg leading-relaxed whitespace-pre-line">
            {post.content}
          </p>
        </div>

        {/* Imágenes */}
        {images.length > 0 && (
          <div className="flex flex-col items-center space-y-4">
            <div className="flex gap-4">
              {imagesToShow.map((img, idx) => (
                <img
                  key={idx}
                  src={img.image}
                  alt={`post-img-${idx}`}
                  className="w-32 h-32 object-cover rounded-xl shadow-md border border-gray-500"
                />
              ))}
            </div>

            {/* Navegación */}
            <div className="flex gap-4">
              <button
                onClick={prevImage}
                disabled={currentIndex === 0}
                className="px-4 py-2 bg-gray-600 text-white rounded disabled:opacity-50"
              >
                ◀
              </button>
              <button
                onClick={nextImage}
                disabled={currentIndex >= images.length - 3}
                className="px-4 py-2 bg-gray-600 text-white rounded disabled:opacity-50"
              >
                ▶
              </button>
            </div>
          </div>
        )}
      </div>
    </ModalContent>
  );
};
