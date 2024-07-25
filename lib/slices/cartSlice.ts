import { StateCreator } from "zustand";

import { Product } from "@/types";

interface State {
  cart: Product[];
  totalItems: number;
  totalPrice: number;
}

interface Actions {
  addToCart: (product: Product) => void;
  removeFromCart: (item: Product) => void;
  clearCart: () => void;
}

const initialState: State = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

export const CartSlice: StateCreator<State & Actions> = (set, get) => ({
  cart: initialState.cart,
  totalItems: initialState.totalItems,
  totalPrice: initialState.totalPrice,

  addToCart: (product) => {
    const cart = get().cart;
    const cartItem = cart.find((item) => item._id === product._id);

    if (cartItem) {
      const updatedCart = cart.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity! + 1 }
          : item
      );
      set((state) => ({
        cart: updatedCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.price,
      }));
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      set((state) => ({
        cart: updatedCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.price,
      }));
    }
  },
  removeFromCart: (product: Product) => {
    set((state) => ({
      cart: state.cart.filter((item) => item._id !== product._id),
      totalItems: state.totalItems - 1,
      totalPrice: state.totalPrice - product.price,
    }));
  },
  clearCart: () => set(() => initialState),
});
