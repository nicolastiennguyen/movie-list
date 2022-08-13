import React from 'react';
import movieData from './MovieData.js'
import Toggle from './Toggle.jsx'

const MovieList = (props) => (
  props.movies.map((movie) => {
    return (
      <div key = {movie.title}>
        <p>{movie.title}</p>
        <Toggle
        movie = {movie}
        changeWatchStatus = {props.changeWatchStatus}
        />
      </div>
  )})
)

export default MovieList;