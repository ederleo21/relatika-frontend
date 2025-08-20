export const IconAnimation = ({ children, ...props }) => {
  return (
    <button 
      className="text-2xl p-2 text-darktext rounded-full hover:bg-indigo_light hover:text-lightbg transition-colors"
      {...props}
      >
      { children }
    </button>
  )
}
