import React from 'react';
import './App.css';

// Import components
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import FeaturedWork from "./Components/FeaturedWork/FeaturedWork";

const App = () => {
    return (
        <div className="App">
            <Hero/>
            <Navbar/>
            <FeaturedWork/>
        </div>
    );
}

export default App;