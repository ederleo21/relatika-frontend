import { Button } from "../atoms/Button"

export const ErrorState = ({ error }) => {
  if (!error) return null
  const { status, message } = error

  const errorTypes = {
    401: {
      emoji: "🔒",
      title: message,
      description: "No tienes permiso para acceder a este recurso."
    },
    403: {
      emoji: "⛔",
      title: message,
      description: "Tu cuenta no tiene los permisos necesarios."
    },
    404: {
      emoji: "🔍",
      title: message,
      description: "El recurso que buscas no fue encontrado o no existe."
    },
    500: {
      emoji: "💥",
      title: message,
      description: "Hubo un problema en el servidor. Inténtalo más tarde."
    }
  }

  const errorSelected = errorTypes[status] || {
    emoji: "❌",
    title: message,
    description: "Ocurrió un error inesperado."
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-[calc(100vh-80px)] bg-greybg font-poppins pt-28">
      <div className="bg-lightbg rounded-3xl shadow-lg p-10 w-full max-w-md flex flex-col items-center text-center">
        <div className="text-7xl mb-6">{errorSelected.emoji}</div>
        <h2 className="text-3xl font-bold mb-3 text-darktext">{errorSelected.description}</h2>
        <p className="text-lighttext mb-6 font-semibold text-lg">{errorSelected.title}</p>
        <Button text="Reintentar" onClick={() => window.location.reload()}
          className="bg-indigo_light hover:bg-indigo-700 transition-all shadow-md"
        />
      </div>
    </div>
  )
}
