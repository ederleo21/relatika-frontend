import axios from 'axios'
import { performLogout } from '../modules/auth/logic/handleLogout';
import { store } from '../stores/store';
import { clearAuthUser } from '../modules/auth/slices/authUserSlice';

//Configuración de variable con BASE_URL e interceptores para manejar tokens

//Instancia de axios para llamadas a la API
export const api = axios.create({
    baseURL: 'http://localhost:8000/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, //Permite que se envien cookies
});


//Agrega el token de acceso a cada petición saliente
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


//Interceptor para manejar errores de autenticación y renovar el access. Cuando se intenta hacer login no se renueva.
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    const isLoginEndpoint = originalRequest.url.includes('/login/');
    const isRefreshEndpoint = originalRequest.url.includes('/refresh/');

    if (error.response?.status === 401 && !originalRequest._retry && !isLoginEndpoint && !isRefreshEndpoint ){
      originalRequest._retry = true;

      try {
        const res = await axios.post(
          'http://127.0.0.1:8000/api/v1/users/refresh/',
          {},
          { withCredentials: true }
        );

        const newAccess = res.data.access;
        localStorage.setItem('accessToken', newAccess);
        originalRequest.headers.Authorization = `Bearer ${newAccess}`;

        return api(originalRequest);

      } catch (err) {
        console.error('Error al renovar el token:', err);
        await performLogout();
        store.dispatch(clearAuthUser())
        window.location.href = "/"
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);
 