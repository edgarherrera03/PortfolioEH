import Button from "../../components/button/button.component";
import {
	AboutContainer,
	ProfilePhotoContainer,
	TextAboutMeContainer,
	PersonalInformationContainer,
	Info,
	Separator,
	SocialMediaContainer,
	SocialMedia,
	LanguageContainer,
	LanguageText,
	Languages,
	Language,
} from "./about.styles";

import ProgressBar from "../../components/progress-bar/progress-bar.component";

export const scrollToSection = (id) => {
	const section = document.getElementById(id);
	section.scrollIntoView({ behavior: "smooth", block: "start" });
};

const About = () => {
	return (
		<div id="about">
			<AboutContainer>
				<ProfilePhotoContainer
					style={{
						backgroundImage: `url(https://i.ibb.co/wzTy8xN/photo-cv.jpg)`,
					}}
				/>
				<TextAboutMeContainer>
					<span>Who am I?</span>
					<h2>About me</h2>
					<p>
						I'm Edgar Herrera, a{" "}
						<span>Computer and Microelectronics Engineering </span>
						student at École des Mines Saint-Étienne, currently completing a
						double degree in <span>Innovation Management</span> at EmLyon
						Business School. My main interests lie in cybersecurity, software
						security, and system development. In addition to my academic
						background, I have worked in student organizations, where I gained
						hands-on experience in management, budgeting, and financial
						planning.
					</p>
					<PersonalInformationContainer>
						<Info>
							<span>Degree:</span>
							<p>MSc in Cybersecurity & Management</p>
						</Info>
						<Info>
							<span>Location:</span>
							<p>Lyon, France</p>
						</Info>
						<Info>
							<span>Phone:</span>
							<p>+33 7 64 62 50 14</p>
						</Info>
						<Info>
							<span>Email:</span>
							<p>herreraedgar03@icloud.com</p>
						</Info>
					</PersonalInformationContainer>
					<Separator />
					<SocialMediaContainer>
						<SocialMedia
							onClick={() =>
								window.open("https://www.linkedin.com/in/edgar-herreras")
							}>
							<i class="fa-brands fa-linkedin"></i>
							<span>Edgar Herrera</span>
						</SocialMedia>
						<SocialMedia
							onClick={() => window.open("https://github.com/edgarherrera03")}>
							<i class="fa-brands fa-github"></i>
							<span>@edgarherrera03</span>
						</SocialMedia>
					</SocialMediaContainer>
					<Button
						buttonType="work"
						onClick={() => scrollToSection("portfolio")}>
						Visit my works
					</Button>
				</TextAboutMeContainer>
			</AboutContainer>
			<Separator />
			<LanguageContainer>
				<LanguageText>
					<span>Languages</span>

					<p>
						As an international student, I had the opportunity to live abroad
						for my studies, which allowed me to immerse myself in different
						cultures and develop strong language skills. These experiences have
						taught me how to adapt quickly to new environments, work effectively
						with people from diverse backgrounds, and remain open-minded in
						unfamiliar situations.
					</p>
				</LanguageText>
				<Languages>
					<Language>
						<p>French</p>
						<ProgressBar skillType="language" percentage={95} />
					</Language>
					<Language>
						<p>English</p>
						<ProgressBar skillType="language" percentage={85} />
					</Language>
					<Language>
						<p>Spanish</p>
						<ProgressBar skillType="language" percentage={100} />
					</Language>
					<Language>
						<p>Portuguese</p>
						<ProgressBar skillType="language" percentage={50} />
					</Language>
					<Language>
						<p>German</p>
						<ProgressBar skillType="language" percentage={20} />
					</Language>
				</Languages>
			</LanguageContainer>
		</div>
	);
};

export default About;
