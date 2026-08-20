import { useState } from "react";
import { MIN_PRICE, formatPrice, parsePrice } from "../utils/price";
import { vehicleName } from "../utils/vehicles";
import type { PricedVehicle } from "../types";

type VehicleItemProps = {
  vehicle: PricedVehicle;
  onSavePrice: (id: number, price: number) => void;
};

export function VehicleItem({ vehicle, onSavePrice }: VehicleItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState("");

  const draftPrice = parsePrice(draft);

  const startEditing = () => {
    setDraft(String(vehicle.price));
    setIsEditing(true);
  };

  const savePrice = () => {
    if (draftPrice === null) return;
    onSavePrice(vehicle.id, draftPrice);
    setIsEditing(false);
  };

  return (
    <li className="vehicle-item">
      <span className="vehicle-name">{vehicleName(vehicle)}</span>
      <span className="vehicle-price">
        {isEditing ? (
          <>
            <input
              type="number"
              min={MIN_PRICE}
              aria-label="Price"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
            />
            <button onClick={savePrice} disabled={draftPrice === null}>
              Save
            </button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            {formatPrice(vehicle.price)}
            <button onClick={startEditing}>Edit</button>
          </>
        )}
      </span>
    </li>
  );
}
