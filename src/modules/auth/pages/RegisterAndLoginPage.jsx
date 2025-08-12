import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import img from '../../../assets/RELATIKA.png'
import { BorderDesign } from '../../../global/components/atoms/BorderDesign'
import { RegisterForm } from '../components/RegisterForm'
import { LoginForm } from '../components/LoginForm'

export const RegisterAndLogin = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="flex h-screen font-poppins">
      <div className="hidden md:flex flex-1 bg-greybg justify-center items-center">
        <img
          src={img}
          alt="Decoración"
          className="w-full h-auto rounded-lg shadow-lg object-cover"
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
