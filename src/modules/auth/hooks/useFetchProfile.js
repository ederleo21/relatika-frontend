import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getProfile } from '../services/authService'
import { setAuthUser, setLoading } from '../slices/authUserSlice'

export const useFetchProfile = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getUserProfile = async() => {
            dispatch(setLoading())
            try {
               const userAuth = await getProfile()
                dispatch(setAuthUser(userAuth))
            } catch(err){
                console.error("Error al obtener el usuario")
            }
        }
        getUserProfile()
    }, [dispatch])

  return null
}