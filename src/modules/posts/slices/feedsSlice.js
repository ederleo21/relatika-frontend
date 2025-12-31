import { createSlice } from "@reduxjs/toolkit";

export const feedState = {
    ids: [],
    loading: false,
    error: null,
    hasMore: true
}

const feedsSlice = createSlice({
    name: "feeds",
    initialState: {
        global: {...feedState},
        byUser: {}
    },
    reducers: {
        //Manejo de global feed
        setGlobalFeed(state, action){
            state.global.ids = action.payload;
            state.global.loading = false;
        },
        startGlobalFeed(state){
            state.global.loading = true;
            state.global.error = null;
        },
        setGlobalFeedError(state, action){
            state.global.error = action.payload;
            state.global.loading = false;
        },


        // Manejo de feed de un usuario
        setUserFeed(state, action){
            const { userId, ids } = action.payload;
            if(!state.byUser[userId]){
                state.byUser[userId] = {...feedState};
            }

            state.byUser[userId].ids = ids;
            state.byUser[userId].loading = false;
        },
        
        startUserFeed(state, action){
            const userId = action.payload;
            if(!state.byUser[userId]){
                state.byUser[userId] = {...feedState};
            }

            state.byUser[userId].loading = true;
            state.byUser[userId].error = null;
        },

        setUserFeedError(state, action){
            const { userId, error } = action.payload;
            if(!state.byUser[userId]) return;

            state.byUser[userId].error = error;
            state.byUser[userId].loading = false;
        }
    }
})

export const { 
    setGlobalFeed, 
    startGlobalFeed, 
    setGlobalFeedError, 
    setUserFeed,
    startUserFeed,
    setUserFeedError  } = feedsSlice.actions;
export default feedsSlice.reducer;