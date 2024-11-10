import React from 'react';
import './App.css';
import Resume from './Resume';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="my-4">
          <h1>Resume</h1>
        </header>
        <Resume />
      </div>
    </div>
  );
}

export default App;
