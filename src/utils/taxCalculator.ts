export function taxCalculator(price: number, category: string) {
  let taxPercent = 0.0475;

  if (category === "groceries") {
    taxPercent = 0.03;
  }

  const tax = price * taxPercent;
  return tax;
}
