import { node, connection, ConnectionFn } from "./pagination";
import * as ENDPOINTS from "./endpoints";

interface Generation {
  id: number;
}

export const generations: ConnectionFn<Generation> = connection(
  ENDPOINTS.GENERATION
);
export const generation = node(ENDPOINTS.GENERATION);

interface Pokedex {
  id: number;
}

export const pokedexes: ConnectionFn<Pokedex> = connection(ENDPOINTS.POKEDEX);
export const pokedex = node(ENDPOINTS.POKEDEX);

interface Version {
  id: number;
}

export const versions: ConnectionFn<Version> = connection(ENDPOINTS.VERSION);
export const version = node(ENDPOINTS.VERSION);

interface VersionGroup {
  id: number;
}

export const versionGroups: ConnectionFn<VersionGroup> = connection(
  ENDPOINTS.VERSION_GROUP
);
export const versionGroup = node(ENDPOINTS.VERSION_GROUP);
