import React from 'react';
import movieData from './MovieData.js'
import Toggle from './Toggle.jsx'

const MovieList = (props) => (
  props.movies.map((movie) => {
    return (
      <div key = {movie.title}>
        <p>{movie.title}</p>
        <Toggle />
      </div>
  )})
)

export default MovieList;

// inside map
// if watched --> render and return child
// if not, then nothing happens to that child