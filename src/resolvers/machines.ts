import { node, connection, ConnectionFn } from "./pagination";
import * as ENDPOINTS from "./endpoints";

interface Machine {
  id: number;
}

export const machines: ConnectionFn<Machine> = connection(ENDPOINTS.MACHINE);
export const machine = node(ENDPOINTS.MACHINE);
