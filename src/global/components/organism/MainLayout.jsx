import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { AnimatePresence } from "framer-motion";

//Componente que renderiza un navbar y abajo las paginas. 
export const MainLayout = () => {
  const location = useLocation();

  return (
    <>
        <header>
            <Navbar/>
        </header>

        <AnimatePresence mode="wait">
          <main className='pt-[150px] md:pt-[118px]'>
               <Outlet key={location.pathname} />
           </main>
        </AnimatePresence>
    </>
  )
}
