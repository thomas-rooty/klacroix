import React from 'react';
import './FeaturedWork.css';

const FeaturedWork = () => {
    return (
        <div className="featuredWork">
            <div className="featuredWork-text-box">
                <h3 className='glowingText'>FEATURED WORK</h3>
                <hr></hr>
            </div>
            <div className="featuredWork-content">
                <div className="featuredWork-content-items">
                    <div className="featuredWork-content-item">
                        <div className="featuredWork-content-item-image">
                            <img id='projectImg' src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' alt="" />
                        </div>
                        <div className="featuredWork-content-item-text">
                            <p>Projet 1</p>
                        </div>
                    </div>
                    <div className="featuredWork-content-item">
                        <div className="featuredWork-content-item-image">
                            <img id='projectImg' src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' alt="" />
                        </div>
                        <div className="featuredWork-content-item-text">
                            <p>Projet 2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedWork;