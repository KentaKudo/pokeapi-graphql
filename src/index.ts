import express from "express";
import { graphqlHTTP } from "express-graphql";

import schema from "./schema";
import * as rootValue from "./resolvers";

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
