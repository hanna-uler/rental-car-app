import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        carIds: []
    },
    reducers: {
        addToFavs: (state, action) => {
            state.carIds.push(action.payload); 
        },
        deleteFromFavs: (state, action) => {
            state.carIds = state.carIds.filter(id => id !== action.payload);;
        }
    }
})

export const {addToFavs, deleteFromFavs } = favoritesSlice.actions;
export default favoritesSlice.reducer;