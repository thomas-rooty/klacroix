import React from "react";
import "./Presentation.css";
import Kevin from "./kevin.jpg";
import {Parallax, Background} from 'react-parallax';
import PresBg from "./urbexbg.jpeg";
import {useTranslation} from "react-i18next";

const Presentation = () => {
	const {t} = useTranslation();
	return (
		<section id='about'>
			<Parallax bgImage={PresBg} strength={300}>
				<div style={{height: 650}}>
					<div className="presentation-container">
						<div className="presentation-header">
							<h2 className='fw-title glowingText'>{t("about")}</h2>
						</div>
						<div className="presentation-wrapper">
							<div className="presentation-content">
								<h1 className="presentation-title">
									Kevin Lacroix
								</h1>
								<h2 className="presentation-sub glowingText">
									{t("creative_videast")}
								</h2>
								<p>
									{t("intro_1")}
								</p>
								<p>
									{t("intro_2")} <br/>
									{t("intro_3")} <br/>
									{t("intro_4")}
								</p>
								<p>
									{t("intro_5")}
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