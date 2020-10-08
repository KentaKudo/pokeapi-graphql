import fetch from "node-fetch";

const baseURL = "https://pokeapi.co/api/v2";
const berryEndpoint = `${baseURL}/berry`;

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

interface NamedAPIResource {
  name: string;
  url: string;
}

const MAX_LIMIT = 60;

export const berries = async ({
  first = 20,
  after,
}: {
  first: number;
  after: string | undefined;
}) => {
  const limit = Math.min(first, MAX_LIMIT);
  const query: { limit: number } | { limit: number; offset: string } =
    after === undefined
      ? {
          limit,
        }
      : {
          limit,
          offset: Buffer.from(after, "base64").toString("utf-8"),
        };

  const res = await fetch(`${berryEndpoint}?${buildQuery(query)}`);
  const { count, next, previous, results } = await res.json();

  const nodes: Berry[] = await Promise.all(
    results.map(({ url }: NamedAPIResource) =>
      fetch(url).then((res) => res.json())
    )
  );

  const edges = nodes.map((node: Berry) => ({
    node,
    cursor: Buffer.from(node.id.toString()).toString("base64"),
  }));

  const pageInfo = {
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
    edges,
    nodes,
    pageInfo,
    totalCount: count,
  };
};

export const berry = ({ id }: { id: number }) =>
  fetch(`${berryEndpoint}/${id}`)
    .then((res) => res.json())
    .catch(console.error);
