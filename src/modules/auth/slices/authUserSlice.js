import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    authUser: null,
    loading: false,
    error: null
}

const authUserSlice = createSlice({
    name: 'authUser',
    initialState,
    reducers: {
        setAuthUser(state, action){
            state.authUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        setLoading(state){
            state.loading = true;
            state.error = null;
        },
        setError(state, action){
            state.error = action.payload;
            state.loading = false;
        },
        clearAuthUser(state){
            state.authUser = null;
            state.loading = false;
            state.error = null;
        }
    }
})

export const { setAuthUser, setLoading, setError, clearAuthUser } = authUserSlice.actions;
export default authUserSlice.reducer;