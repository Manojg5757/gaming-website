import { createSlice } from "@reduxjs/toolkit";

// Load cart state from local storage if available
const initialState = {
  data: [],
  totalAmount: 0,
  totalItems: 0,
};

const persistedState = localStorage.getItem("cartState")
  ? JSON.parse(localStorage.getItem("cartState"))
  : initialState;

export const cartSlice = createSlice({
  name: "cart",
  initialState: persistedState,
  reducers: {
    addingToCart(state, action) {
      const newItem = action.payload;
      const tempCart = state.data.find((item) => item.id === newItem.id);

      if (tempCart) {
        tempCart.quantity++;
        state.totalAmount += newItem.price;
        state.totalItems++;
      } else {
        state.data.push({
          ...newItem,
          quantity: 1
        });
        state.totalAmount += newItem.price;
        state.totalItems++;
      }
    },

    removeFromCart(state, action) {
      const removeItemId = action.payload;
      const itemIndex = state.data.findIndex((item) => item.id === removeItemId);
      if (itemIndex !== -1) {
        const removedItem = state.data[itemIndex];
        state.data.splice(itemIndex, 1);

        state.totalAmount -= removedItem.price * removedItem.quantity;
        state.totalItems -= removedItem.quantity;
      }
    }
  },
});

// Middleware to save cart state to local storage
const saveToLocalStorage = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem("cartState", JSON.stringify(store.getState().cart));
  return result;
};

export const { addingToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

export const cartMiddleware = saveToLocalStorage;
