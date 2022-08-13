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
    this.props.changeWatchStatus(this.props.movie);
  }

  render() {
    const isWatched = this.state.isWatched;
    return (
      <button onClick={this.handleClick} value={isWatched}>
      {this.state.isWatched ? 'Watched' : 'Unwatched'}
      </button>
    )
  }
}

export default Toggle;