import React from 'react';
import './Hero.css';
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link";
import HeroVideo from 'url:./Assets/HeroVideo.mp4';
import HeroVideoCompressed from 'url:./Assets/HeroVideoCompressed.mp4';
import ArrowRight from './Icons/arrow-right.svg';

const Hero = () => {
    const playVideo = () => {
        const video = document.getElementById('hero-video');
        video.play();
    }

    React.useEffect(() => {
        playVideo();
    })

    return (
        <section id="home">
            <div className="hero">
                <video id="hero-video" autoPlay loop muted>
                    <source src={HeroVideoCompressed} type="video/mp4"/>
                </video>
                <div className="hero-text-box">
                    <h1 className='glowingText'>LAC X FILMS</h1>
                    <h2 className='glowingText'>KEVIN LACROIX</h2>
                    <AnchorLink href='#featuredwork'>
                        <button className='btn-banner glowingText' type="button">Featured Work <img src={ArrowRight}
                                                                                                    alt="Arrow Right"/>
                        </button>
                    </AnchorLink><br/>
                    <button onClick={playVideo} className='hidden btn-banner glowingText' type="button">Play Video</button>
                </div>
            </div>
        </section>
    )
}

export default Hero;