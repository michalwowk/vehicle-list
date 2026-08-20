export const SORT_ORDERS = ["none", "asc", "desc"] as const;

export type SortOrder = (typeof SORT_ORDERS)[number];

export function isSortOrder(value: string): value is SortOrder {
  return (SORT_ORDERS as readonly string[]).includes(value);
}

export const SORT_ORDER_LABELS: Record<SortOrder, string> = {
  none: "None",
  asc: "Ascending",
  desc: "Descending",
};
