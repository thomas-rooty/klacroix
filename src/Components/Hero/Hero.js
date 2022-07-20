import React from 'react';
import './Hero.css';
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link";
import ArrowRight from './Icons/arrow-right.svg';
import HeroVideo from 'url:./HeroVideo.mp4';
import {useTranslation} from "react-i18next";

const Hero = ({value: {setIsSiteReady}}) => {
	const {t} = useTranslation();

	return (
		<section id="home">
			<div className="hero">
				<div dangerouslySetInnerHTML={{
					__html: `
                <video id="hero-video" loop muted playsinline autoplay>
                    <source src="${HeroVideo}" type="video/mp4" />
                </video>
            `
				}}/>
				<div className="hero-text-box">
					<h1 className='glowingText'>LAC X FILMS</h1>
					<h2 className='glowingText'>KEVIN LACROIX</h2>
					<AnchorLink href='#featuredwork'>
						<button className='btn-banner glowingText' type="button">
							{t("hello_welcome_to_react")}
							<img src={ArrowRight} alt="Arrow Right"/>
						</button>
					</AnchorLink><br/>
				</div>
			</div>
		</section>
	);
}

export default Hero;