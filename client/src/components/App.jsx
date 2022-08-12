import React from 'react';
import movieData from './MovieData.js'
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import AddMovie from './AddMovie.jsx'
import Toggle from './Toggle.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      movies: movieData,
      addMovieValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddMovieChange = this.handleAddMovieChange.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  handleChange(event) {
    // this is how you would update the search live:
    let filteredMovies = this.state.movies.filter(movie => movie.title.toLowerCase().includes(event.target.value.toLowerCase()))
    if (filteredMovies.length === 0) {
      this.setState({movies:[{title: 'no movie by that name found'}]})
    } else {
      this.setState({movies:filteredMovies.slice()})
    }

    // this changes the state of the value to what is typed
    this.setState({value:event.target.value})

    // if nothing is typed, display all movies
    if (event.target.value === '') {
      this.setState({movies: movieData})
    }
  }

  handleSubmit(event) {
    // this is how you would show movies on submit:
    // since this is all commented out, the Go! button does nothing
    // event.preventDefault();
    // let currentSearch = this.state.value;
    // let filteredMovies = this.state.movies.filter(movie => movie.title.toLowerCase().includes(currentSearch.toLowerCase()))
    // if (filteredMovies.length === 0) {
    //   this.setState({movies:[{title: 'no movie by that name found'}]})
    // } else {
    //   this.setState({movies:filteredMovies})
    // }
  }

  handleAddMovieChange(event) {
    this.setState({addMovieValue:event.target.value})
  }

  handleAddMovie(event) {
    event.preventDefault()
    let addedMovie = this.state.addMovieValue
    movieData.push({title: addedMovie})
    this.setState({movies:movieData})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <span className = 'topBar'>
          < AddMovie
          currentValue = {this.state.addMovieValue}
          onChange = {this.handleAddMovieChange}
          onSubmit = {this.handleAddMovie}
          />
          <button id = 'add' onClick={this.handleAddMovie}>Add</button>
        </span>
        <div>
            <Search
            currentValue = {this.state.value}
            onChange = {this.handleChange}
            onSubmit = {this.handleSubmit}
            />
            <input type="submit" value="Go!"/>
        <MovieList movies = {this.state.movies}/>
        </div>
      </form>
    )
  }
}

export default App;