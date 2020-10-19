import { node, connection, ConnectionFn } from "./pagination";
import * as ENDPOINTS from "./endpoints";

interface EncounterMethod {
  id: number;
}

export const encounterMethods: ConnectionFn<EncounterMethod> = connection(
  ENDPOINTS.ENCOUNTER_METHOD
);
export const encounterMethod = node(ENDPOINTS.ENCOUNTER_METHOD);

interface EncounterCondition {
  id: number;
}

export const encounterConditions: ConnectionFn<EncounterCondition> = connection(
  ENDPOINTS.ENCOUNTER_CONDITION
);
export const encounterCondition = node(ENDPOINTS.ENCOUNTER_CONDITION);

interface EncounterConditionValue {
  id: number;
}

export const encounterConditionValues: ConnectionFn<EncounterConditionValue> = connection(
  ENDPOINTS.ENCOUNTER_CONDITION_VALUE
);
export const encounterConditionValue = node(
  ENDPOINTS.ENCOUNTER_CONDITION_VALUE
);
