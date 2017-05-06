import React from 'react';

class CharacterCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentInput: ""
    };
  }

  _handleInput = (event) => {
    this.setState({
      currentInput: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input type="text" ref="userInput" onInput={this._handleInput}/>
        <p>{this.state.currentInput.length}</p>
      </div>
    );
  }
}

export default CharacterCounter;
