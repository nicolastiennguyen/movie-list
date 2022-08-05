import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isWatched: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    event.preventDefault();
    this.setState({isWatched: !this.state.isWatched});
  }

  render() {
    return (
      <button onClick={this.handleClick}>
      {this.state.isWatched ? 'Watched' : 'Unwatched'}
      </button>
    )
  }
}

export default Toggle;