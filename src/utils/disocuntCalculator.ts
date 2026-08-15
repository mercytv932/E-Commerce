export function calculateDiscount(price: number, discount: number) {
  const discountPercent = (price * discount) / 100;
  return discountPercent;
}
