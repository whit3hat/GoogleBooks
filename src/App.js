import React from 'react';
import Books from './pages/Books';
import Nav from './components/Nav';
const express = require('express');




function App() {
  return (
    <div>
      <Nav />
      <Books />
    </div>
  );
}

export default App;
