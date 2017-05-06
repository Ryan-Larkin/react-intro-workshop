import React from 'react';

function numberOfTimes(action, times) {
  if (times === 0)
    return `You never ${action}`;
  else if (times === 1)
    return `You ${action} once`;
  else if (times === 2)
    return `You ${action} twice`;
  else
    return `You ${action} ${times} times`;
}

class YouClicked extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    };
  }

  _handleButtonClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
  }

  _handleResetClick = () => {
    this.setState({
      timesClicked: 0,
      timesReset: this.state.timesReset ? this.state.timesReset + 1 : 1
    });
  }

  render() {
    return (
      <div>
        <button onClick={this._handleButtonClick}>Click Here</button>
        <button onClick={this._handleResetClick}>Reset Here</button>
        {<p>{numberOfTimes('clicked the button', this.state.timesClicked)}</p>}
        {this.state.timesReset ? <p>{numberOfTimes('reset', this.state.timesReset)}</p> : ""}
      </div>
    );
  }
}

export default YouClicked;
