import React from 'react';
import './App.css';

// Import components
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import FeaturedWork from "./Components/FeaturedWork/FeaturedWork";
import Brands from "./Components/Brands/Brands";
import Presentation from "./Components/Presentation/Presentation";
import Footer from "./Components/Footer/Footer";

const App = () => {
    return (
        <div className="App">
            <Hero/>
            <Navbar/>
            <FeaturedWork/>
            <Brands/>
            <Presentation/>
            <Footer/>
        </div>
    );
}

export default App;