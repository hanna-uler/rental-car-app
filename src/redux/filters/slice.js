import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        brand: "",
        rentalPrice: "",
        minMileage: "",
        maxMileage: "",
    },
    reducers: {
        resetFilters: (state) => {
            state.brand = "";
            state.rentalPrice = "";
            state.minMileage = "";
            state.maxMileage = "";  
        },
        updFilters: (state, action) => {
            state.brand = action.payload.brand;
            state.rentalPrice = action.payload.rentalPrice;
            state.minMileage = action.payload.minMileage;
            state.maxMileage = action.payload.maxMileage;
        }
    }
})

export default filtersSlice.reducer;
export const {resetFilters, updFilters } = filtersSlice.actions;