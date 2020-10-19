import { node, connection, ConnectionFn } from "./pagination";
import * as ENDPOINTS from "./endpoints";

interface ContestType {
  id: number;
}

export const contestTypes: ConnectionFn<ContestType> = connection(
  ENDPOINTS.CONTEST_TYPE
);
export const contestType = node(ENDPOINTS.CONTEST_TYPE);

interface ContestEffect {
  id: number;
}

export const contestEffects: ConnectionFn<ContestEffect> = connection(
  ENDPOINTS.CONTEST_EFFECT
);
export const contestEffect = node(ENDPOINTS.CONTEST_EFFECT);

interface SuperContestEffect {
  id: number;
}

export const superContestEffects: ConnectionFn<SuperContestEffect> = connection(
  ENDPOINTS.SUPER_CONTEST_EFFECT
);
export const superContestEffect = node(ENDPOINTS.SUPER_CONTEST_EFFECT);
