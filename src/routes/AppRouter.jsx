import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RegisterAndLogin } from '../modules/auth/pages/RegisterAndLoginPage'
import { Home } from '../modules/auth/pages/Home';
import { Layout } from '../modules/auth/components/Layout';

export const AppRouter = () => {

  return (
    <BrowserRouter>
        <Routes>
          {/* Rutas publicas */}
            <Route path='/' element={<RegisterAndLogin/>} />

          {/* Rutas privadas (despues de login, user en estado global) */}
            <Route element={<Layout/>} > 
              <Route path='/home' element={<Home/>} />
            </Route>

        </Routes>
    </BrowserRouter>
  )
}
