import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { RegisterAndLogin } from '../modules/auth/pages/RegisterAndLoginPage'
import { AuthLayout } from '../modules/auth/components/AuthLayout';
import { MainLayout } from '../global/components/organism/MainLayout';
import { HomePage } from '../modules/main/pages/HomePage';
import { ProfileUserPage } from '../modules/users/pages/ProfileUserPage';

export const AppRouter = () => {

  return (
    <BrowserRouter>
        <Routes>
          {/* Rutas publicas */}
            <Route path='/' element={<RegisterAndLogin/>} />

          {/* Rutas privadas (despues de login, user en estado global) */}
            <Route element={<AuthLayout/>}> 

              {/* Paginas con navbar */}
              <Route element={<MainLayout/>} >
                <Route path='/home' element={<HomePage/>} />
                <Route path='/profile' element={<ProfileUserPage/>} />
              </Route>

            </Route>

        </Routes>
    </BrowserRouter>
  )
}
