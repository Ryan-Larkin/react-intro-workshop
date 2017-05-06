import React from 'react';

class CharacterLimit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentInput: ""
    };
  }

  _handleInput = (event) => {
    var value = event.target.value;
    if(value.length <= this.props.limit) {
      this.setState({
        currentInput: value
      });
    }
  }

  render() {
    return (
      <div>
        <input type="text" ref="userInput" onInput={this._handleInput} value={this.state.currentInput}/>
        <p>{this.props.limit - this.state.currentInput.length}</p>
      </div>
    );
  }
}

export default CharacterLimit;
