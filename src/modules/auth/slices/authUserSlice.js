import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    authUser: null,
    followingIds: [],
    loading: false,
    error: null
}

const authUserSlice = createSlice({
    name: 'authUser',
    initialState,
    reducers: {
        setAuthUser(state, action){
            const { following, ...userData } = action.payload;
            state.authUser = userData;
            state.followingIds = following || []
            state.loading = false;
            state.error = null;
        },
        addIdFollowing(state, action){
            state.followingIds.push(action.payload)
            state.authUser.following_count += 1
        },
        removeIdFollowing(state, action){
            state.followingIds = state.followingIds.filter(id => id != action.payload)
            state.authUser.following_count -= 1
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

export const { setAuthUser, addIdFollowing, removeIdFollowing, setLoading, setError, clearAuthUser } = authUserSlice.actions;
export default authUserSlice.reducer;