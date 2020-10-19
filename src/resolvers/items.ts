import { node, connection, ConnectionFn } from "./pagination";
import * as ENDPOINTS from "./endpoints";

interface Item {
  id: number;
}

export const items: ConnectionFn<Item> = connection(ENDPOINTS.ITEM);
export const item = node(ENDPOINTS.ITEM);

interface ItemAttribute {
  id: number;
}

export const itemAttribuets: ConnectionFn<ItemAttribute> = connection(
  ENDPOINTS.ITEM_ATTRIBUTE
);
export const itemAttribute = node(ENDPOINTS.ITEM_ATTRIBUTE);

interface ItemCategory {
  id: number;
}

export const itemCategories: ConnectionFn<ItemCategory> = connection(
  ENDPOINTS.ITEM_CATEGORY
);
export const itemCategory = node(ENDPOINTS.ITEM_CATEGORY);

interface ItemFlingEffect {
  id: number;
}

export const itemFlingEffects: ConnectionFn<ItemFlingEffect> = connection(
  ENDPOINTS.ITEM_FLING_EFFECT
);
export const itemFlingEffect = node(ENDPOINTS.ITEM_FLING_EFFECT);

interface ItemPocket {
  id: number;
}

export const itemPockets: ConnectionFn<ItemPocket> = connection(
  ENDPOINTS.ITEM_POCKET
);
export const itemPocket = node(ENDPOINTS.ITEM_POCKET);
