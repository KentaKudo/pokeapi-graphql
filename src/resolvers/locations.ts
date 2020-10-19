import { node, connection, ConnectionFn } from "./pagination";
import * as ENDPOINTS from "./endpoints";

interface Location {
  id: number;
}

export const locations: ConnectionFn<Location> = connection(ENDPOINTS.LOCATION);
export const location = node(ENDPOINTS.LOCATION);

interface LocationArea {
  id: number;
}

export const locationAreas: ConnectionFn<LocationArea> = connection(
  ENDPOINTS.LOCATION_AREA
);
export const locationArea = node(ENDPOINTS.LOCATION_AREA);

interface PalParkArea {
  id: number;
}

export const palParkAreas: ConnectionFn<PalParkArea> = connection(
  ENDPOINTS.PAL_PARK_AREA
);
export const palParkArea = node(ENDPOINTS.PAL_PARK_AREA);

interface Region {
  id: number;
}

export const regions: ConnectionFn<Region> = connection(ENDPOINTS.REGION);
export const region = node(ENDPOINTS.REGION);
