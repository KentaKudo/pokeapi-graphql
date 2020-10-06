import express from "express";
import fetch from "node-fetch";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Query {
        berries: [Berry!]!
        berry(id: Int!): Berry
    }

    type Berry {
        id: Int!
        name: String!
        Flavors: [BerryFlavorMap!]!
    }

    type BerryFlavorMap {
        potency: Int!
        flavor: NamedAPIResource!
    }

    type NamedAPIResource {
        name: String!
        url: String!
    }
`);

const baseURL = "https://pokeapi.co/api/v2";
const berryEndpoint = `${baseURL}/berry`;

const rootValue = {
  berries: () => {
    return fetch(berryEndpoint)
      .then((res) => res.json())
      .catch(console.error);
  },
  berry: ({ id }: { id: number }) => {
    return fetch(`${berryEndpoint}/${id}`)
      .then((res) => res.json())
      .catch(console.error);
  },
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  })
);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
