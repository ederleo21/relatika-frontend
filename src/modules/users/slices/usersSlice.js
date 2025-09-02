import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

//Como identificar cada identidad (por id)
const usersAdapter = createEntityAdapter({
   selectId: (item) => item.id, 
});

//crea ids y entities
const initialState = usersAdapter.getInitialState({
    loading: false,
    error: null,
})

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers: (state, action) => {
          usersAdapter.setAll(state, action.payload);
          state.loading = false;
          state.error = null;
        },
        upsertUser: (state, action) => {
          usersAdapter.upsertOne(state, action.payload);
          state.loading = false;
          state.error = null
        },
        setLoading: (state) => {
          state.loading = true;
          state.error = null;
        },
        setError: (state, action) => {
          state.error = action.payload;
          state.loading = false;
        },
        clearUsers: (state) => {
          usersAdapter.removeAll(state);
          state.loading = false;
          state.error = null;
        },
    } 
})

export const { setUsers, upsertUser, setLoading, setError, clearUsers } = usersSlice.actions;
export default usersSlice.reducer;

export const {
    selectById: selectUserById,
    selectAll: selectAllUsers, 
    selectIds: selectUserIds,
} = usersAdapter.getSelectors(state => state.users);