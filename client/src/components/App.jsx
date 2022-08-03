import React from 'react';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'

// const App = (props) => (
//   <div>
//     <input type="text" placeholder="Search..."/>
//     <h1>Movie List:</h1>
//     {movieData.map((movie) => {
//       return (
//         <div>
//           <p>{movie.title}</p>
//         </div>
//       );
//     })}
//   </div>
// );

// const App = (props) => {
//   return (
//     <div>
//     <h1>Movie List:</h1>
//     <MovieList />
//   </div>
//   )
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div>
      <Search />
      <h1>Movie List:</h1>
      <MovieList />
    </div>
    )
  }
}


// to test for console.log
// const App = (props) => {
//   return (
//     <div>
//     <h1>Movie List:</h1>
//   </div>
//   )
// }

export default App;