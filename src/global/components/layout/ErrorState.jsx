import { AiOutlineWarning, AiOutlineWifi } from "react-icons/ai"
import { MdLockOutline, MdSearchOff, MdErrorOutline } from "react-icons/md"
import { BiServer } from "react-icons/bi"

export const ErrorState = ({ error }) => {
    if (!error) return null
    const {status, message} = error

    const errorTypes = {
      401: {
        icon: <MdLockOutline className="w-16 h-16 text-yellow-500" />,
        title: "No autorizado",
        description: "No tienes permiso para acceder a este recurso."
      },
      403: {
        icon: <MdLockOutline className="w-16 h-16 text-red-500" />,
        title: "Acceso denegado",
        description: "Tu cuenta no tiene los permisos necesarios."
      },
      404: {
        icon: <MdSearchOff className="w-16 h-16 text-blue-500" />,
        title: "No encontrado",
        description: "El recurso que buscas no existe o fue movido."
      },
      500: {
        icon: <BiServer className="w-16 h-16 text-red-600" />,
        title: "Error interno",
        description: "Hubo un problema en el servidor. Inténtalo más tarde."
      },
      network: {
        icon: <AiOutlineWifi className="w-16 h-16 text-gray-500" />,
        title: "Sin conexión",
        description: "Verifica tu conexión a internet."
      },
      default: {
        icon: <AiOutlineWarning className="w-16 h-16 text-gray-500" />,
        title: "Error desconocido",
        description: message
      }
    }

  // Si no tiene status y es un error de red (Axios normalmente lo marca sin response)
  const errorType = !error.status && error.name === "AxiosError"
    ? errorTypes.network
    : errorTypes[status] || { ...errorTypes.default, description: message }

  return (
    <div className="flex flex-col items-center justify-center h-96 text-center p-6 bg-darktext/30 rounded-2xl shadow-md">
      <div className="mb-4">
        {errorType.icon}
      </div>
      <h2 className="text-2xl font-bold mb-2">{errorType.title}</h2>
      <p className="text-gray-400 max-w-md">{errorType.description}</p>

      <button
        onClick={() => window.location.reload()}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all"
      >
        Reintentar
      </button>
    </div>
  )
}
