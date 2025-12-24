//Endpoints de app divididos por modulos.

export const endpoints = {
    auth: {
        register: "/auth/register/",
        login: "/auth/login/",
        refresh: "/auth/refresh/",
        logout: "/auth/logout/",
    },
    global: {
        searchResults: "/users/searchResults/"
    },
    users: {
        profile: "/users/profile/", //get, update, delete de user autenticado
        user: "/users/user/", //perfil de un usuario (solo lectura)
        followUser: "/users/follow/",
        unFollowUser: "/users/follow/",
        listFollowers: "/users/followers/",
        listFollowing: "/users/following/"
    },
    posts: {
        createPost: "/posts/posts/",
        listPost: "/posts/posts/",
        updatePost: "/posts/post/",
        detailPost: "posts/post/",
        deletePost: "/posts/post/"
    }
}