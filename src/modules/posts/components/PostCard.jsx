import React, { useState } from "react";
import { useSelector } from 'react-redux'
import { BsThreeDots } from "react-icons/bs";
import { PostForm } from "./PostForm";

export const PostCard = ({ post }) => {
  
  const images = post.images || [];
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setShowModal(true);
  const idAuthUser = useSelector((state) => state.authUser.authUser?.id);

  const postTypeStyles = {
    story: {
      label: "Historia",
      className: "bg-blue-100 text-blue-700 border-blue-200",
    },
    experience: {
      label: "Experiencia",
      className: "bg-green-100 text-green-700 border-green-200",
    },
    reflection: {
      label: "Reflexión",
      className: "bg-purple-100 text-purple-700 border-purple-200",
    },
  };

  const postType = postTypeStyles[post.post_type];

  return (
      <>
        {showModal && (
          <ModalGallery images={images} onClose={() => setShowModal(false)} />
        )}

        <div className="bg-lightbg shadow-sm hover:shadow-md border border-greybg rounded-2xl p-6 transition overflow-hidden">
      
          {/* HEADER */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-4 min-w-0">
      
              {/* Avatar */}
              <img
                src={post.user.avatar}
                alt="avatar"
                className="w-14 h-14 rounded-full object-cover border border-greybg shadow-sm shrink-0"
              />

              {/* User info */}
              <div className="flex flex-col leading-tight min-w-0">
                <span className="font-semibold text-darktext text-lg truncate">
                  {post.user.first_name} {post.user.last_name}
                </span>
      
                <span className="text-lighttext text-sm truncate">
                  @{post.user.username}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              {/* Icon edit */}
              {idAuthUser === post?.user?.id && (
                <button className="text-xl" onClick={() => setIsOpen(true)}>
                    <BsThreeDots/>
                </button>
              )}

              {/* Date */}
              <span className="text-lighttext text-sm shrink-0 whitespace-nowrap">
                {new Date(post.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
      
          {/* Divider */}
          <div className="border-t border-greybg my-4"></div>
      
          {/* TITLE + POST TYPE */}
          <div className="flex items-start gap-3 mb-3 min-w-0">
            <h2 className="flex-1 min-w-0 text-2xl font-bold text-darktext tracking-tight break-words whitespace-normal">
              {post.title}
            </h2>
      
            {postType && (
              <span
                className={`shrink-0 px-3 py-1 text-xs font-semibold rounded-full border whitespace-nowrap ${postType.className}`}
              >
                {postType.label}
              </span>
            )}
          </div>
          
          {/* CONTENT */}
          <p className="text-lighttext text-base leading-relaxed mb-5 whitespace-pre-line break-words">
            {post.content}
          </p>
          
          {/* IMAGES */}
          {images.length > 0 && (
            <div
              className={`grid gap-3 ${
                images.length === 1
                  ? "grid-cols-1 place-items-center"
                  : "grid-cols-2"
              }`}
            >
              {/* Primera imagen */}
              <img
                src={images[0].image}
                alt="post-img-0"
                onClick={openModal}
                className={`cursor-pointer rounded-xl shadow-sm border border-greybg ${
                  images.length === 1
                    ? "w-[75%] max-h-[380px] object-contain"
                    : "w-full h-60 object-cover"
                }`}
              />

              {/* Segunda imagen */}
              {images[1] && (
                <div className="relative">
                  <img
                    src={images[1].image}
                    alt="post-img-1"
                    onClick={openModal}
                    className="cursor-pointer w-full h-60 rounded-xl object-cover shadow-sm border border-greybg"
                  />

                  {images.length > 2 && (
                    <div
                      onClick={openModal}
                      className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center cursor-pointer border border-greybg"
                    >
                      <span className="text-white font-bold text-3xl">
                        +{images.length - 2}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Extra spacing bottom */}
          <div className="mt-4"></div>
        </div>
        {isOpen && <PostForm isOpen={isOpen} onClose={() => setIsOpen(false)} isUpdate={true} post={post}/>}
      </>
    );
  };


export const ModalGallery = ({ images, onClose }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[99999] animate-fadeIn">

      {/* Contenedor principal */}
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
