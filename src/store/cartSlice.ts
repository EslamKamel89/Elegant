import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
export type CartItem = {
  id: string;
  title: string;
  price: number;
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
    addToCart(
      state,
      action: PayloadAction<{ id: string; title: string; price: number }>
    ) {
      const existing = state.items.find((item) => item.id == action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const index = state.items.findIndex((item) => item.id == action.payload);
      if (index != -1) {
        const existing = state.items[index];
        if (existing.quantity > 1) {
          existing.quantity--;
        } else {
          state.items.splice(index, 1);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
