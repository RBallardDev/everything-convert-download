import React from 'react';
import ApiTest from './ApiTest';
import ImageConverter from './ImageConverter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Everything Convert and Download</h1>
        <ApiTest />
        <ImageConverter />
      </header>
    </div>
  );
}

export default App;
