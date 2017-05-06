import React from 'react';

class NumberGuessing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  _startGame = () => {
    this.setState({
      gameStatus: 'playing',
      numberToGuess: Math.floor(Math.random() * 100) + 1,
      guesses: []
    });
  }

  _onUserGuess = (event) => {
    event.preventDefault();
    if (Number(this.refs.userGuess.value) === this.state.numberToGuess) {
      this.setState({
        gameStatus: 'win'
      });
    }
    else if (this.state.guesses.length === 4){
      this.setState({
        gameStatus: 'lose'
      })
    }
    else {
      this.setState({
        guesses: this.state.guesses.concat([this.refs.userGuess.value])
      });
      this.refs.userGuess.value = "";
    }
  }

  componentDidMount() {
    this._startGame();
  }

  render() {
    if(!this.state.gameStatus)
      return null;
    else if (this.state.gameStatus === 'playing') {
      return (
        <div>
          <form onSubmit={this._onUserGuess}>
            <p>Guess a number between 1 and 100</p>
            <p>Your guesses: {this.state.guesses.join(', ')}</p>

            {this.state.guesses[this.state.guesses.length - 1] > this.state.numberToGuess && <p>Too High</p>}
            {this.state.guesses[this.state.guesses.length - 1] < this.state.numberToGuess && <p>Too Low</p>}

            {this.state.guesses.length <= 5 && <p>Remaining tries: {5 - this.state.guesses.length}</p>}
            <input type="text" ref="userGuess" />
            <button>Guess</button>
          </form>
        </div>
      );
    }
    else {
      return (
        <div>
          <p>Guess a number between 1 and 100</p>
          <p>You {this.state.gameStatus}. The number was {this.state.numberToGuess}.</p>
          <button onClick={this._startGame}>New Game</button>
        </div>
      );
    }
  }
}

export default NumberGuessing;
