
import { combineReducers } from "@reduxjs/toolkit";
import restaurantslice from "./slices/restaurantslice";

export const rootReducer = combineReducers({
    restaurants: restaurantslice
})