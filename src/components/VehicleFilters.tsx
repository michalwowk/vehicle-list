import { SORT_ORDERS, SORT_ORDER_LABELS, isSortOrder } from "../utils/sort";
import type { SortOrder } from "../utils/sort";

type VehicleFiltersProps = {
  filter: string;
  onFilterChange: (filter: string) => void;
  sortOrder: SortOrder;
  onSortOrderChange: (sortOrder: SortOrder) => void;
};

export function VehicleFilters({
  filter,
  onFilterChange,
  sortOrder,
  onSortOrderChange,
}: VehicleFiltersProps) {
  return (
    <div className="vehicle-filters">
      <label>
        Filter
        <input
          type="text"
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
        />
      </label>
      <label>
        Sort by price
        <select
          value={sortOrder}
          onChange={(e) => {
            if (isSortOrder(e.target.value)) onSortOrderChange(e.target.value);
          }}
        >
          {SORT_ORDERS.map((order) => (
            <option key={order} value={order}>
              {SORT_ORDER_LABELS[order]}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
