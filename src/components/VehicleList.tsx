import { VehicleItem } from "./VehicleItem";
import type { PricedVehicle } from "../types";

type VehicleListProps = {
  vehicles: PricedVehicle[];
  onSavePrice: (id: number, price: number) => void;
};

export function VehicleList({ vehicles, onSavePrice }: VehicleListProps) {
  if (vehicles.length === 0) {
    return <p>No vehicles found.</p>;
  }

  return (
    <ul className="vehicle-items">
      {vehicles.map((vehicle) => (
        <VehicleItem
          key={vehicle.id}
          vehicle={vehicle}
          onSavePrice={onSavePrice}
        />
      ))}
    </ul>
  );
}
