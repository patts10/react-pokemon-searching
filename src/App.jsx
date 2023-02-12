import './App.css'
import pokemonResponse from './mocks/with-results.json'

function App () {
  const pokemon = pokemonResponse
  const hasPokemon = !(typeof pokemon === 'string')

  return (
    <div className='page'>

      <header>
        <h1>Pokemon searching</h1>
        <form className='form'>
          <input placeholder='charmander, pikachu, squartle...' />
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        {
          hasPokemon
            ? (
              <ul>
                <li>
                  <h3>{pokemon.name}</h3>
                  <p>{pokemon.weight}</p>
                  <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
                </li>
              </ul>
              )
            : <h3>{`Pokemon ${'xxx'} not found`}</h3>
        }
      </main>
    </div>
  )
}

export default App
