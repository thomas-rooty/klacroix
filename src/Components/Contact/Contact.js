import React from 'react';
import Modal from "react-modal";
import "./Contact.css";

// noinspection JSUnresolvedFunction
Modal.setAppElement('#root');

const Contact = ({setIsOpen, modalIsOpen}) => {

	const closeModal = () => {
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
					<h2 className="contact-modal-title">Contact</h2>
					<button onClick={closeModal}>X</button>
				</div>
				<div className="contact-modal-body">
					<p>coucou</p>
				</div>
			</div>
		</Modal>
	);
}

export default Contact;