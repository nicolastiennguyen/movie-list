import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    event.preventDefault();
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
      {this.state.isToggleOn ? 'Watched' : 'Unwatched'}
      </button>
    )
  }
}

export default Toggle;