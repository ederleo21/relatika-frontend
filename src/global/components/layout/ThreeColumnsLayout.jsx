import React from 'react'

const ThreeColumnsLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 w-full h-screen bg-lightbg font-poppins">
      {children}
    </div>
  )
}

const Left = ({ children }) => (
  <div className="col-span-3 p-4 border-r-2 border-gray-300 overflow-y-auto scrollbar-hide bg-greybg">
    {children || <span className="text-gray-400">Columna izquierda vacía</span>}
  </div>
)

const Center = ({ children }) => (
  <div className="col-span-6 p-4 overflow-y-auto scrollbar-hide">
    {children || <span className="text-gray-400">Columna central vacía</span>}
  </div>
)

const Right = ({ children }) => (
  <div className="col-span-3 p-4 border-l-2 border-gray-300 overflow-y-auto scrollbar-hide bg-greybg">
    {children || <span className="text-gray-400">Columna derecha vacía</span>}
  </div>
)


ThreeColumnsLayout.Left = Left
ThreeColumnsLayout.Center = Center
ThreeColumnsLayout.Right = Right

export default ThreeColumnsLayout
