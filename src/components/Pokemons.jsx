export const ListOfPokemons = ({ pokemon }) => {
  return (
    <ul>
      <li key={pokemon.id}>
        <h3>{pokemon.name}</h3>
        <p>{pokemon.weight}</p>
        <img
          src={pokemon.image}
          alt={pokemon.name}
        />
      </li>
    </ul>
  )
}

export const NoPokemonResults = () => {
  return <h3>{`Pokemon ${'xxx'} not found`}</h3>
}

export const Pokemons = ({ pokemon }) => {
  const hasPokemon = !(typeof pokemon === 'string')
  return hasPokemon
    ? <ListOfPokemons pokemon={pokemon} />
    : <NoPokemonResults />
}
