import React from 'react';

class GithubSearchForm extends React.Component {  
  _handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.refs.userInput.value);
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <p>Enter a GitHub username:</p>
        <input type="text" ref="userInput"/>
        <button>Go!</button>
      </form>
    );
  }
};

export default GithubSearchForm;
