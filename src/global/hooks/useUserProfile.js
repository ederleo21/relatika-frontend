import React, { useEffect, useState } from 'react'

import { getUserProfile } from '../../modules/users/services/usersService'

export const useUserProfile = () => {
    const [profile, setProfile] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem("accessToken")
        if (!token) return 

        const getProfile = async() => {
            try{
                const res = await getUserProfile()
                setProfile(res)
            }catch(err){
                console.log("Error al traer el usuario!")
                // SI el token es falsificado:
                //Remover el access del local storage y redigir al login
            }
        }
        getProfile()
    }, [])

    return {
        profile
    }
}
