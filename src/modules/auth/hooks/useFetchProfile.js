import { useEffect } from 'react'
import { getProfile } from '../services/authService'
import { handleLogout } from '../logic/handleLogout'
import { useNavigate } from 'react-router-dom'

export const useFetchProfile = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const getUserProfile = async() => {
            
            const access = localStorage.getItem("accessToken")
            if(!access){
                await handleLogout({ navigate })
                return
            }

            try{
                const res = await getProfile()
            }catch(err){
                console.error("Error al obtener el usuario")
                await handleLogout({ navigate });
            }
        }
        getUserProfile()
    }, [navigate])

  return null
}