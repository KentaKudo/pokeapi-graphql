import { connection, ConnectionFn, node } from "./pagination";
import * as ENDPOINTS from "./endpoints";

interface Ability {
  id: number;
}

export const abilities: ConnectionFn<Ability> = connection(ENDPOINTS.ABILITY);
export const ability = node(ENDPOINTS.ABILITY);

interface Characteristic {
  id: number;
}

export const characteristics: ConnectionFn<Characteristic> = connection(
  ENDPOINTS.CHARACTERISTIC
);
export const characteristic = node(ENDPOINTS.CHARACTERISTIC);

interface EggGroup {
  id: number;
}

export const eggGrops: ConnectionFn<EggGroup> = connection(ENDPOINTS.EGG_GROUP);
export const eggGroup = node(ENDPOINTS.EGG_GROUP);

interface Gender {
  id: number;
}

export const genders: ConnectionFn<Gender> = connection(ENDPOINTS.GENDER);
export const gender = node(ENDPOINTS.GENDER);

interface GrowthRate {
  id: number;
}

export const growthRates: ConnectionFn<GrowthRate> = connection(
  ENDPOINTS.GROWTH_RATE
);
export const growthRate = node(ENDPOINTS.GROWTH_RATE);

interface Nature {
  id: number;
}

export const natures: ConnectionFn<Nature> = connection(ENDPOINTS.NATURE);
export const nature = node(ENDPOINTS.NATURE);

interface PokeathlonStat {
  id: number;
}

export const pokeathlonStats: ConnectionFn<PokeathlonStat> = connection(
  ENDPOINTS.POKEATHLON_STAT
);
export const pokeathlonStat = node(ENDPOINTS.POKEATHLON_STAT);

interface Pokemon {
  id: number;
}

export const pokemons: ConnectionFn<Pokemon> = connection(ENDPOINTS.POKEMON);
export const pokemon = node(ENDPOINTS.POKEMON);

interface PokemonLocationArea {
  id: number;
}

export const pokemonLocationAreas: ConnectionFn<PokemonLocationArea> = connection(
  ENDPOINTS.POKEMON_LOCATION_AREA
);
export const pokemonLocationArea = node(ENDPOINTS.POKEMON_LOCATION_AREA);

interface PokemonColor {
  id: number;
}

export const pokemonColors: ConnectionFn<PokemonColor> = connection(
  ENDPOINTS.POKEMON_COLOR
);
export const pokemonColor = node(ENDPOINTS.POKEMON_COLOR);

interface PokemonForm {
  id: number;
}

export const pokemonForms: ConnectionFn<PokemonForm> = connection(
  ENDPOINTS.POKEMON_FORM
);
export const pokemonForm = node(ENDPOINTS.POKEMON_FORM);

interface PokemonHabitat {
  id: number;
}

export const pokemonHabitats: ConnectionFn<PokemonHabitat> = connection(
  ENDPOINTS.POKEMON_HABITAT
);
export const pokemonHabitat = node(ENDPOINTS.POKEMON_HABITAT);

interface PokemonShape {
  id: number;
}

export const pokemonShapes: ConnectionFn<PokemonShape> = connection(
  ENDPOINTS.POKEMON_SHAPE
);
export const pokemonShape = node(ENDPOINTS.POKEMON_SHAPE);

interface PokemonSpecies {
  id: number;
}

export const pokemonMultipleSpecies: ConnectionFn<PokemonSpecies> = connection(
  ENDPOINTS.POKEMON_SPECIES
);
export const pokemonSingleSpecies = node(ENDPOINTS.POKEMON_SPECIES);

interface Stat {
  id: number;
}

export const stats: ConnectionFn<Stat> = connection(ENDPOINTS.STAT);
export const stat = node(ENDPOINTS.STAT);

interface Type {
  id: number;
}

export const types: ConnectionFn<Type> = connection(ENDPOINTS.TYPE);
export const type = node(ENDPOINTS.TYPE);
