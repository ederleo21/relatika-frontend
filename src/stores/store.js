import { configureStore } from "@reduxjs/toolkit";
import authUserSlice from '../modules/auth/slices/authUserSlice'
import usersSlice from '../modules/users/slices/usersSlice';

export const store = configureStore({
    reducer: {
        authUser: authUserSlice,
        users: usersSlice,
    }
})