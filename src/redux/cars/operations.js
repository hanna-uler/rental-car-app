import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCarList = createAsyncThunk("cars/getCarList", async (params, thunkAPI) => {
    const { brand, rentalPrice, minMileage, maxMileage, page, limit } = params;
    const query = new URLSearchParams({
        page,
        limit,
        ...(brand && { brand }),
        ...(rentalPrice && { rentalPrice }),
        ...(minMileage && { minMileage }),
        ...(maxMileage && { maxMileage })
    });
    try {
        const res = await axios.get(`/cars?${query}`);
        console.log("getCarListOperat => res: ", res);
        return res.data.cars;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message || "Something went wrong")
    }
});