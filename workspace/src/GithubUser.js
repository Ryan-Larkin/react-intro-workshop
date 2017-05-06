import React from 'react';

class GithubProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  fetchData() {
      fetch(`https://api.github.com/users/${this.props.username}`)
      .then(data => {return data.json()})
      .then(userData => {
        this.setState({
          user: userData
        });
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.username !== prevProps.username) {
      this.fetchData();
    }
  }

  render() {
    const avatarStyle = {
      borderRadius:'50%',
      float:'left',
      height:'50px',
      width:'50px',
      marginLeft: '25px'
    };

    const userInfoStyle = {
      display:'flex',
      justifyContent: 'flex-start',
      alignItems:'flex-start',
      flexDirection:'column',
      marginLeft: '25px',
      paddingLeft: '25px'
    };

    if(this.state.user) {
      return (
        <div className="github-user">
          <img style={avatarStyle} className="github-user__avatar" src={this.state.user.avatar_url} alt=""/>
          <div style={userInfoStyle} className="github-user__info">
            <p>{this.state.user.login} ({this.state.user.name})</p>
            {this.state.user && <p>{this.state.user.bio}</p>}
          </div>
        </div>
      );
    }
    else {
      return (
        <div>
          <p>LOADING...</p>
        </div>
      );
    }
  }
}

export default GithubProfile;
