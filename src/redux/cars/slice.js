import { createSlice } from "@reduxjs/toolkit";
import { getCarList } from "./operations";

const handlePending = (state) => {
    state.isError = null;
    state.isLoading = true;
}
const handleError = (state, action) => {
    state.isError = action.payload;
    state.isLoading = false;
}
const carsSlice = createSlice({
    name: "cars",
    initialState: {
        cars: [],
        page: 1,
        limit: 12,
        totalCars: null,
        totalPages: null,
        isLoading: false,
        isError: null,
    },
    extraReducers: builder =>
        builder
        .addCase(getCarList.pending, handlePending)
        .addCase(getCarList.fulfilled, (state, action) => {
            state.cars = action.payload;
            state.isError = null;
            state.isLoading = false;
        })
        .addCase(getCarList.rejected, handleError)
})

export default carsSlice.reducer;