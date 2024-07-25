import { create } from "zustand";
import { persist } from "zustand/middleware";

import { CartSlice } from "../slices/cartSlice";

type CartSlice = ReturnType<typeof CartSlice>;

export const useStore = create<CartSlice>()(
  persist(
    (...a) => ({
      ...CartSlice(...a),
    }),
    {
      name: "cart-storage",
    }
  )
);
