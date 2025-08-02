import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { getProfile } from '../services/authService'
import { handleLogout } from '../logic/handleLogout'
import { setAuthUser, setLoading } from '../slices/authUserSlice'

export const useFetchProfile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const getUserProfile = async() => {
            
            //validacion opcional
            const access = localStorage.getItem("accessToken")
            if(!access){
                await handleLogout({ navigate, dispatch })
                return
            }
            
            dispatch(setLoading())
            try{
               const userAuth = await getProfile()
                dispatch(setAuthUser(userAuth))
            }catch(err){
                console.error("Error al obtener el usuario")
                await handleLogout({ navigate, dispatch });
            }
        }
        getUserProfile()
    }, [navigate])

  return null
}