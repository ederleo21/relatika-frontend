import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'

//Componente que renderiza un navbar y abajo las paginas. 
export const MainLayout = () => {
  return (
    <>
        <header>
            <Navbar/>
        </header>

       <main className='pt-[150px] md:pt-[118px]'>
            <Outlet />
        </main>
    </>
  )
}
