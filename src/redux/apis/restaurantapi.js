import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const restaurantRegister = createAsyncThunk(
    "restaurant/register",
    async (data) => {
        try {
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
                return response?.data;
            } else {
                toast.error(response?.data?.message);
            }
        } catch (err) {
            toast.error(err);
        }
    }
)