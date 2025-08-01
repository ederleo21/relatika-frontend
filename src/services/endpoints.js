//Endpoints de app divididos por modulos.

export const endpoints = {
    auth: {
        register: "/users/register/",
        login: "/users/login/",
        refresh: "/users/refresh/",
        logout: "/users/logout/"
    },
    users: {
        profile: "/users/profile/",
        list: "/users/users/"
    }
}