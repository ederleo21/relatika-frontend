import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    generalFeed: {
        posts: [],
        page: 1,
        nextUrl: null, // url de la siguiente pagina
        hasMore: true, // Booleano de que si hay mas paginas 
        loading: false,
        error: null
    },
    userFeeds: {

    }
}

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setGeneralFeed(state, action){
            const { posts, page, nextUrl } = action.payload;
            state.generalFeed.posts = posts;
            state.generalFeed.page = page;
            state.generalFeed.nextUrl = nextUrl;
            state.generalFeed.hasMore = nextUrl ? true : false;
            state.generalFeed.loading = false;
        },
        addGeneralFeed(state, action){
            const { posts, page, nextUrl } = action.payload;
            state.generalFeed.posts = [...state.generalFeed.posts, ...posts];
            state.generalFeed.page = page;
            state.generalFeed.nextUrl = nextUrl;
            state.generalFeed.hasMore = nextUrl ? true : false;
            state.generalFeed.loading = false;
        },
        setGeneralLoading(state){
            state.generalFeed.loading = true;
            state.generalFeed.error = null;
        },
        setGeneralError(state, action){
            state.generalFeed.error = action.payload;
            state.generalFeed.loading = false;
        }
    }
})

export const {
    setGeneralFeed,
    addGeneralFeed,
    setGeneralLoading,
    setGeneralError,
} = postsSlice.actions;

export default postsSlice.reducer;



/*

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    generalFeed: {
        posts: [],
        page: 1,
        hasMore: true,
        loading: false,
        error: null,
    },

    userFeeds: {
        // userId: { posts: [], page: 1, hasMore: true, loading: false, error: null }
    }
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        // ==========================
        // 📌 GENERAL FEED
        // ==========================
        setGeneralFeed(state, action) {
            const { posts, page, hasMore } = action.payload;
            state.generalFeed.posts = posts;
            state.generalFeed.page = page;
            state.generalFeed.hasMore = hasMore;
            state.generalFeed.loading = false;
            state.generalFeed.error = null;
        },

        addGeneralFeed(state, action) {
            const { posts, page, hasMore } = action.payload;
            state.generalFeed.posts.push(...posts);
            state.generalFeed.page = page;
            state.generalFeed.hasMore = hasMore;
            state.generalFeed.loading = false;
        },

        setGeneralLoading(state) {
            state.generalFeed.loading = true;
            state.generalFeed.error = null;
        },

        setGeneralError(state, action) {
            state.generalFeed.error = action.payload;
            state.generalFeed.loading = false;
        },

        // ==========================
        // 📌 USER FEEDS
        // ==========================
        setUserFeed(state, action) {
            const { userId, posts, page, hasMore } = action.payload;

            state.userFeeds[userId] = {
                posts,
                page,
                hasMore,
                loading: false,
                error: null,
            };
        },

        addUserFeed(state, action) {
            const { userId, posts, page, hasMore } = action.payload;

            if (!state.userFeeds[userId]) {
                state.userFeeds[userId] = {
                    posts: [],
                    page: 1,
                    hasMore: true,
                    loading: false,
                    error: null
                };
            }

            state.userFeeds[userId].posts.push(...posts);
            state.userFeeds[userId].page = page;
            state.userFeeds[userId].hasMore = hasMore;
        },

        setUserFeedLoading(state, action) {
            const userId = action.payload;

            if (!state.userFeeds[userId]) {
                state.userFeeds[userId] = {
                    posts: [],
                    page: 1,
                    hasMore: true,
                    loading: true,
                    error: null
                };
                return;
            }

            state.userFeeds[userId].loading = true;
            state.userFeeds[userId].error = null;
        },

        setUserFeedError(state, action) {
            const { userId, error } = action.payload;

            if (!state.userFeeds[userId]) return;

            state.userFeeds[userId].error = error;
            state.userFeeds[userId].loading = false;
        }
    },
});

export const {
    setGeneralFeed,
    addGeneralFeed,
    setGeneralLoading,
    setGeneralError,

    setUserFeed,
    addUserFeed,
    setUserFeedLoading,
    setUserFeedError,
} = postsSlice.actions;

export default postsSlice.reducer;


*/