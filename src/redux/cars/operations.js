import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast"

const toastStyles = {
    borderRadius: "12px",
    padding: "12px 16px",
    color: '#101828',
    background: "#f7f7f7"
};
const showNoResultsToast = (message) => {
    toast(message,{
            style: toastStyles,
            duration: 4000,
            id: "noResults"});
}
const showSmthWentWrong = (message) => {
    toast.error(message, {
        style: toastStyles,
        duration: 4000,
        id: "errorToast"
    });
}
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
        if (res.data.cars.length === 0) {
            showNoResultsToast('No results found.\nTry broadening your search.');
        }
        return res.data;
    } catch (error) {
        showSmthWentWrong("Oops, something went wrong.\nPlease try again.")
        return thunkAPI.rejectWithValue(error.message || "Something went wrong")
    }
});

export const getCarDetails = createAsyncThunk("cars/getCar", async (id, thunkAPI) => {
    try {
        const res = await axios.get(`cars/${id}`);
        return res.data;
    } catch (error) {
        showSmthWentWrong("Oops, something went wrong.\nPlease try again.")
        return thunkAPI.rejectWithValue(error.message || "Something went wrong")
    }
})