import React from 'react';
import Modal from "react-modal";
import ContactForm from '../ContactForm/ContactForm';
import "./Contact.css";

// noinspection JSUnresolvedFunction
Modal.setAppElement('#root');

const Contact = ({setIsOpen, modalIsOpen}) => {

	const closeModal = (e) => {
		e.stopPropagation();
		setIsOpen(false);
	}

	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			contentLabel="Contact"
			className="Modal"
			overlayClassName="Overlay"
		>
			<div className="contact-modal-content">
				<div className="contact-modal-header">
					<h2 className="contact-modal-title">Contact me</h2>
					<button className="closeBtn" onClick={closeModal}>X</button>
				</div>
				<div className="contact-modal-body">
					<ContactForm />
				</div>
			</div>
		</Modal>
	);
}

export default Contact;