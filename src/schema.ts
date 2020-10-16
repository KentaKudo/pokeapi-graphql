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

type Effect {
    effect: String!
    language: NamedAPIResource!
}

type FlavorText {
    flavor_text: String!
    language: NamedAPIResource!
    version: NamedAPIResource
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

type BerryFlavorConnection {
    edges: [BerryFlavorEdge]
    nodes: [BerryFlavor]
    pageInfo: PageInfo!
    totalCount: Int!
}

type BerryFlavorEdge {
    node: BerryFlavor
    cursor: String!
}

type BerryFlavor {
    id: Int!
    name: String!
    berries: [FlavorBerryMap!]!
    contest_type: NamedAPIResource!
    names: [Name!]!
}

type FlavorBerryMap {
    potency: Int!
    berry: NamedAPIResource!
}

type ContestTypeConnection {
    edges: [ContestTypeEdge]
    nodes: [ContestType]
    pageInfo: PageInfo!
    totalCount: Int!
}

type ContestTypeEdge {
    node: ContestType
    cursor: String!
}

type ContestType {
    id: Int!
    name: String!
    berry_flavor: NamedAPIResource!
    names: [ContestName!]!
}

type ContestName {
    name: String!
    color: String!
    language: NamedAPIResource!
}

type ContestEffectConnection {
    edges: [ContestEffectEdge]
    nodes: [ContestEffect]
    pageInfo: PageInfo!
    totalCount: Int!
}

type ContestEffectEdge {
    node: ContestEffect
    cursor: String!
}

type ContestEffect {
    id: Int!
    appeal: Int!
    jam: Int!
    effect_entries: [Effect!]!
    flavor_text_entries: [FlavorText!]!
}

type Query {
    berries(first: Int, after: String): BerryConnection!
    berry(id: Int!): Berry

    berryFirmnesses(first: Int, after: String): BerryFirmnessConnection!
    berryFirmness(id: Int!): BerryFirmness

    berryFlavors(first: Int, after: String): BerryFlavorConnection!
    berryFlavor(id: Int!): BerryFlavor

    contestTypes(first: Int, after: String): ContestTypeConnection!
    contestType(id: Int!): ContestType

    contestEffects(first: Int, after: String): ContestEffectConnection!
    contestEffect(id: Int!): ContestEffect
}
`);

export default schema;
