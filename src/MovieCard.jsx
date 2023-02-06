import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placholder.com/400'}
        alt={movie.title}
      />
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  )
}
export default MovieCard;