import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import img from '../../../assets/icon_relatikaa.png'
import { BorderDesign } from '../../../global/components/atoms/BorderDesign'
import { RegisterForm } from '../components/RegisterForm'
import { LoginForm } from '../components/LoginForm'

export const RegisterAndLogin = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="flex h-screen font-poppins">
      <div className="hidden md:flex flex-1 bg-greybg flex-col justify-center items-center px-10 text-center">
        <h1 className="text-6xl xl:text-7xl font-bold text-darktext mb-4 font-lora">
          RELATIKA
        </h1>
        <p className="text-base lg:text-lg xl:text-xl text-lighttext max-w-md">
          Un espacio pensado para compartir perspectivas y enriquecer el diálogo.
        </p>
        <img
          src={img} 
          alt="Logo Relatika"
          className="w-40 h-40 xl:w-60 xl:h-60 object-contain"
        />
      </div>
      
      <div className="flex flex-1 bg-lightbg justify-center items-center relative px-5">
        <div className="relative w-full max-w-lg p-8 rounded-lg shadow-xl bg-lightbg">
          <BorderDesign/>

          <AnimatePresence mode="wait">
            <motion.div key={isLogin ? "login" : "register"} initial={{ opacity: 0, x: isLogin ? 50 : -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: isLogin ? -50 : 50 }} transition={{ duration: 0.3 }}>
              <h1 className="font-lora text-darktext text-3xl font-bold mb-6 text-center">
                {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
              </h1>
              {isLogin ? <LoginForm /> : <RegisterForm />}
            </motion.div>
          </AnimatePresence>

          <p className="mt-6 text-center text-lighttext">
            {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes una cuenta?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-indigo_light font-semibold hover:underline"
            >
              {isLogin ? "Regístrate aquí" : "Inicia sesión aquí"}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}