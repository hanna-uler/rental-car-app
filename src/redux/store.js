import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filters/slice"

export const store = configureStore({
    reducer: filtersReducer,
});