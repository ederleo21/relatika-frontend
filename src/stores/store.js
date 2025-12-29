import { configureStore } from "@reduxjs/toolkit";
import authUserSlice from '../modules/auth/slices/authUserSlice'
import usersSlice from '../modules/users/slices/usersSlice';
import postsSlice from "../modules/posts/slices/postsSlice";
import feedsSlice from "../modules/posts/slices/feedsSlice";

export const store = configureStore({
    reducer: {
        authUser: authUserSlice,
        users: usersSlice,
        posts: postsSlice,
        feeds: feedsSlice,
    }
})