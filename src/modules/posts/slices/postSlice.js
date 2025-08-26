import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    feed: [],
    feedUser: {},
    loading: false,
    error: null
}

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        setFeed(state, action){
            state.feed = action.payload
            state.loading = false
            state.error = null
        },
        addFeed(state, action){
            state.feed = [...feed, ...action.payload]
            state.loading = false
            state.error = null
        },
        setFeedUser(state, action){
            const { userId, posts } = action.payload
            state.feedUser[userId] = posts;
            state.loading = false;
            state.error = null;
        },
        addFeedUser(state, action){
            const { userId, posts } = action.payload
            state.feedUser[userId] = [...state.feedUser[userId], ...posts]
            state.loading = false
            state.error = null
        },
        setLoading(state){
            state.loading = true
            state.error = null
        },
        setError(state, action){
            state.error = action.payload
            state.loading = false
        }
    }
})

export const { setFeed, addFeed, setFeedUser, addFeedUser, setLoading, setError } = postSlice.actions;
export default postSlice.reducer;