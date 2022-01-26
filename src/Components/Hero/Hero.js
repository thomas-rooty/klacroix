import React from 'react';
import './Hero.css';

// Import assets/hero.mp4
import HeroVideo from '../../Assets/HeroVideo.mp4';

const Hero = () => {
    // Fixed video in the center of the screen (hero.mp4)
    return (
        <div className="hero">
            <video autoPlay loop muted>
                <source src={HeroVideo} type="video/mp4" />
            </video>
            <div className="hero-text-box">
                <h1 className='glowingText'>K. LACROIX</h1>
                <h2 className='glowingText'>RIDE CEPTION</h2>
                <button className='btn-banner glowingText' type="button">Featured Work</button>
            </div>
        </div>
    )
}

export default Hero;