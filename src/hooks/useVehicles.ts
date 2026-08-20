import { useEffect, useState } from "react";
import { fetchVehicles } from "../api";
import type { Vehicle } from "../types";

type VehiclesStatus = "loading" | "error" | "ready";

export function useVehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [status, setStatus] = useState<VehiclesStatus>("loading");

  useEffect(() => {
    let cancelled = false;
    fetchVehicles()
      .then((response) => {
        if (cancelled) return;
        setVehicles(response);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const savePrice = (id: number, price: number) => {
    setVehicles((current) =>
      current.map((vehicle) =>
        vehicle.id === id ? { ...vehicle, price } : vehicle,
      ),
    );
  };

  return { status, vehicles, savePrice };
}
