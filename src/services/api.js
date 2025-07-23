import axios from 'axios'

//Instancia de axios para llamadas a la API
const api = axios.create({
    baseURL: 'http://localhost:8000/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

//Intercepta cada llamada a la API para poner el token access
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;