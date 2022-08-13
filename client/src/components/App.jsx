import React from 'react';
import movieData from './MovieData.js'
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import AddMovie from './AddMovie.jsx'
import Toggle from './Toggle.jsx'
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      addMovieValue: '',
      currentMovies: movieData,
      allMovies: movieData
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddMovieChange = this.handleAddMovieChange.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleWatched = this.handleWatched.bind(this);
    this.handleToWatch = this.handleToWatch.bind(this);
    this.changeWatchStatus = this.changeWatchStatus.bind(this);
  }

  // initial rendering of the page:
  componentDidMount() {
    axios.get('/movies')
      .then((res) => {
        let dbMovies = res.data;
        this.setState({
          currentMovies: dbMovies,
          allMovies: dbMovies
        })
      })
  };

  handleChange(event) {
    // this is how you would update the search live:
    let filteredMovies = this.state.currentMovies.filter(movie => movie.title.toLowerCase().includes(event.target.value.toLowerCase()))
    if (filteredMovies.length === 0) {
      this.setState({currentMovies:[{title: 'no movie by that name found'}]})
    } else {
      this.setState({currentMovies:filteredMovies.slice()})
    }

    // this changes the state of the value to what is typed
    this.setState({value:event.target.value})

    // if nothing is typed, display all movies
    if (event.target.value === '') {
      this.setState({currentMovies: movieData})
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
    let addedMovie = this.state.addMovieValue
    event.preventDefault()
    axios.post('/movies', {
        title: addedMovie,
        watched: 0
      })
      .then(axios.get('/movies')
        .then((res) => {
          let dbMovies = res.data;
          this.setState({
            currentMovies: dbMovies,
            allMovies: dbMovies
          });
        }))
  }

  handleWatched(event) {
    event.preventDefault();
    let watchedMovies = this.state.allMovies.filter(movie => {
      return movie.watched === 1
    })
    this.setState({currentMovies:watchedMovies})
  }

  handleToWatch(event) {
    event.preventDefault();
    let toWatchMovies = this.state.allMovies.filter(movie => {
      return movie.watched === 0
    })
    this.setState({currentMovies:toWatchMovies})
  }

  // input movie is from toggle.jsx
  changeWatchStatus(movie) {
    console.log(movie);
    var copy = this.state.currentMovies.slice();
    for (let i = 0; i < copy.length; i++) {
      if (movie.title === copy[i].title) {
        copy[i].watched = 1 - copy[i].watched;
      }
    }
    this.setState({currentMovies:copy});
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
        <button id = 'Watched' onClick={this.handleWatched}>Watched</button>
        <button id = 'To Watch' onClick={this.handleToWatch}>To Watch</button>
            <Search
            currentValue = {this.state.value}
            onChange = {this.handleChange}
            onSubmit = {this.handleSubmit}
            />
            <input type="submit" value="Go!"/>
        <MovieList
        movies = {this.state.currentMovies}
        changeWatchStatus = {this.changeWatchStatus}
        />
        </div>
      </form>
    )
  }
}

export default App;