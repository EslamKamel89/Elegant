import { createSlice } from "@reduxjs/toolkit";
type CartItem = {
  id: string;
  title: string;
  pice: number;
  quantity: number;
};
type CartState = {
  items: CartItem[];
};
const initialState: CartState = { items: [] };
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart() {},
    removeFromCart() {},
  },
});
