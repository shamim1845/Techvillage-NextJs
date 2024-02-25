import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CartItem } from "@/types";

interface InitialStateProps {
  cartItems: CartItem[];
}

const initialState: InitialStateProps = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const existItem = state.cartItems.find(
        (cartItem) => cartItem.item.id === payload.item.id
      );

      if (existItem) {
        state.cartItems.map((cartItem) => {
          if (cartItem.item.id === payload.item.id) {
            cartItem.quantity = payload.quantity;
          }
        });
      } else {
        state.cartItems.push({
          item: payload.item,
          quantity: payload.quantity,
        });
      }
    },
    removeFromCart: (state, { payload }) => {
      const filteredItems = state.cartItems.filter(
        (cartItem) => cartItem.item.id != payload.id
      );

      return {
        cartItems: filteredItems,
      };
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

export const selectCartItems = (state: RootState) => state.cart.cartItems;
