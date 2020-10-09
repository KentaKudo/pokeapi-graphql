import { buildSchema } from "graphql";

const schema = buildSchema(`
type PageInfo {
    hasPreviousPage: Boolean!
    hasNextPage: Boolean!
    startCursor: String
    endCursor: String
}

type NamedAPIResource {
    name: String!
    url: String!
}

type Name {
    name: String!
    language: NamedAPIResource!
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

type BerryFirmnessConnection {
    edges: [BerryFirmnessEdge]
    nodes: [BerryFirmness]
    pageInfo: PageInfo!
    totalCount: Int!
}

type BerryFirmnessEdge {
    node: BerryFirmness
    cursor: String!
}

type BerryFirmness {
    id: Int!
    name: String!
    berries: [NamedAPIResource!]!
    names: [Name!]!
}

type Query {
    berries(first: Int, after: String): BerryConnection!
    berry(id: Int!): Berry

    berryFirmnesses(first: Int, after: String): BerryFirmnessConnection!
    berryFirmness(id: Int!): BerryFirmness
}
`);

export default schema;
