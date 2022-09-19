import { configureStore } from "@reduxjs/toolkit";

import CartSlice from "./Products/CartSlice";

export const store = configureStore({
  reducer: {
    CartState: CartSlice,
  },
});
