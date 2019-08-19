import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Speak from './components/Speak';

export const asyncFunc = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Success!');
    }, 1000);
  });
};

class App extends Component {
  /*can pull this out of App class and export const and import into app.test
  static asyncFunc = () => {
    return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Success!');
    }, 1000);
    });
  };*/
  state = {
    message: '',
  }

  speak = () => {
    this.setState({message: 'Bark'});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Speak speak={this.speak} message={this.state.message}/>
        </header>
      </div>
    );
  }
}

export default App;
