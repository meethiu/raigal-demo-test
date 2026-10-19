import { formatCurrency } from "./utils.js";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export function calculateCartTotal(items: CartItem[]): { total: number; formatted: string } {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return {
    total,
    formatted: formatCurrency(total),
  };
}
