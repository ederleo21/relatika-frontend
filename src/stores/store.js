import { configureStore } from "@reduxjs/toolkit";
import authUserSlice from '../modules/auth/slices/authUserSlice'
import postSlice from '../modules/posts/slices/postSlice'

export const store = configureStore({
    reducer: {
        authUser: authUserSlice,
        post: postSlice,
    }
})