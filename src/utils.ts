export function formatCurrency(amount: number, currency: string = "EUR"): string {
  if (!Number.isFinite(amount)) {
    throw new TypeError("Amount must be a finite number");
  }
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency,
  }).format(amount);
}
