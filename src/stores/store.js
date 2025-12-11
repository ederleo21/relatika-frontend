import { configureStore } from "@reduxjs/toolkit";
import authUserSlice from '../modules/auth/slices/authUserSlice'
import usersSlice from '../modules/users/slices/usersSlice';
import PostsSlice from '../modules/posts/slices/postSlice';

export const store = configureStore({
    reducer: {
        authUser: authUserSlice,
        users: usersSlice,
        posts: PostsSlice,
    }
})