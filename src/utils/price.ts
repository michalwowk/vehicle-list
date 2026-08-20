export const MIN_PRICE = 0;

const priceFormat = new Intl.NumberFormat();

export function formatPrice(price: number) {
  return priceFormat.format(price);
}

/* null = not a valid price (empty, non-numeric, negative, or not finite) */
export function parsePrice(input: string): number | null {
  if (input.trim() === "") return null;
  const price = Number(input);
  return Number.isFinite(price) && price >= MIN_PRICE ? price : null;
}
