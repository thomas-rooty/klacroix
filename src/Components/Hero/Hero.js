import React from 'react';
import './Hero.css';

// Import assets
import HeroVideo from './Assets/HeroVideo.mp4';
import ArrowRight from './Icons/arrow-right.svg';

const Hero = () => {
    // Fixed video in the center of the screen (hero.mp4)
    return (
        <div className="hero">
            <video autoPlay loop muted>
                <source src={HeroVideo} type="video/mp4" />
            </video>
            <div className="hero-text-box">
                <h1 className='glowingText'>LAC X FILMS</h1>
                <h2 className='glowingText'>KEVIN LACROIX</h2>
                <button className='btn-banner glowingText' type="button">Featured Work <img src={ArrowRight} alt="Arrow Right"/></button>
            </div>
        </div>
    )
}

export default Hero;