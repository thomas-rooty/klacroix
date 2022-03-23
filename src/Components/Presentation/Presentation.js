import React from "react";
import "./Presentation.css";
import Kevin from "./kevin.jpg";

const Presentation = () => {
    return (
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
                        After almost four years in the film industry, I have made rapid progress in developing my
                        skillsets
                        as a Creative Director with a solid background in photo and video.</p>
                    <p>As your client, I will execute and deliver your projects with solid communication, proficient
                        organization, and a deep understanding of successful social media marketing strategies</p>
                    <p>Working together, we can elevate your social media content and experience to the next level
                        through
                        immersive visuals, detailed sound design, and professional-grade editing.</p>
                </div>
                <div className="presentation-photo">
                    <img src={Kevin} alt="presentation"/>
                </div>
            </div>
        </div>
    )
}

export default Presentation;