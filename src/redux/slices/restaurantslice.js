const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    isLoading: false
}

const restaurantSlice = createSlice({
    name: "restaurants"
})