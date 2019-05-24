import React from 'react';
import logo from './logo.svg';
import './App.css';
import ResponseTextBox from './ResponseTextBox';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>
         Steam API 
    </h1>
      </header>
      <body>
        <div style={{ width: '40%', height: '50%', float: 'left' }}>
        <p> Testing this </p>
          <ResponseTextBox />
        </div>
        <div style={{ width: '40%', height: '50%', float: 'right' }}>
        <p>testing that</p>
        <ResponseTextBox/>
        </div>
      </body>
    </div>
  );
}

export default App;
