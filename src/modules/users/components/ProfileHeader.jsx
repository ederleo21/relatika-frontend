import React from 'react'
import { useSelector } from 'react-redux'

export const ProfileHeader = () => {
    const authUser = useSelector(state => state.authUser.authUser)
    const {first_name, last_name, email, username, avatar, bio, birth_date} = authUser || {};


  return (
    <div className="w-full bg-lightbg font-poppins p-4 md:p-6">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full flex flex-col lg:flex-row gap-6 lg:gap-8">

<div className="flex-1 flex flex-col space-y-6 min-w-0">
  {/* Avatar + Nombre */}
  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 w-full min-w-0">
    {/* Avatar */}
    {avatar ? (
      <img
        src={avatar}
        alt="avatar"
        className="w-36 h-36 rounded-full object-cover border-4 border-indigo-500 shadow-md flex-shrink-0"
      />
    ) : (
      <div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-sm font-semibold shadow-md flex-shrink-0">
        Sin avatar
      </div>
    )}

    {/* Nombre + botón editar */}
    <div className="flex-1 flex items-center justify-between rounded-xl shadow p-4 bg-lightbg min-w-0 break-words">
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-darktext font-lora truncate">
          {first_name || "Sin nombre"} {last_name || ""}
        </h1>
        <p className="text-lg text-lighttext truncate">@{username || "Sin username"}</p>
      </div>
      <button className="flex items-center justify-center w-10 h-10 text-white rounded-full shadow transition-colors">
        ✏️
      </button>
    </div>
  </div>

  {/* Contacto + Bio en fila */}
  <div className="flex flex-col md:flex-row gap-4 w-full">
    {/* Contacto */}
    <div className="flex-1 rounded-xl shadow p-4 flex flex-col justify-center text-base bg-lightbg break-words">
      <h2 className="text-xl font-semibold text-darktext mb-2">Contacto</h2>
      {email || birth_date ? (
        <>
          {email && (
            <p className="flex items-center gap-2 text-lighttext truncate">
              <span className="text-indigo-500">📧</span> {email}
            </p>
          )}
          {birth_date && (
            <p className="flex items-center gap-2 text-lighttext truncate mt-1">
              <span className="text-pink-500">🎂</span> {birth_date}
            </p>
          )}
        </>
      ) : (
        <p className="text-gray-500 text-sm">
          Agrega tu correo electrónico y tu fecha de nacimiento para que tus amigos puedan contactarte y celebrarte.
        </p>
      )}
    </div>

    {/* Bio */}
    <div className="flex-1 rounded-xl shadow p-4 bg-gray-50 break-words">
      <h2 className="text-xl font-semibold text-darktext mb-2">Sobre mí</h2>
      {bio ? (
        <p className="text-base text-lighttext leading-relaxed break-words">{bio}</p>
      ) : (
        <p className="text-gray-500 text-sm">
          Agrega una breve descripción sobre ti para que tus amigos te conozcan mejor.
        </p>
      )}
    </div>
  </div>
</div>


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
                { name: "María López", username: "mlopez", avatar: "https://i.pravatar.cc/150?img=5" },
                { name: "Carlos Pérez", username: "cperez", avatar: "https://i.pravatar.cc/150?img=10" },
                { name: "Lucía Gómez", username: "lgomez", avatar: "https://i.pravatar.cc/150?img=15" },
                { name: "Andrés Díaz", username: "adiaz", avatar: "https://i.pravatar.cc/150?img=20" },
                { name: "Sofía Ramírez", username: "sramirez", avatar: "https://i.pravatar.cc/150?img=25" },
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
      </div>
    </div>
  )
}
