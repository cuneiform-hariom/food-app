import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { isLoadingToggle } from "../slices/restaurantslice";

export const restaurantRegister = createAsyncThunk(
    "restaurant/register",
    async (data, { dispatch }) => {
        try {
            dispatch(isLoadingToggle(true));
            const response = await axios({
                method: "POST",
                url: `/api/restaurants/register`,
                data: data,
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.status === 200) {
                toast.success(response?.data?.message);
                dispatch(isLoadingToggle(false));
                return response?.data;
            } else {
                toast.error(response?.data?.message);
                dispatch(isLoadingToggle(false));
            }
        } catch (err) {
            dispatch(isLoadingToggle(false));
            toast.error(err);
        }
    }
)

export const restaurantLogin = createAsyncThunk(
    "restaurant/login",
    async (data, { rejectWithValue, fulfillWithValue, dispatch }) => {
        try {
            dispatch(isLoadingToggle(true));
            const response = await axios({
                method: "POST",
                url: `/api/restaurants/login`,
                data: data,
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.status === 200) {
                toast.success(response?.data?.message, options);
                dispatch(isLoadingToggle(false));
                return fulfillWithValue(response?.data);
            } else {
                toast.error(response?.data?.message, options);
                dispatch(isLoadingToggle(false));
                return rejectWithValue();
            }
        } catch (err) {
            dispatch(isLoadingToggle(false));
            return rejectWithValue();
        }
    }
);