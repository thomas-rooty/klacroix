import React from 'react';
import "./FeaturedWork.css";
import {Parallax, Background} from 'react-parallax';
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link";
import FeaturedWorkBg from './Assets/Images/FeaturedWorkBg.jpg';

const FeaturedWork = () => {
    return (
        <section id='featuredwork'>
            <Parallax bgImage={FeaturedWorkBg} strength={500}>
                <div style={{height: 900}}>
                    <div className="fw-content">
                        <div className="fw-header">
                            <h2 className='fw-title glowingText'>Featured Content</h2>
                        </div>
                    </div>
                </div>
            </Parallax>
        </section>
    );
}

export default FeaturedWork;