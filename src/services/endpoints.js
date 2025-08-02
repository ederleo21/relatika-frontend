//Endpoints de app divididos por modulos.

export const endpoints = {
    auth: {
        register: "/users/register/",
        login: "/users/login/",
        refresh: "/users/refresh/",
        logout: "/users/logout/",
        profile: "/users/profile/" //get, update, delete user auth
    },
    users: {
        list: "/users/users/"
    }
}