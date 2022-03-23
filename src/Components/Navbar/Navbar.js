import React from 'react';
import RideCeption from '../../Assets/rideception_logo.png';
import LGLogoBlackBg from './Assets/Icons/LFLogoBlackBg.png';
import Signature from './Assets/Icons/Signature.png';
import Instagram from './Assets/Icons/instagram.png';
import Linkedin from './Assets/Icons/linkedin.png';
import Tiktok from './Assets/Icons/tiktok.png';
import Youtube from './Assets/Icons/youtube.png';
import './Navbar.css';

// Fixed navbar that hide on scroll down
const Navbar = () => {
    // Add event listener window scroll
    window.addEventListener('scroll', () => {
        let currentScrollPos = window.pageYOffset;
        if (currentScrollPos < 225) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-80px";
        }
    });

    // Change active a item on click
    const changeActive = (e) => {
        let active = document.getElementsByClassName("active");
        active[0].className = active[0].className.replace("active", "");
        e.target.className += "active";
    }

    return (
        <div id="navbar">
            <div className='navbar-left'>
                <img className='logoNavbar' src={Signature} alt="Ride ception logo"/>
            </div>
            <div className="navbar-center">
                <a href="#" className="active" onClick={changeActive}>HOME</a>
                <a href="#" onClick={changeActive}>ABOUT</a>
                <a href="#" onClick={changeActive}>CONTACT</a>
            </div>
            <div className='navbar-right'>
                <img className='sociamedia' src={Youtube} alt="Youtube logo"/>
                <img className='sociamedia' src={Tiktok} alt="Tiktok logo"/>
                <img className='sociamedia' src={Instagram} alt="Instagram logo"/>
                <img className='sociamedia' src={Linkedin} alt="Linkedin logo"/>
            </div>
        </div>
    )
}

export default Navbar;