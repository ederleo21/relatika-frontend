import { Spinner } from 'flowbite-react'

export const SectionLoader = () => {
  return (
    <div className="absolute inset-0 bg-white/50 z-10 flex items-center justify-center">
      <Spinner
        color="info"
        size="xl"
        light
        className="w-10 h-10"
        aria-label="Section loading spinner"
      />
    </div>
  )
}
