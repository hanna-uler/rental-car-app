import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filters/slice";
import brandsReducer from "./brands/slice";
import carsReducer from "./cars/slice"

export const store = configureStore({
    reducer: {
        filters: filtersReducer,
        brands: brandsReducer,
        cars: carsReducer,
    }
});