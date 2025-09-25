import { createSlice } from "@reduxjs/toolkit";
import { getCarList, getCarDetails } from "./operations";

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
        carDetails: null,
        page: 1,
        limit: 12,
        totalCars: null,
        totalPages: 1,
        isLoading: false,
        isError: null,
    },
    reducers: {
        updPageNumber: (state) => {
            state.page = Number(state.page) + 1;
        },
        resetPages: (state) => {
            state.page = 1;
            state.totalPages = 1;
        },
        clearCarList: (state) => {
            state.cars = [];
        }
    },
    extraReducers: builder =>
        builder
        .addCase(getCarList.pending, handlePending)
        .addCase(getCarList.fulfilled, (state, action) => {
            state.cars.push(...action.payload.cars);
            state.page = action.payload.page;
            state.totalPages = action.payload.totalPages;
            state.isError = null;
            state.isLoading = false;
        })
            .addCase(getCarList.rejected, handleError)
            .addCase(getCarDetails.pending, handlePending)
            .addCase(getCarDetails.fulfilled, (state, action) => {
                state.carDetails = action.payload;
                state.isError = null;
                state.isLoading = false;
            })
            .addCase(getCarDetails.rejected, handleError)
})

export default carsSlice.reducer;
export const {updPageNumber, resetPages, clearCarList } = carsSlice.actions;