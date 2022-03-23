import React from "react";
import "./Presentation.css";
import Kevin from "./kevin.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link";
import {Parallax, Background} from 'react-parallax';
import PresBg from "./urbexbg.jpeg";

const Presentation = () => {
    return (
        <section id='about'>
            <Parallax bgImage={PresBg} strength={800}>
                <div style={{height: 550}}>
                    <div className="presentation-container">
                        <div className="presentation-header">
                            <h2 className='fw-title glowingText'>ABOUT</h2>
                        </div>
                        <div className="presentation-wrapper">
                            <div className="presentation-content">
                                <h1 className="presentation-title">
                                    Kevin Lacroix
                                </h1>
                                <h2 className="presentation-sub glowingText">
                                    A creative videast and pilot drone
                                </h2>
                                <p>
                                    After almost 3 years to develop my skillsets in film making, I decided to launch my
                                    own
                                    business.
                                </p>
                                <p>
                                    I'm a certified professional drone pilot and an experimented filmaker<br/>
                                    I can take care of all the production :<br/>
                                    Filming, editing and delivering the project
                                </p>
                                <p>
                                    Working together, we can elevate your social media content and experience to the
                                    next
                                    level
                                    through immersive visuals, detailed sound design, and professional-grade editing.
                                </p>
                            </div>
                            <div className="presentation-photo">
                                <img src={Kevin} alt="presentation"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
        </section>
    )
}

export default Presentation;