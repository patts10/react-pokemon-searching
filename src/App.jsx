import './App.css'
import { Pokemons } from './components/Pokemons'
import { usePokemon } from './hooks/usePokemon'

function App () {
  const { pokemon } = usePokemon()
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
        <Pokemons pokemon={pokemon} />
      </main>
    </div>
  )
}

export default App
