import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import React from 'react';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Shop />
      </div>
    </>
  );
}

export default App;
