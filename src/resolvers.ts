import fetch from "node-fetch";

const baseURL = "https://pokeapi.co/api/v2";
const berryEndpoint = `${baseURL}/berry`;
const berryFirmnessEndpoint = `${baseURL}/berry-firmness`;

interface ConnectionQuery {
  first: number;
  after: string | undefined;
}

type PaginationQuery =
  | {
      limit: number;
    }
  | {
      limit: number;
      offset: number;
    };

interface Query {
  [key: string]: string | number | boolean;
}

const buildQuery = (query: Query) =>
  Object.keys(query)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(query[k])}`)
    .join("&");

interface Berry {
  id: number;
}

interface BerryFirmness {
  id: number;
}

interface PageInfo {
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  startCursor: string;
  endCursor: string;
}

interface NamedAPIResource {
  name: string;
  url: string;
}

const MAX_LIMIT = 60;

interface Identifiable<ID> {
  id: ID;
}

interface Connection<T> {
  edges: { node: T; cursor: string }[];
  nodes: T[];
  pageInfo: PageInfo;
  totalCount: number;
}

type ConnectionFn<T extends Identifiable<number>> = (
  query: ConnectionQuery
) => Promise<Connection<T>>;

const connection = (endpoint: string) => async <
  T extends Identifiable<number>
>({
  first = 20,
  after,
}: ConnectionQuery): Promise<Connection<T>> => {
  const limit = Math.min(first, MAX_LIMIT);
  const query: PaginationQuery =
    after === undefined
      ? { limit }
      : {
          limit,
          offset: parseInt(Buffer.from(after, "base64").toString("utf-8")),
        };

  const res = await fetch(`${endpoint}?${buildQuery(query)}`);
  const { count, next, previous, results } = await res.json();

  const nodes: T[] = await Promise.all(
    results.map(({ url }: NamedAPIResource) =>
      fetch(url).then((res) => res.json())
    )
  );

  console.log(nodes);

  const edges = nodes.map((node: T) => ({
    node,
    cursor: Buffer.from(node.id.toString()).toString("base64"),
  }));

  const pageInfo: PageInfo = {
    hasPreviousPage: previous !== null,
    hasNextPage: next !== null,
    startCursor:
      nodes.length === 0
        ? ""
        : Buffer.from(nodes[0].id.toString()).toString("base64"),
    endCursor:
      nodes.length === 0
        ? ""
        : Buffer.from(nodes[nodes.length - 1].id.toString()).toString("base64"),
  };

  return {
    nodes,
    edges,
    pageInfo,
    totalCount: count,
  };
};

export const berries: ConnectionFn<Berry> = connection(berryEndpoint);

export const berry = ({ id }: { id: number }) =>
  fetch(`${berryEndpoint}/${id}`).then((res) => res.json());

export const berryFirmnesses: ConnectionFn<BerryFirmness> = connection(
  berryFirmnessEndpoint
);

export const berryFirmness = ({ id }: { id: number }) =>
  fetch(`${berryFirmnessEndpoint}/${id}`).then((res) => res.json());
