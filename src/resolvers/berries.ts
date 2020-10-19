import { node, connection, ConnectionFn } from "./pagination";
import * as ENDPOINTS from "./endpoints";

interface Berry {
  id: number;
}

export const berries: ConnectionFn<Berry> = connection(ENDPOINTS.BERRY);
export const berry = node(ENDPOINTS.BERRY);

interface BerryFirmness {
  id: number;
}

export const berryFirmnesses: ConnectionFn<BerryFirmness> = connection(
  ENDPOINTS.BERRY_FIRMNESS
);
export const berryFirmness = node(ENDPOINTS.BERRY_FIRMNESS);

interface BerryFlavor {
  id: number;
}

export const berryFlavors: ConnectionFn<BerryFlavor> = connection(
  ENDPOINTS.BERRY_FLAVOR
);
export const berryFlavor = node(ENDPOINTS.BERRY_FLAVOR);
