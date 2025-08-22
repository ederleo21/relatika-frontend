import { api } from '../../../services/api'
import { endpoints } from '../../../services/endpoints'

export const createPost = async(values) => {
    const res = await api.post(endpoints.posts.createPost, values)
    return res.data
}   