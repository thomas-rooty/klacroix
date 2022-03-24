import React from 'react';
import "./FeaturedWork.css";
import {Parallax, Background} from 'react-parallax';
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link";
import FeaturedWorkBg from './Assets/Images/FeaturedWorkBg.jpg';
import FirstVideo from './Assets/Images/Projects/1.jpg';
import SecondVideo from './Assets/Images/Projects/2.jpg';

const FeaturedWork = () => {
    return (
        <section id='featuredwork'>
            <Parallax bgImage={FeaturedWorkBg} strength={500}>
                <div style={{height: 800}}>
                    <div className="fw-content">
                        <div className="fw-header">
                            <h2 className='fw-title glowingText'>Featured Work</h2>
                        </div>
                        <div className="fw-showcase">
                            <div className="fw-oneShowcase">
                                <img src={FirstVideo} alt=""/>
                                <h2 className='fw-title glowingText'>Shot Edition #2</h2>
                            </div>
                            <div className="fw-oneShowcase">
                                <img src={SecondVideo} alt=""/>
                                <h2 className='fw-title glowingText'>One afternoon to shoot in Paris</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
        </section>
    );
}

export default FeaturedWork;