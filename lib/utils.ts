import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getStockLevel = (stock: number) => {
  if (stock === 0) {
    return "Out of stock";
  } else if (stock <= 5) {
    return `In stock: ${stock}`;
  } else if (stock > 5 && stock <= 10) {
    return "In stock: 5+";
  } else if (stock > 10 && stock <= 20) {
    return "In stock: 10+";
  } else if (stock > 20 && stock <= 50) {
    return "In stock: 20+";
  } else if (stock > 50 && stock <= 100) {
    return "In stock: 50+";
  } else {
    return "In stock: 100+";
  }
};
