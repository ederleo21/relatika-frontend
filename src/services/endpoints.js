//Endpoints de app divididos por modulos.

export const endpoints = {
    auth: {
        register: "/users/register/",
        login: "/users/login/",
        refresh: "/users/refresh"
    },
    users: {
        list: "/users/users/"
    }
}