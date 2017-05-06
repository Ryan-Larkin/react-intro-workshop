import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageCaption from './ImageCaption';
import Layout from './Layout';
import GuessTheNumber from './GuessTheNumber';
import YouClicked from './YouClicked';
import CharacterCounter from './CharacterCounter';
import CharacterLimit from './CharacterLimit';
import NumberGuessing from './NumberGuessing';
import GithubProfile from './GithubProfile';
import GithubSearch from './GithubSearch';


var imageList = [
  {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
  {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
  {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];

class App extends Component {
  renderImage(obj) {
    return <ImageCaption key={obj.id} source={obj.source} text={obj.text} />
  }

  render() {
    return (
      <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        <hr/>
          <h2>Testing ImageCaption </h2>
          <ImageCaption source={"http://i.imgur.com/D8JWn.jpg"} text={'this is the caption'} />
        <hr />
          <div>
            {imageList.map(this.renderImage)}
          </div>
        <hr />
          <Layout>
            <h2>About Us</h2>
            <p>We are <a href="https://facebook.github.io/react/">React</a> developers</p>
          </Layout>
        <hr />
          <GuessTheNumber numberToGuess={50}/>
        <hr />
          <YouClicked />
        <hr />
          <CharacterCounter />
        <hr />
          <CharacterLimit limit={140} />
        <hr />
          <NumberGuessing />
        <hr />
          <GithubProfile />
        <hr />
          <GithubSearch />
      </div>
    );
  }
}

export default App;
