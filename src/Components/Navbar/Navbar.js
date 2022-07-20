import React, {useEffect} from 'react';
import Signature from './Assets/Icons/Signature.png';
import Instagram from './Assets/Icons/instagram.png';
import Linkedin from './Assets/Icons/linkedin.png';
import Tiktok from './Assets/Icons/tiktok.png';
import Youtube from './Assets/Icons/youtube.png';
import './Navbar.css';
import {useTranslation} from "react-i18next";
import i18next from "i18next";

const languageMap = {
	en: {label: "EN", dir: "ltr", active: true},
	fr: {label: "FR", dir: "ltr", active: false}
};

// Fixed navbar that hide on scroll down
const Navbar = () => {
	const selected = localStorage.getItem("i18nextLng") || "en";
	const {t} = useTranslation();

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

	// Change active language on click
	const changeLanguage = (e) => {
		let active = document.getElementsByClassName("activeLanguage");
		active[0].className = active[0].className.replace("activeLanguage", "");
		e.target.className += "activeLanguage";
		i18next.changeLanguage(e.target.id);
		localStorage.setItem("i18nextLng", e.target.id);
	}

	return (
		<div id="navbar">
			<div className='navbar-left'>
				<img className='logoNavbar' src={Signature} alt="Ride ception logo"/>
			</div>
			<div className="navbar-center">
				<a href="#home" className="active" onClick={changeActive}>{t("home")}</a>
				<a href="#about" onClick={changeActive}>{t("about")}</a>
				<a href="#contact" onClick={changeActive}>CONTACT</a>
			</div>
			<div className="navbar-languages">
				<a href="#" className="activeLanguage" id="en" onClick={changeLanguage}>EN</a>
				<a href="#" id="fr" onClick={changeLanguage}>FR</a>
			</div>
			<div className='navbar-right'>
				<a href="https://www.youtube.com/channel/UCOU98_rG1FFUKVPWta1Z7eQ" target="_blank" rel="noopener noreferrer">
					<img className='socialmedia' src={Youtube} alt="Youtube"/>
				</a>
				<a href="https://www.tiktok.com/@lacroix__kevin" target="_blank" rel="noopener noreferrer">
					<img className='socialmedia' src={Tiktok} alt="Tiktok"/>
				</a>
				<a href="https://www.instagram.com/kevin__lacroix/" target="_blank" rel="noopener noreferrer">
					<img className='socialmedia' src={Instagram} alt="Instagram"/>
				</a>
				<a href="https://www.linkedin.com/in/kevin-lacroix-b5141a236/" target="_blank" rel="noopener noreferrer">
					<img className='socialmedia' src={Linkedin} alt="Linkedin"/>
				</a>
			</div>
		</div>
	)
}

export default Navbar;