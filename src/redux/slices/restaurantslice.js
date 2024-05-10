import { restaurantLogin } from "../apis/restaurantapi";

const { createSlice } = require("@reduxjs/toolkit");

const restaurantSlice = createSlice({
    name: "restaurants",
    initialState: {
        isLoading: false,
        token: null,
        email: null
    },
    reducers: {
        isLoadingToggle: (state, action) =>
        (state = {
            ...state,
            isLoading: action.payload,
        }),
    },
    extraReducers: (builder) => {
        builder.addCase(restaurantLogin.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(restaurantLogin.fulfilled, (state, action) => {
            state.isLoading = false;
            state.token = action.payload.token;
            state.email = action.payload.data.email;
        });
        builder.addCase(restaurantLogin.rejected, (state, action) => {
            state.isLoading = false;
        });
    }
})

export const {
    isLoadingToggle
} = restaurantSlice.actions

export default restaurantSlice.reducer;