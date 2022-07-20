import React from 'react';
import "./ContactForm.css";
import {useForm, ValidationError} from "@formspree/react";
import {useTranslation} from "react-i18next";

const ContactForm = () => {
	const {t} = useTranslation();
	const [state, handleSubmit] = useForm("mvolnole");
	if (state.succeeded) {
		return <p>{t("thanks_contact")}</p>;
	}

	return (
		<form className="form-container" onSubmit={handleSubmit}>
			<div className="form-group">
				<div className="form-row">
					<label htmlFor="name">{t("name")}</label>
					<input type="text" name="name" id="name" placeholder={t("placeholder_name")}/>
					<ValidationError field="name" errors={state.errors}/>
				</div>

				<div className="form-row">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" placeholder={t("placeholder_mail")}/>
					<ValidationError field="email" errors={state.errors}/>
				</div>

				<div className="form-row">
					<label htmlFor="subject">{t("subject")}</label>
					<input type="text" name="subject" id="subject" placeholder={t("placeholder_subject")}/>
					<ValidationError field="subject" errors={state.errors}/>
				</div>

				<div className="form-row">
					<label htmlFor="message">Message</label>
					<textarea name="message" id="message" cols="30" rows="10" placeholder={t("placeholder_message")}></textarea>
					<ValidationError field="message" errors={state.errors}/>
				</div>
			</div>

			<button className="submitBtn" type="submit">{t("submit")}</button>
		</form>
	);
}

export default ContactForm;