import React from 'react'

export const ProfileUserStatsAndFriends = () => {
  return (
    <div className="flex-1 flex flex-col space-y-6 min-w-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 bg-gray-50 rounded-xl p-4 shadow-sm min-w-0">
            {[
              { value: "120", label: "Posts" },
              { value: "450", label: "Seguidores" },
              { value: "98", label: "Siguiendo" },
              { value: "1.2k", label: "Likes" },
              { value: "320", label: "Comentarios" },
              { value: "15", label: "Proyectos" },
            ].map((item, i) => (
              <div key={i} className="text-center min-w-0">
                <p className="text-2xl font-bold text-indigo-600 truncate">{item.value}</p>
                <p className="text-sm text-gray-500 truncate">{item.label}</p>
              </div>
            ))}
        </div>

        <div className="bg-gray-50 rounded-xl shadow p-4 mt-4">
          <h2 className="text-lg font-semibold text-darktext mb-4">Amigos Destacados</h2>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {[
              { name: "María López", username: "mlopez", avatar: "https://i.pravatar.cc/150?img=5"},
              { name: "Carlos Pérez", username: "cperez", avatar: "https://i.pravatar.cc/150?img=10"},
              { name: "Lucía Gómez", username: "lgomez", avatar: "https://i.pravatar.cc/150?img=15"},
              { name: "Andrés Díaz", username: "adiaz", avatar: "https://i.pravatar.cc/150?img=20"},
              { name: "Sofía Ramírez", username: "sramirez", avatar: "https://i.pravatar.cc/150?img=25"},
            ].map((friend, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-32 bg-white rounded-xl shadow p-3 flex flex-col items-center text-center hover:scale-105 transition-transform"
              >
                <img
                  src={friend.avatar}
                  alt={friend.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500 mb-2"
                />
                <p className="text-sm font-semibold text-darktext truncate">{friend.name}</p>
                <p className="text-xs text-gray-500 truncate">@{friend.username}</p>
              </div>
            ))}
            </div>
        </div>
    </div>
  )
}