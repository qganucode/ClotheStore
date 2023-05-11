import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
};

const favouriteSlice = createSlice({
    name: "favourite",
    initialState,
    reducers: {
        addToFavourite: (state,action) => {
            const item = state.products.find(item => item.id === action.payload.id);
            if(item) {
                return;
            } else {
                state.products.push(action.payload);
            }
        },
        removeFavouriteItem: (state,action) => {
            state.products = state.products.filter(item => item.id !== action.payload);
        },
        resetFavourite: (state) => {
            state.products = [];
        }
    }
});

export const { addToFavourite,removeFavouriteItem,resetFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;