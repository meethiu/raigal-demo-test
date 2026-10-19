export interface DiscountRule {
  minimumTotal: number;
  discountPercentage: number;
}

export function applyDiscount(subtotal: number, rule: DiscountRule): number {
  if (subtotal <= 0 || !Number.isFinite(subtotal)) {
    return 0;
  }
  if (subtotal >= rule.minimumTotal) {
    const discount = (subtotal * rule.discountPercentage) / 100;
    return Math.round((subtotal - discount) * 100) / 100;
  }
  return subtotal;
}
