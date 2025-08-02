import { AppRouter } from "./routes/AppRouter"
import { ToastContainer } from 'react-toastify'
import { useFetchProfile } from "./modules/auth/hooks/useFetchProfile"

export const App = () => {
  return (
    <>
      <AppRouter/>
      <ToastContainer 
        autoClose={1500} 
        toastClassName="font-poppins font-semibold" 
        position="top-center"
      />
    </>
  )
}