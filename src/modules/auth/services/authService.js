import { api } from "../../../services/api";
import { endpoints } from "../../../services/endpoints";

//Peticiones HTTP a API. Módulo de autenticación

export const registerUser = async(userData) => {
    const response = await api.post(endpoints.auth.register, userData)
    return response.data
}