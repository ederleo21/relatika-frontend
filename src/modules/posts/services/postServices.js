import { api } from '../../../services/api'
import { endpoints } from '../../../services/endpoints'

export const createPost = async(values) => {
    const res = await api.post(endpoints.posts.createPost, values)
    return res.data
}   

export const getListPost = async(userId = null) => {
    const url = userId ? endpoints.posts.listPost + userId : endpoints.posts.listPost 
    const res = await api.get(url);
    return res.data
}