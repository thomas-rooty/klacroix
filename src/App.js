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

    // This will run one time after the component mounts
    React.useEffect(() => {
        const onPageLoad = () => {
            setIsSiteReady(true);
        };

        // Check if the page has already loaded
        if (document.readyState === "complete") {
            onPageLoad();
        } else {
            window.addEventListener("load", onPageLoad);
            // Remove the event listener when component unmounts
            return () => window.removeEventListener("load", onPageLoad);
        }
    }, []);
    return (
        <div className="App">
            {isSiteReady ? (
                <>
                    <Hero/>
                    <Navbar/>
                    <FeaturedWork/>
                    <Brands/>
                    <Presentation/>
                    <Footer/>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default App;