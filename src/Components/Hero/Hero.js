import React from 'react';
import './Hero.css';
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link";
import HeroVideo from 'url:./Assets/HeroVideo.mp4';
import HeroVideoCompressed from 'url:./Assets/HeroVideoCompressed.mp4';
import HeroVideoMobile from 'url:./Assets/HeroVideoCompressed.gif';
import ArrowRight from './Icons/arrow-right.svg';

const Hero = () => {
    const [isMobile, setIsMobile] = React.useState(false);
    const getWindowWidth = () => {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    };

    React.useEffect(() => {
        let windowWidth = getWindowWidth();
        if (windowWidth < 1100) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, []);

    return (
        <section id="home">
            <div className="hero">
                {!isMobile ?
                    <video id="hero-video" autoPlay loop muted>
                        <source src={HeroVideoCompressed} type="video/mp4"/>
                    </video>
                    :
                    <img className="videoGif" id="hero-video" src={HeroVideoMobile} alt=""/>
                }
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