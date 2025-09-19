import React from 'react'

export const CardUser = ({ user }) => {
  return (
    <div
      key={user.id}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col items-center text-center font-poppins"
    >

      <div className="w-28 h-28 rounded-full overflow-hidden mt-5 border-2 border-indigo_light">
        <img
          src={user.avatar || "/default-avatar.png"}
          alt={user.first_name + " " + user.last_name}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="font-lora font-semibold text-xl text-darktext mt-4">
        {user.first_name} {user.last_name}
      </h3>

      <p className="text-lighttext mb-4">@{user.username}</p>

      <div className="flex gap-3 mb-5">
        <button className="bg-indigo_light text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-600 transition">
          Seguir
        </button>
        <button className="bg-greybg text-darktext px-4 py-2 rounded-full text-sm font-medium hover:bg-lightbg transition">
          Ver Perfil
        </button>
      </div>
    </div>
  );
};
