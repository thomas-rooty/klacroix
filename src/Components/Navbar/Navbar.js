import React from 'react';
import './Navbar.css';

// Fixed navbar that hide on scroll down
const Navbar = () => {
    // Add event listener window scroll
    window.addEventListener('scroll', () => {
        console.log(currentScrollPos);
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
        <>
            <div id="navbar">
                <div className='navbar-left'>
                    <a href='#'>LOGO</a>
                </div>
                <div className="navbar-center">
                    <a href="#" className="active" onClick={changeActive}>HOME</a>
                    <a href="#" onClick={changeActive}>ABOUT</a>
                    <a href="#" onClick={changeActive}>CONTACT</a>
                </div>
            </div>

            <div className="text">
                <p><b>This example demonstrates how to hide a navbar when the user starts to scroll the page.</b></p>
                <p>Scroll down this frame to see the effect!</p>
                <p>Scroll up to show the navbar.</p>
                <p>Lorem ipsum dolor dummy text sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor dummy text sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </>
    )
}

export default Navbar;