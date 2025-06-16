import { useRef } from "react";
import emailjs from "emailjs-com";
import Button from "../../components/button/button.component";
import {
	ContactContainer,
	FormContainer,
	Form,
	FormTextAreas,
	InfoSenderContainer,
	ButtonContainer,
	ScreenHeader,
	FormTitle,
} from "./contact.styles";

const Contact = () => {
	const formRef = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_hwzuanb", // Replace with your EmailJS service ID
				"template_yuzlled", // Replace with your EmailJS template ID
				formRef.current,
				"Ylsb6ADhFIpuGs0Bk" // Replace with your EmailJS public key (or user ID)
			)
			.then(
				(result) => {
					console.log("Message sent:", result.text);
					formRef.current.reset();
				},
				(error) => {
					console.error("Email error:", error.text);
				}
			);
	};

	return (
		<div id="contact">
			<ContactContainer>
				<FormContainer>
					<ScreenHeader>
						<div className="screen-header-left">
							<div className="screen-header-button close"></div>
							<div className="screen-header-button maximize"></div>
							<div className="screen-header-button minimize"></div>
						</div>
						<div className="screen-header-right">
							<div className="screen-header-ellipsis"></div>
							<div className="screen-header-ellipsis"></div>
							<div className="screen-header-ellipsis"></div>
						</div>
					</ScreenHeader>
					<Form ref={formRef} onSubmit={sendEmail}>
						<FormTitle>
							<span>CONTACT</span>
							<span>
								<span
									style={{
										textDecoration: "underline",
										textUnderlineOffset: "15px",
									}}>
									M
								</span>
								E
							</span>
						</FormTitle>
						<FormTextAreas>
							<InfoSenderContainer>
								<input type="text" name="name" required placeholder="Name" />
								<input type="email" name="email" required placeholder="Email" />
							</InfoSenderContainer>
							<input type="text" name="subject" placeholder="Subject" />
							<textarea name="message" required placeholder="Message" />
							<ButtonContainer>
								<Button type="submit" buttonType="contact">
									Submit
								</Button>
							</ButtonContainer>
						</FormTextAreas>
					</Form>
				</FormContainer>
			</ContactContainer>
		</div>
	);
};

export default Contact;
