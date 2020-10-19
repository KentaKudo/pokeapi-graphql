import { node, connection, ConnectionFn } from "./pagination";
import * as ENDPOINTS from "./endpoints";

interface Move {
  id: number;
}

export const moves: ConnectionFn<Move> = connection(ENDPOINTS.MOVE);
export const move = node(ENDPOINTS.MOVE);

interface MoveAilment {
  id: number;
}

export const moveAilments: ConnectionFn<MoveAilment> = connection(
  ENDPOINTS.MOVE_AILMENT
);
export const moveAilment = node(ENDPOINTS.MOVE_AILMENT);

interface MoveBattleStyle {
  id: number;
}

export const moveBattleStyles: ConnectionFn<MoveBattleStyle> = connection(
  ENDPOINTS.MOVE_BATTLE_STYLE
);
export const moveBattleStyle = node(ENDPOINTS.MOVE_BATTLE_STYLE);

interface MoveCategory {
  id: number;
}

export const moveCategories: ConnectionFn<MoveCategory> = connection(
  ENDPOINTS.MOVE_CATEGORY
);
export const moveCategory = node(ENDPOINTS.MOVE_CATEGORY);

interface MoveDamageClass {
  id: number;
}

export const moveDamageClasses: ConnectionFn<MoveDamageClass> = connection(
  ENDPOINTS.MOVE_DAMAGE_CLASS
);
export const moveDamageClass = node(ENDPOINTS.MOVE_DAMAGE_CLASS);

interface MoveLearnMethod {
  id: number;
}

export const moveLearmMethods: ConnectionFn<MoveLearnMethod> = connection(
  ENDPOINTS.MOVE_LEARN_METHOD
);
export const moveLearnMethod = node(ENDPOINTS.MOVE_LEARN_METHOD);

interface MoveTarget {
  id: number;
}

export const moveTargets: ConnectionFn<MoveTarget> = connection(
  ENDPOINTS.MOVE_TARGET
);
export const moveTarget = node(ENDPOINTS.MOVE_TARGET);
