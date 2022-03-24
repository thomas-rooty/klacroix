import React from 'react';
import './Hero.css';
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link";
import ArrowRight from './Icons/arrow-right.svg';

const Hero = () => {
    const VideoLink = 'https://tcaronbucket.s3.eu-west-3.amazonaws.com/shot+in+paris+4k+DCI.mp4';
    return (
        <section id="home">
            <div className="hero">
                <div dangerouslySetInnerHTML={{
                    __html: `
                <video id="hero-video" loop muted playsinline autoplay>
                    <source src="${VideoLink}" type="video/mp4" />
                </video>
                <audio rel="audio_tag" autoplay src="https://www.mboxdrive.com/HeroSound.mp3" type="audio/mp3" />
            `
                }}/>
                <div className="hero-text-box">
                    <h1 className='glowingText'>LAC X FILMS</h1>
                    <h2 className='glowingText'>KEVIN LACROIX</h2>
                    <AnchorLink href='#featuredwork'>
                        <button className='btn-banner glowingText' type="button">Featured Work
                            <img src={ArrowRight} alt="Arrow Right"/>
                        </button>
                    </AnchorLink><br/>
                </div>
            </div>
        </section>
    );
}

export default Hero;