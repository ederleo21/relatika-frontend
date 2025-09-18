import { api } from "../../../services/api"
import { endpoints } from "../../../services/endpoints"

export const updateProfile = async(values) => {
    const res = await api.put(endpoints.users.profile, values)
    return res.data
}

export const getUser = async(userId) => {
    const res = await api.get(`${endpoints.users.user}${userId}`)
    return res.data
}

export const followUser = async(values) => {
    const res = await api.post(endpoints.users.followUser, values)
    return res.data
}

export const unFollowUser = async(userId) => {
    const res = await api.delete(`${endpoints.users.unFollowUser}?userId=${userId}`)
    return res.data
}

export const getListFollowers = async(userId) => {
    const res = await api.get(`${endpoints.users.listFollowers}${userId}`)
    return res.data
}

export const getListFollowing = async(userId) => {
    const res = await api.get(`${endpoints.users.listFollowing}${userId}`)
    return res.data
}