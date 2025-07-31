import { AppRouter } from "./routes/AppRouter"
import { ToastContainer } from 'react-toastify'
import { useUserProfile } from "./global/hooks/useUserProfile"

export const App = () => {
  const { profile } = useUserProfile()
  console.log(profile)

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