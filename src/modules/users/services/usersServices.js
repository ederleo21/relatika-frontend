import { api } from "../../../services/api"
import { endpoints } from "../../../services/endpoints"

export const updateProfile = async(values) => {
    const res = await api.put(endpoints.users.profile, values)
    return res.data
}

export const getUser = async(id) => {
    const res = await api.get(`${endpoints.users.user}${id}`)
    return res.data
}

export const followUser = async(values) => {
    const res = await api.post("/users/follow/", values)
    return res.data
}

export const unFollowUser = async(userId) => {
    const res = await api.delete(`/users/follow/?userId=${userId}`)
    return res.data
}