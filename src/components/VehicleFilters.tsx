type VehicleFiltersProps = {
  filter: string;
  onFilterChange: (filter: string) => void;
};

export function VehicleFilters({
  filter,
  onFilterChange,
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
    </div>
  );
}
