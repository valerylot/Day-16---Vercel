// =====================================================================
// 🌐 api.js · the helper functions that talk to PokéAPI
// This file talks to the API. It never touches the page.
// =====================================================================
//
// Open these in Chrome to see the real JSON:
//   https://pokeapi.co/api/v2/pokemon?limit=151   → a list of names [ ]
//   https://pokeapi.co/api/v2/pokemon/25          → one Pokémon { }
// PokéAPI is free. No sign-up, no key.

const BASE_URL = "https://pokeapi.co/api/v2";

// The first `count` Pokémon: [{ name: "bulbasaur", url: "..." }, ...]
async function getPokemonList(count) {
  const res = await fetch(BASE_URL + "/pokemon?limit=" + count); // 1. order
  const data = await res.json();                                 // 2. unwrap
  return data.results;
}

// One Pokémon, trimmed down to the 3 things the game needs.
async function getPokemon(id) {
  const res = await fetch(BASE_URL + "/pokemon/" + id);
  const pokemon = await res.json();

  return {
    name: pokemon.name,
    image: pokemon.sprites.other["official-artwork"].front_default,
    type: pokemon.types[0].type.name,
  };
}

export { getPokemonList, getPokemon };
