import React from 'react';
import "./ContactForm.css";
import {useForm, ValidationError} from "@formspree/react";

const ContactForm = () => {
	const [state, handleSubmit] = useForm("mvolnole");
	if (state.succeeded) {
		return <p>Thanks for joining me!</p>;
	}

	return (
		<form className="form-container" onSubmit={handleSubmit}>
			<div className="form-group">
				<div className="form-row">
					<label htmlFor="name">Name</label>
					<input type="text" name="name" id="name" placeholder="How should I name you?"/>
					<ValidationError field="name" errors={state.errors}/>
				</div>

				<div className="form-row">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" placeholder="How can I recontact you?"/>
					<ValidationError field="email" errors={state.errors}/>
				</div>

				<div className="form-row">
					<label htmlFor="subject">Subject</label>
					<input type="text" name="subject" id="subject" placeholder="Why are you contacting me?"/>
					<ValidationError field="subject" errors={state.errors}/>
				</div>

				<div className="form-row">
					<label htmlFor="message">Message</label>
					<textarea name="message" id="message" cols="30" rows="10" placeholder="Tell me everything!"></textarea>
					<ValidationError field="message" errors={state.errors}/>
				</div>
			</div>

			<button className="submitBtn" type="submit">Submit</button>
		</form>
	);
}

export default ContactForm;