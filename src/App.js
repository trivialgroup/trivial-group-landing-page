import React from 'react';
import { ReactComponent as Logo } from './assets/img/trivial-logo-13_Dark.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className="app-logo"/>
        <h1 className="trivial-group-header">
          Trivial Group
        </h1>
      </header>
    </div>
  );
}

export default App;
