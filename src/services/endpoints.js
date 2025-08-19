//Endpoints de app divididos por modulos.

export const endpoints = {
    auth: {
        register: "/auth/register/",
        login: "/auth/login/",
        refresh: "/auth/refresh/",
        logout: "/auth/logout/",
    },
    users: {
        profile: "/users/profile/", //get, update, delete de user auth
    }
}