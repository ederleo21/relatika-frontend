import { api } from "../../../services/api";
import { endpoints } from "../../../services/endpoints";

//Peticiones HTTP a API. Módulo de autenticación
export const registerUser = async(userData) => {
    const response = await api.post(endpoints.auth.register, userData)
    return response.data
}

export const loginUser = async(data) => {
    const response = await api.post(endpoints.auth.login, data)
    const accessToken = response.data.access;
    if(accessToken){
        localStorage.setItem('accessToken', accessToken);
    }
    return response.data
}

export const logout = async() => {
    return await api.post(endpoints.auth.logout, {}, { withCredentials: true });
}

export const getProfile = async() => {
    const response = await api.get(endpoints.auth.profile)
    return response.data
}