import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart : {
    userId: 0,
    products: []
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setUserId: (state,action) => {
      state.cart.userId = action.payload;
    },
    addToCart: (state,action) => {
      const item = state.cart?.products?.find(item=>item.id === action.payload.id)
      if(item){
        item.quantity += action.payload.quantity;
      } else {
        state.cart?.products?.push(action.payload);
      }
    },
    removeItem: (state,action) => {
      state.cart.products = state.cart.products.filter(item => item.id !== action.payload);
    },
    // resetCart: (state) => {
    //   state.cart.products = [];
    // },
  },
})

export const { setUserId, addToCart, removeItem, resetCart } = cartSlice.actions

export default cartSlice.reducer