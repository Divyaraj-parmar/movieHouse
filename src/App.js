import React, { useEffect, useState } from "react";
import MovieCard from './MovieCard'
//API Key :  a5fcdfaa
import "./App.css"
import SearchIcom from './search.svg'
const API_URL = "http://www.omdbapi.com?apikey=a5fcdfaa";
// const movie1 = {
//   "Title": "Superman Returns",
//   "Year": "2006",
//   "imdbID": "tt0348150",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
// }

function App() {
  const [movies, setMovies] = useState([]);
  const [searchMovieName,setsearchMovieName] = useState([]);

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovie('Superman');
  }, [searchMovieName])
  return (
    <div className="app">
      <h1>MovieHouse</h1>
      <div className="search">
        <input
          placeholder="Search Movie Name"
          value={searchMovieName}
          onChange={(e) => setsearchMovieName(e.target.value)}
        />
        <img
          src={SearchIcom}
          alt="search"
          onClick={() => searchMovie(searchMovieName)}
        />
      </div>
      {
        movies.length > 0 ?
          (<div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>) :
          (<div className="empty">
            <h1>No movies Found</h1>
          </div>)
      }

    </div>
  )
}
export default App;