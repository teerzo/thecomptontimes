import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Articles from './articles';

function App() {
  return (
    <div className="App">
      <Header />

      <Articles />
    </div>
  );
}

export default App;
