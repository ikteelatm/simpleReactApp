import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyUser from './MyUser.js'


class App extends Component {
  render() {
    return (

      <div key="App" className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Basic CRM React App</h1>
        </header>
        <MyUser/>
      </div>
    );
  }
}

export default App;

