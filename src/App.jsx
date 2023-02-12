import './App.css'

function App () {
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
        results are going to be here
      </main>
    </div>
  )
}

export default App
