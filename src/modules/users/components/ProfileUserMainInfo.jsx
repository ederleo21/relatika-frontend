import { useState } from "react"
import { FaRegEdit } from "react-icons/fa";

import { IconAnimation } from "../../../global/components/atoms/IconAnimation";
import { ProfileUpdateForm } from "./ProfileUpdateForm";

export const ProfileUserMainInfo = ({ user, isProfile }) => {
    const [isOpen, setIsOpen] = useState(false);
    const {first_name, last_name, email, username, avatar, bio, birth_date} = user || {};

  return (
    <div className="flex-1 flex flex-col space-y-6 min-w-0">
      <div className="flex-1 flex flex-col space-y-6 min-w-0">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 w-full min-w-0">
          {avatar ? (
            <img src={avatar} alt="avatar" 
            className="w-36 h-36 rounded-full object-cover border-4 border-indigo-500 shadow-md flex-shrink-0"
            />
            ) : (
            <div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-sm font-semibold shadow-md flex-shrink-0">
              Sin avatar
            </div>
            )}
          <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-xl shadow p-4 bg-lightbg min-w-0 break-words gap-3">
            <div className="flex justify-end sm:hidden">
              <button className="flex items-center justify-center text-darktext rounded-full shadow transition-transform hover:scale-105">
                <FaRegEdit className="text-2xl sm:text-3xl" />
              </button>
            </div>
<div className="flex flex-wrap items-center gap-2 w-full min-w-0">
  <div className="flex-1 min-w-0">
    <h1 className="text-3xl font-bold text-darktext font-lora break-words">
      {first_name || "Sin nombre"} {last_name || ""}
    </h1>
    <p className="text-lg text-lighttext pt-2 break-words">{username || "Sin username"}</p>
  </div>
  <div className="flex-shrink-0 w-full sm:w-auto">
    <button className="w-full sm:w-auto mt-2 sm:mt-0 px-4 py-2 bg-indigo-500 text-white rounded-full shadow hover:bg-indigo-600 transition">
      Siguiendo
    </button>
  </div>
</div>
            <div className="hidden sm:flex sm:self-start sm:justify-end">
                {isProfile && (
                  <IconAnimation onClick={() => setIsOpen(true)}>
                    <FaRegEdit/>
                  </IconAnimation>
                )}
                <ProfileUpdateForm isOpen={isOpen} onClose={() => setIsOpen(false)} title="Actualizar Perfil" authUser={user}/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full">
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
  )
}
