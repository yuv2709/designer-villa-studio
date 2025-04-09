import { compareArrays } from "@/lib/utils";
import { Discount } from "@/types/product.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type RemoveCartItem = {
  id: string;
  attributes: string[];
};

export type CartItem = {
  id: string;
  name: string;
  srcUrl: string;
  price: number;
  attributes: string[];
  discount: Discount;
  quantity: number;
};

export type Cart = {
  items: CartItem[];
  totalQuantities: number;
};

interface CartsState {
  cart: Cart | null;
  totalPrice: number;
  adjustedTotalPrice: number;
  action: "update" | "add" | "delete" | null;
}

const initialState: CartsState = {
  cart: null,
  totalPrice: 0,
  adjustedTotalPrice: 0,
  action: null,
};

// ✅ Adjusted Price per unit after discount
const getAdjustedPrice = (item: CartItem): number => {
  if (item.discount.percentage > 0) {
    return Math.round(item.price - (item.price * item.discount.percentage) / 100);
  } else if (item.discount.amount > 0) {
    return Math.round(item.price - item.discount.amount);
  }
  return item.price;
};

export const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const adjustedPrice = getAdjustedPrice(item);

      if (!state.cart) {
        state.cart = {
          items: [item],
          totalQuantities: item.quantity,
        };
        state.totalPrice = item.price * item.quantity;
        state.adjustedTotalPrice = adjustedPrice * item.quantity;
        return;
      }

      const existingItem = state.cart.items.find(
        (i) => i.id === item.id && compareArrays(i.attributes, item.attributes)
      );

      if (existingItem) {
        state.cart.items = state.cart.items.map((cartItem) =>
          cartItem.id === item.id &&
          compareArrays(cartItem.attributes, item.attributes)
            ? {
                ...cartItem,
                quantity: cartItem.quantity + item.quantity,
              }
            : cartItem
        );
      } else {
        state.cart.items.push(item);
      }

      state.cart.totalQuantities += item.quantity;
      state.totalPrice += item.price * item.quantity;
      state.adjustedTotalPrice += adjustedPrice * item.quantity;
    },

    removeCartItem: (state, action: PayloadAction<RemoveCartItem>) => {
      if (!state.cart) return;

      const { id, attributes } = action.payload;

      const targetItem = state.cart.items.find(
        (item) => item.id === id && compareArrays(item.attributes, attributes)
      );

      if (!targetItem) return;

      const adjustedPrice = getAdjustedPrice(targetItem);

      state.cart.items = state.cart.items
        .map((item) =>
          item.id === id && compareArrays(item.attributes, attributes)
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

      state.cart.totalQuantities -= 1;
      state.totalPrice -= targetItem.price;
      state.adjustedTotalPrice -= adjustedPrice;
    },

    remove: (
      state,
      action: PayloadAction<RemoveCartItem & { quantity: number }>
    ) => {
      if (!state.cart) return;

      const { id, attributes } = action.payload;

      const targetItem = state.cart.items.find(
        (item) => item.id === id && compareArrays(item.attributes, attributes)
      );

      if (!targetItem) return;

      const adjustedPrice = getAdjustedPrice(targetItem);

      state.cart.items = state.cart.items.filter(
        (item) =>
          item.id !== id || !compareArrays(item.attributes, attributes)
      );

      state.cart.totalQuantities -= targetItem.quantity;
      state.totalPrice -= targetItem.price * targetItem.quantity;
      state.adjustedTotalPrice -= adjustedPrice * targetItem.quantity;
    },
  },
});

export const { addToCart, removeCartItem, remove } = cartsSlice.actions;
export default cartsSlice.reducer;
