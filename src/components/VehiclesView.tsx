import { useState } from "react";
import { useVehicles } from "../hooks/useVehicles";
import { getVisibleVehicles } from "../utils/vehicles";
import type { SortOrder } from "../utils/sort";
import { VehicleFilters } from "./VehicleFilters";
import { VehicleList } from "./VehicleList";

export function VehiclesView() {
  const { status, vehicles, savePrice } = useVehicles();
  const [filter, setFilter] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("none");

  return (
    <main>
      <section className="vehicles-view">
        <h1>Vehicles</h1>
        <VehicleFilters
          filter={filter}
          onFilterChange={setFilter}
          sortOrder={sortOrder}
          onSortOrderChange={setSortOrder}
        />
        {status === "loading" && <p>Loading vehicles…</p>}
        {status === "error" && (
          <p>Failed to load vehicles. Please try again.</p>
        )}
        {status === "ready" && (
          <VehicleList
            vehicles={getVisibleVehicles(vehicles, filter, sortOrder)}
            onSavePrice={savePrice}
          />
        )}
      </section>
    </main>
  );
}
