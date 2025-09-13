import { createSlice } from "@reduxjs/toolkit";
import { getBrands } from "./operations"

const handlePending = (state) => {
    state.isError = null;
    state.isLoading = true;
}
const handleError = (state, action) => {
    state.isError = action.payload;
    state.isLoading = false;
}
const brandsSlice = createSlice({
    name: "brands",
    initialState: {
        brands:[],
        isLoading: false,
        isError: null,
    },
    extraReducers: builder =>
        builder
            .addCase(getBrands.pending, handlePending)
            .addCase(getBrands.fulfilled, (state, action) => {
                state.isError = null;
                state.isLoading = false;
                state.brands = action.payload;
            }).addCase(getBrands.rejected, handleError)
})

export default brandsSlice.reducer;