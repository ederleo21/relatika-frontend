import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RegisterAndLogin } from '../modules/auth/pages/RegisterAndLogin'

export const AppRouter = () => {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<RegisterAndLogin/>} />
        </Routes>
    </BrowserRouter>
  )
}
