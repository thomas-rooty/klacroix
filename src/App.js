import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import FeaturedWork from "./Components/FeaturedWork/FeaturedWork";
import Brands from "./Components/Brands/Brands";
import Presentation from "./Components/Presentation/Presentation";
import Footer from "./Components/Footer/Footer";

const App = () => {
    const [isSiteReady, setIsSiteReady] = React.useState(false);
    return (
        <div className="App">
            {!isSiteReady && <h1>Site is loading...</h1>}
            <Hero value={{isSiteReady, setIsSiteReady}}/>
            <Navbar/>
            <FeaturedWork/>
            <Brands/>
            <Presentation/>
            <Footer/>
        </div>
    );
}

export default App;