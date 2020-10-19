import { node, connection, ConnectionFn } from "./pagination";
import * as ENDPOINTS from "./endpoints";

interface EvolutionChain {
  id: number;
}

export const evolutionChains: ConnectionFn<EvolutionChain> = connection(
  ENDPOINTS.EVOLUTION_CHAIN
);
export const evolutionChain = node(ENDPOINTS.EVOLUTION_CHAIN);

interface EvolutionTrigger {
  id: number;
}

export const evolutionTriggers: ConnectionFn<EvolutionTrigger> = connection(
  ENDPOINTS.EVOLUTION_TRIGGER
);
export const evolutionTrigger = node(ENDPOINTS.EVOLUTION_TRIGGER);
