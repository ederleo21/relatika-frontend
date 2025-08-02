import { configureStore } from "@reduxjs/toolkit";
import authUserSlice from '../modules/auth/slices/authUserSlice'

export const store = configureStore({
    reducer: {
        authUser: authUserSlice,
    }
})



