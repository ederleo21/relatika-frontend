import axios from 'axios'

//Configuración de variable con BASE_URL e interceptores para manejar tokens

//Instancia de axios para llamadas a la API
const api = axios.create({
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

//Interceptor para manejar errores de autenticación y renovar el access token
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
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
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;