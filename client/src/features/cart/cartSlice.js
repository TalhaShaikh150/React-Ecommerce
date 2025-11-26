import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: {
    count: 0,
    items: [],
    isOpen: false,
  },
  name: "cart",
  reducers: {
    cartIncrement: (state) => {
      state.count += 1;
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id == product.id);

      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 0) + 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.count += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.count -= 1;
        } else {
          state.items = state.items.filter((i) => i.id !== action.payload);
          state.count -= 1;
        }
      }
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);

      state.count = state.items.reduce((sum, item) => sum + item.quantity, 0);
    },
  },
});

export const {
  cartIncrement,
  cartDecrement,
  toggleCart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
