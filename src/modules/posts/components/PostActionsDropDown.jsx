import { BsTrash, BsPencil } from "react-icons/bs";

export const PostActionsDropdown = ({ onEdit, onDelete }) => {

  return (
    <div className="absolute right-0 top-10 w-40 bg-white border border-greybg rounded-xl shadow-lg overflow-hidden z-50">
      
      {/* Update */}
      <button
        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-darktext hover:bg-greybg transition"
        onClick={onEdit}
      >
        <BsPencil className="text-base" />
        Actualizar
      </button>

      <div className="border-t border-greybg"></div>

      {/* Delete */}
      <button
        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition"
        onClick={onDelete}
      >
        <BsTrash className="text-base" />
        Eliminar
      </button>
    </div>
  );
};
