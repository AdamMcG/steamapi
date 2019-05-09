import React from 'react';
import logo from './logo.svg';
import SteamService from '../API/SteamService.js';
import './App.css';

function App() {
  const testRequest = {adam:'123455'};
  SteamService.userInformationService(testRequest);
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
      </header>
    </div>
  );
}

export default App;
