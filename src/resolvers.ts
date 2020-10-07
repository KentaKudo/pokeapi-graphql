import fetch from "node-fetch";

const baseURL = "https://pokeapi.co/api/v2";
const berryEndpoint = `${baseURL}/berry`;

interface Berry {
  id: number;
}

interface NamedAPIResource {
  name: string;
  url: string;
}

export const berries = async () => {
  try {
    const res = await fetch(berryEndpoint);
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

    // TODO
    const pageInfo = {
      hasPreviousPage: false,
      hasNextPage: false,
      startCursor: "",
      endCursor: "",
    };

    return {
      edges,
      nodes,
      pageInfo,
      totalCount: count,
    };
  } catch (error) {
    console.error(error);
  }
};

export const berry = ({ id }: Berry) =>
  fetch(`${berryEndpoint}/${id}`)
    .then((res) => res.json())
    .catch(console.error);
