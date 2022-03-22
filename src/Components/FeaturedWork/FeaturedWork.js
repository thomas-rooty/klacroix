import React from 'react';
import "./FeaturedWork.css";
import {Parallax, Background} from 'react-parallax';
import FeaturedWorkBg from './Assets/Images/FeaturedWorkBg.jpg';

const FeaturedWork = () => {
    return (
        <Parallax bgImage={FeaturedWorkBg} strength={500}>
            <div style={{height: 1000}}>
                <div className="fw-content">HTML inside the parallax</div>
            </div>
        </Parallax>
    );
}

export default FeaturedWork;