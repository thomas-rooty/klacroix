import React from 'react';
import './App.css';

// Import components
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

const App = () => {
    return (
      <div className="App">
        <Hero />
        <Navbar />
      </div>
    );
}

export default App;