import { createSlice } from "@reduxjs/toolkit";

const feedsSlice = createSlice({
    name: "feeds",
    initialState: {
        global: {
            ids: [],
            loading: false,
            error: null,
            hasMore: true
        },
        byUser: {}
    },
    reducers: {
        //Manejo de global feed
        setGlobalFeed(state, action){
            state.global.loading = false;
            state.global.ids = action.payload;
        },
        startGlobalFeed(state){
            state.global.loading = true;
            state.global.error = null;
        },
        setGlobalFeedError(state, action){
            state.global.loading = false;
            state.global.error = action.payload;
        },


        // Manejo de feed de un usuario
        setUserFeed(state, action){
            const { userId, ids } = action.payload;
            state.byUser[userId] = {
                ids, 
                loading: false,
                error: null,
                hasMore: true
            }
        },
        startUserFeed(state, action){
            const userId = action.payload;
            state.byUser[userId] = {
                ids: [],
                loading: true,
                error: null,
                hasMore: true
            }
        },
        setUserFeedError(state, action){
            const { userId, error } = action.payload;
            state.byUser[userId].loading = false;
            state.byUser[userId].error = error;
        }
    }
})

export const { setGlobalFeed, startGlobalFeed, setGlobalFeedError, setUserFeed } = feedsSlice.actions;
export default feedsSlice.reducer;