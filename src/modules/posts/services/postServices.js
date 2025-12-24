import { api } from '../../../services/api'
import { endpoints } from '../../../services/endpoints'

export const createPost = async(values) => {
    const res = await api.post(endpoints.posts.createPost, values)
    return res.data
}   

export const getListPost = async(url) => {
    const res = await api.get(url);
    return res.data
}

export const updatePost = async(postId, values) => {
    const res = await api.patch(`${endpoints.posts.updatePost}${postId}/` , values);
    return res.data
}

export const deletePost = async(postId) => {
    const res = await api.delete(`${endpoints.posts.deletePost}${postId}/`)
    return res.data
}