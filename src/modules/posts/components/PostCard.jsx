import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { BsThreeDots } from "react-icons/bs";
import { PostForm } from "./PostForm";
import { ModalGallery } from "./ModalGallery";
import { PostActionsDropdown } from "./PostActionsDropDown";
import { RiAspectRatioLine } from "react-icons/ri";
import { ModalDelete } from "../../../global/components/layout/ModalDelete";
import { deletePost } from "../services/postServices";
import { toast } from "react-toastify";
import { PostDetailModal } from "./PostDetailModal";

export const PostCard = ({ post }) => {
  const images = post.images || [];
  const [showModal, setShowModal] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const idAuthUser = useSelector((state) => state.authUser.authUser?.id);
  const dropdownRef = useRef(null);

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

  const openModal = () => setShowModal(true);

  const handleDeletePost = async (postId) => {
    try {
      await deletePost(postId);
      toast.success("Publicación eliminada con éxito!");
    } catch {
      toast.error("Ocurrió un error eliminando");
    } finally {
      setShowDeleteModal(false);
    }
  };

  // Cerrar dropdown al hacer click afuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowActions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {showModal && <ModalGallery images={images} onClose={() => setShowModal(false)} />}

      <div className="bg-lightbg shadow-sm hover:shadow-md border border-greybg rounded-2xl p-6 transition overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-4 min-w-0">
            <img
              src={post.user.avatar}
              alt="avatar"
              className="w-14 h-14 rounded-full object-cover border border-greybg shadow-sm shrink-0"
            />
            <div className="flex flex-col leading-tight min-w-0">
              <span className="font-semibold text-darktext text-lg truncate">
                {post.user.first_name} {post.user.last_name}
              </span>
              <span className="text-lighttext text-sm truncate">
                @{post.user.username}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 relative" ref={dropdownRef}>
            <div className="flex gap-2 items-center">
              <button className="text-xl">
                <RiAspectRatioLine onClick={() => setShowDetailModal(true)} />
              </button>
              {idAuthUser === post?.user?.id && (
                <button className="text-xl" onClick={() => setShowActions((prev) => !prev)}>
                  <BsThreeDots />
                </button>
              )}
              {showActions && (
                <PostActionsDropdown
                  onEdit={() => setShowUpdateModal(true)}
                  onDelete={() => setShowDeleteModal(true)}
                />
              )}
            </div>
            <span className="text-lighttext text-sm shrink-0 whitespace-nowrap">
              {new Date(post.created_at).toLocaleDateString()}
            </span>
          </div>
        </div>

        <div className="border-t border-greybg my-4"></div>

        {/* Title + Type */}
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

        {/* Content */}
        <p className="text-lighttext text-base leading-relaxed mb-5 whitespace-pre-line break-words">
          {post.content}
        </p>

        {/* Images */}
        {images.length > 0 && (
          <div
            className={`grid gap-3 ${
              images.length === 1 ? "grid-cols-1 place-items-center" : "grid-cols-2"
            }`}
          >
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
      </div>

      {showUpdateModal && (
        <PostForm
          isOpen={showUpdateModal}
          onClose={() => setShowUpdateModal(false)}
          isUpdate
          post={post}
        />
      )}
      {showDeleteModal && (
        <ModalDelete
          onClose={() => setShowDeleteModal(false)}
          onConfirm={() => handleDeletePost(post?.id)}
          title="Eliminar publicación"
        >
          <p>¿Estás seguro que quieres eliminar esta publicación?</p>
        </ModalDelete>
      )}
      {showDetailModal && (
        <PostDetailModal
          onClose={() => setShowDetailModal(false)}
          post={post}
        />
      )}
    </>
  );
};
