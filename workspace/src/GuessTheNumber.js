import React from 'react';

class GuessTheNumber extends React.Component {
  _handleButtonClick = (event) => {
    event.preventDefault();
    var guess = Number(this.refs.userGuess.value);
    if(guess > this.props.numberToGuess)
      alert("Too high");
    else if (guess < this.props.numberToGuess)
      alert("Too low");
    else if (guess === this.props.numberToGuess)
      alert("Just right");

    this.refs.userGuess.value = "";
  }

  render() {
    return (
      <div>
        <form onSubmit={this._handleButtonClick}>
          <p>Guess a number between 1 and 100</p>
          <input type="text" ref="userGuess" />
          <button>Guess</button>
        </form>
      </div>
    );
  }
}

export default GuessTheNumber;
