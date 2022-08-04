import React from 'react';
import movieData from './MovieData.js'
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import AddMovie from './AddMovie.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      movies: movieData,
      // single source of truth:
      allMovies: movieData
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // let filteredMovies = this.state.allMovies.filter(movie => movie.title.toLowerCase().includes(event.target.value.toLowerCase()))
    // if (filteredMovies.length === 0) {
    //   this.setState({movies:[{title: 'no movie by that name found'}]})
    // } else {
    //   this.setState({movies:filteredMovies.slice()})
    // }
    console.log(event.target.value)
  }

  handleSubmit(event) {
    // let filteredMovies = this.state.allMovies.filter(movie => movie.title.toLowerCase().includes(event.target.value.toLowerCase()))
    // if (filteredMovies.length === 0) {
    //   this.setState({movies:[{title: 'no movie by that name found'}]})
    // } else {
    //   this.setState({movies:filteredMovies.slice()})
    // }
    this.setState({movies:[{title: 'no movie by that name found'}]})
    event.preventDefault();
  }

  handleAddMovie(event) {}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <span className = 'topBar'>
          < AddMovie />
          <input type = "submit" value = "Add"/>
        </span>
        <div>
          <span className = "bottomBar">
            <Search
            currentValue = {this.state.value}
            onChange = {this.handleChange}
            onSubmit = {this.handleSubmit}
            />
            {/* <form onSubmit = {this.handleSubmit}> */}
            <input type="submit" value="Go!"/>
            {/* </form> */}
          </span>
        <MovieList movies = {this.state.movies}/>
        </div>
      </form>
    )
  }
}

export default App;