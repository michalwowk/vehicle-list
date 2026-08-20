import { formatPrice } from "./price";
import type { SortOrder } from "./sort";
import type { PricedVehicle, Vehicle } from "../types";

/* single source of the on-screen vehicle name, shared by display and filtering */
export function vehicleName(vehicle: Vehicle) {
  return `${vehicle.make} ${vehicle.model} ${vehicle.year}`;
}

function hasPrice(vehicle: Vehicle): vehicle is PricedVehicle {
  return vehicle.price !== null;
}

function matchesFilter(vehicle: PricedVehicle, query: string) {
  /* both the raw price ("30000") and the displayed form ("30,000") match */
  const filterString =
    `${vehicleName(vehicle)} ${vehicle.price} ${formatPrice(vehicle.price)}`.toLowerCase();
  return filterString.includes(query);
}

export function getVisibleVehicles(
  vehicles: Vehicle[],
  filter: string,
  sortOrder: SortOrder,
) {
  const query = filter.trim().toLowerCase();
  const visible = vehicles
    .filter(hasPrice)
    .filter((vehicle) => matchesFilter(vehicle, query));

  if (sortOrder === "none") return visible;

  return visible.sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price,
  );
}
