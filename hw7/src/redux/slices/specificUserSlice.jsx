import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (id, thunkApi) => { //id вместо _
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`); //получение конкретного пользователя с id
            if (!response.ok) {
                throw new Error('Something go wrong')
            }
            return await response.json();        
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
})

const initialState = {
    user: [],
    loadingSpecificUser: false,
    errorSpecificUser: null,
}
const specificUserSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{},
    extraReducers:
        (builder) => {
            builder
                .addCase(fetchUser.pending, (state) => {
                    state.loadingSpecificUser = true;
                    state.errorSpecificUser = null;
                })
                .addCase(fetchUser.fulfilled, (state, action) => {
                    state.loadingSpecificUser = false;
                    state.user = action.payload;
                })
                .addCase(fetchUser.rejected, (state, action) => {
                    state.loadingSpecificUser = false;
                    state.errorSpecificUser = action.payload;
                })
    }
});
export const {fetchUserRequest, fetchUserSuccess, fetchUserFailure} = specificUserSlice.actions;
export default specificUserSlice.reducer;