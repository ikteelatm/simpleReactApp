import React, { Component } from 'react';
import logo from './amdocs-logo.png';
import './App.css';
import MyUser from './MyUser.js'


class App extends Component {
  render() {
    return (

      <div key="App" className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Amdocs Task, which describing the users defined at task</h1>
        </header>
        <p className="App-intro">
          Users
        </p>
        <MyUser />
          
      </div>
    );
  }
}

export default App;

