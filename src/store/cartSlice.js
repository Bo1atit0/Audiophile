import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const { productId, quantity } = action.payload;

      // increment quantity if item already exists in cart using findIndex to locate the item index
      const itemIndex = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }
    },

    removeItemFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.productId !== productId);
    },

    clearCart: (state) => {
      state.items = [];
    },

    incrementQuantity: (state, action) => {
      const productId = action.payload;
      const item = state.items.find((i) => i.productId === productId);
      if (item) {
        item.quantity += 1;
      }
    },

    decrementQuantity: (state, action) => {
      const productId = action.payload;
      const item = state.items.find((i) => i.productId === productId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  addItemToCart,
  incrementQuantity,
  decrementQuantity,
  removeItemFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
