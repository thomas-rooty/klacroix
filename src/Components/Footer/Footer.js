import React from "react";
import "./Footer.css";
import Contact from "../Contact/Contact";

const Footer = () => {
	const [modalIsOpen, setIsOpen] = React.useState(false);

	const openModal = () => {
		setIsOpen(true);
	}

	return (
		<section id="contact">
			<div className="footer">
				<button onClick={openModal} className="btn-footer">Contact</button>
			</div>
			<Contact modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
		</section>
	)
}

export default Footer;