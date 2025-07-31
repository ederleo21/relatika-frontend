import { api } from "../../../services/api";
import { endpoints } from "../../../services/endpoints";

export const getUserProfile = async() => {
    const response = await api.get(endpoints.users.profile)
    //logica de redux
    return response.data
}

