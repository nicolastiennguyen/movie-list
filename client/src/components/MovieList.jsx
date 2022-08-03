import React from 'react';
import movieData from './MovieData.js'

const MovieList = (props) => (
  movieData.map((movie) => {
    return (
      <div key = {movie.title}>
        <p>{movie.title}</p>
      </div>
  )})
)

export default MovieList;