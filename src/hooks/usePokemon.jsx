import pokemonResponse from '../mocks/with-results.json'

export const usePokemon = () => {
  const pokemon = pokemonResponse

  const mappedPokemon = {
    id: pokemon.id,
    name: pokemon.name,
    weight: pokemon.weight,
    image: pokemon.sprites.other.home.front_default
  }

  return { pokemon: mappedPokemon }
}
