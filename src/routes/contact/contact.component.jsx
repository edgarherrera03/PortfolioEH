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
	return (
		<div id="contact">
			<ContactContainer>
				<FormContainer>
					<ScreenHeader>
						<div class="screen-header-left">
							<div class="screen-header-button close"></div>
							<div class="screen-header-button maximize"></div>
							<div class="screen-header-button minimize"></div>
						</div>
						<div class="screen-header-right">
							<div class="screen-header-ellipsis"></div>
							<div class="screen-header-ellipsis"></div>
							<div class="screen-header-ellipsis"></div>
						</div>
					</ScreenHeader>
					<Form>
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
