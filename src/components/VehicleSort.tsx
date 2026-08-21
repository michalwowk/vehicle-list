import { SORT_ORDERS, SORT_ORDER_LABELS, isSortOrder } from "../utils/sort";
import type { SortOrder } from "../utils/sort";

type VehicleSortProps = {
  sortOrder: SortOrder;
  onSortOrderChange: (sortOrder: SortOrder) => void;
};

export function VehicleSort({
  sortOrder,
  onSortOrderChange,
}: VehicleSortProps) {
  return (
    <div className="vehicle-sort">
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
