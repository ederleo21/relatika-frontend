import { api } from "../../../services/api"
import { endpoints } from "../../../services/endpoints"

export const updateProfile = async(values) => {
    const res = await api.put(endpoints.users.profile, values)
    return res.data
}