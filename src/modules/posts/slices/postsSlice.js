import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        byId: {},
        allIds: []
    },
    reducers: {
        setPosts(state, action){
            action.payload.forEach(post => {
                if(!state.byId[post.id]){
                    state.byId[post.id] = post;
                    state.allIds.push(post.id);
                }
            })
        }
    }
})

export const { setPosts } = postsSlice.actions;
export default postsSlice.reducer;





