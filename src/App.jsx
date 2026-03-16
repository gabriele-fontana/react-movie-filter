import { useState, useEffect } from "react"

const movies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]


function App() {
  
  const [search, setSearch] = useState('')
  const filteredMovies = movies.filter(movie =>
    movie.genre.includes(search)
  )
  
  
  
  return (
    <div>
      <h1>Movies</h1>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
      />


      <ul>
        {filteredMovies.map((movie) => (
          <li>
            <h3>{movie.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );



}

export default App
