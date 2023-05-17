import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    setFavouriteUserId: (state, action) => {
      state.userId = action.payload || null;
    },
    addToFavourite: (state, action) => {
      const { userId } = state;
      const userFavourite = state[userId] || { items: [] };
      const item = userFavourite.items?.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        return;
      } else {
        state[userId] = {
          items: [...userFavourite.items, action.payload],
        };
      }
    },
    removeFavouriteItem: (state, action) => {
      const { userId } = state;
      state[userId].items = state[userId].items.filter(
        (item) => item.id !== action.payload
      );
    },
    resetFavourite: (state) => {
      const { userId } = state;
      state[userId].items = [];
    },
  },
});

export const {
  setFavouriteUserId,
  addToFavourite,
  removeFavouriteItem,
  resetFavourite,
} = favouriteSlice.actions;

export default favouriteSlice.reducer;
