import React from 'react';
import '../assets/img/theater.jpg';
import './App.css';

// wrapper component for application
const  App = ( { children }) => (
  <div className="App">
    <div className="App-header">
      <h1>Movie Search</h1>
      <div className="app-nav">
      </div>
    </div>
    { children }
  </div>
);

export default App;
