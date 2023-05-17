import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartUserId: (state, action) => {
      state.userId = action.payload || null;
    },
    addToCart: (state, action) => {
      const { userId } = state;
      const userCart = state[userId] || { items: [] };
      const item = userCart.items?.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity += action.payload.quantity;
        state[userId] = {
          items: [...userCart?.items],
        };
      } else {
        state[userId] = {
          items: [...userCart.items, action.payload],
        };
      }
    },
    removeItem: (state, action) => {
      const { userId } = state;
      state[userId].items = state[userId].items.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      const { userId } = state;
      state[userId].items = [];
    },
  },
});

export const { setCartUserId, addToCart, removeItem, resetCart } =
  cartSlice.actions;

export default cartSlice.reducer;
