import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://car-rental-api.goit.global/";

export const getBrands = createAsyncThunk("brands/getBrands", async (_, thunkAPI) => {
    try {
        const res = await axios.get("/brands");
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message || "Something went wrong")
    }
})