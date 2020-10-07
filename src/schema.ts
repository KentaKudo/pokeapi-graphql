import { buildSchema } from "graphql";

const schema = buildSchema(`
type PageInfo {
    hasPreviousPage: Boolean!
    hasNextPage: Boolean!
    startCursor: String
    endCursor: String
}

type BerryConnection {
    edges: [BerryEdge]
    nodes: [Berry]
    pageInfo: PageInfo!
    totalCount: Int!
}

type BerryEdge {
    node: Berry
    cursor: String!
}

type Berry {
    id: Int!
    name: String!
    growth_time: Int!
    max_harvest: Int!
    natural_gift_power: Int!
    size: Int!
    smoothness: Int!
    soil_dryness: Int!
    firmness: NamedAPIResource!
    flavors: [BerryFlavorMap!]!
    item: NamedAPIResource!
    natural_gift_type: NamedAPIResource!
}

type BerryFlavorMap {
    potency: Int!
    flavor: NamedAPIResource!
}

type NamedAPIResource {
    name: String!
    url: String!
}

type Query {
    berries(first: Int, after: String, last: Int, before: String): BerryConnection!
    berry(id: Int!): Berry
}
`);

export default schema;
