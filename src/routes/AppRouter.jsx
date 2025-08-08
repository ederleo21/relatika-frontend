import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { RegisterAndLogin } from '../modules/auth/pages/RegisterAndLoginPage'
import { AuthLayout } from '../modules/auth/components/AuthLayout';
import { Home } from '../modules/main/pages/Home';

export const AppRouter = () => {

  return (
    <BrowserRouter>
        <Routes>
          {/* Rutas publicas */}
            <Route path='/' element={<RegisterAndLogin/>} />

          {/* Rutas privadas (despues de login, user en estado global) */}
            <Route element={<AuthLayout/>}> 
              <Route path='/home' element={<Home/>} />
            </Route>

        </Routes>
    </BrowserRouter>
  )
}
