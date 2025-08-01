import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RegisterAndLogin } from '../modules/auth/pages/RegisterAndLogin'
import { Home } from '../modules/auth/pages/Home';

export const AppRouter = () => {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<RegisterAndLogin/>} />
            <Route path='/home' element={<Home/>} />
        </Routes>
    </BrowserRouter>
  )
}
