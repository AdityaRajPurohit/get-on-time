import React from 'react';
import './App.css';
import Navbar from './component/navbar/Navbar.js';
import Container from './component/content/Container.js';
function App() {
  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center" style={{ height: 100 }}>
        <Container />
      </div>
    </div>
  );
}

export default App;
