import { Spinner } from 'flowbite-react'

export const PageLoader = ({ text = "Espere un momentico!" }) => {
  return (
    <div className="fixed inset-0 bg-white/60 z-50 flex flex-col items-center justify-center space-y-4">
      <Spinner
        color="pink"
        size="xl"
        light
        className="w-20 h-20"
        aria-label="Page loading spinner"
      />
      <p className="font-poppins font-semibold text-pink-500 text-lg">{text}</p>
    </div>
  )
}