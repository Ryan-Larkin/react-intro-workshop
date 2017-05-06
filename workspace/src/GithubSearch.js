import React from 'react';
import GithubSearchForm from './GithubSearchForm';
import GithubUser from './GithubUser';

class GithubSearch extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  _handleSearch = (searchTerm) => {
    this.setState({
      username: searchTerm
    });
  }

  render() {
    return (
      <div>
        <GithubSearchForm onSearch={this._handleSearch}/>
        {this.state.username ? <GithubUser username={this.state.username}/> : null}
      </div>
    );
  }
};

export default GithubSearch;
