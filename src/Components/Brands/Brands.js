import React from 'react';
import "./Brands.css";
import Crewkerz from "./Assets/Brands/crewkerz.png";
import Lf from "./Assets/Brands/lf.png";
import Nikon from "./Assets/Brands/nikon.png";
import Porsche from "./Assets/Brands/porsche.png";
import {useTranslation} from "react-i18next";

const Brands = () => {
	const {t} = useTranslation();
	return (
		<div className="brands-bg">
			<h1 className="glowingText">{t("brands")}</h1>
			<div className="brands-wrapper">
				<div className="brands-row">
					<img src={Crewkerz} alt="crewkerz" className="brands-img"/>
					<img src={Lf} alt="lf" className="brands-img lf"/>
					<img src={Nikon} alt="nikon" className="brands-img"/>
					<img src={Porsche} alt="porsche" className="brands-img"/>
				</div>
			</div>
		</div>
	)
}

export default Brands;