import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  total: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const updatedCart = [...state.cart];

      const UpdatedFindIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (UpdatedFindIndex === -1) {
        updatedCart.push({ ...action.payload, amount: 1 });
      } else {
        const UpdatedItem = { ...updatedCart[UpdatedFindIndex] };
        UpdatedItem.amount++;
        updatedCart[UpdatedFindIndex] = UpdatedItem;
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return {
        ...state,
        cart: updatedCart,
      };
    },

    decrement: (state, action) => {
      const updatedCart = [...state.cart];

      const UpdatedFindIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      const UpdatedItem = { ...updatedCart[UpdatedFindIndex] };

      if (UpdatedItem.amount > 1) {
        UpdatedItem.amount--;
        updatedCart[UpdatedFindIndex] = UpdatedItem;
        return {
          ...state,
          cart: updatedCart,
        };
      }
    },

    remove: (state, action) => {
      const updateCart = [...state.cart];

      const filteredCartItem = updateCart.filter(
        (product) => product.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(filteredCartItem));

      return { ...state, cart: filteredCartItem };
    },
  },
});

export const { addToCart, decrement, remove } = CartSlice.actions;
export default CartSlice.reducer;
