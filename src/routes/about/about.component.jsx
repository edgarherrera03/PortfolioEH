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
import { languageListEn, languageListFr } from "../../assets/objects-list";
import { useLanguage } from "../../context/language/language.context";

import ProgressBar from "../../components/progress-bar/progress-bar.component";

export const scrollToSection = (id) => {
	const section = document.getElementById(id);
	section.scrollIntoView({ behavior: "smooth", block: "start" });
};

const About = () => {
	const { language } = useLanguage();
	return (
		<div id="about">
			<AboutContainer>
				<ProfilePhotoContainer
					style={{
						backgroundImage: `url(https://i.ibb.co/wzTy8xN/photo-cv.jpg)`,
					}}
				/>
				<TextAboutMeContainer>
					<span>{language === "en" ? "Who am I?" : "Qui suis-je ?"}</span>
					<h2>{language === "en" ? "About me" : "À propos de moi"}</h2>
					{language === "en" ? (
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
					) : (
						<p>
							Je suis Edgar Herrera, étudiant en{" "}
							<span>Ingénierie informatique et microélectronique</span> à
							l'École des Mines de Saint-Étienne, actuellement en double diplôme
							en <span>Management de l'Innovation</span> à l'EmLyon Business
							School. Mes principaux centres d’intérêt sont la cybersécurité, la
							sécurité des logiciels et le développement de systèmes. En
							complément de mon parcours académique, j’ai également été impliqué
							dans des associations étudiantes, où j’ai acquis une expérience
							concrète en gestion, budgétisation et planification financière.
						</p>
					)}

					<PersonalInformationContainer>
						<Info>
							<span>{language === "en" ? "Degree:" : "Diplôme :"}</span>
							<p>
								{language === "en"
									? "MSc in Cybersecurity & Management"
									: "Master en Cybersécurité et Management"}
							</p>
						</Info>
						<Info>
							<span>{language === "en" ? "Location:" : "Lieu :"}</span>
							<p>Lyon, France</p>
						</Info>
						<Info>
							<span>{language === "en" ? "Phone:" : "Téléphone :"}</span>
							<p>+33 7 64 62 50 14</p>
						</Info>
						<Info>
							<span>{language === "en" ? "Email:" : "Mail :"}</span>
							<p>herreraedgar03@icloud.com</p>
						</Info>
					</PersonalInformationContainer>
					<Separator />
					<SocialMediaContainer>
						<SocialMedia
							onClick={() =>
								window.open("https://www.linkedin.com/in/edgar-herreras")
							}>
							<i className="fa-brands fa-linkedin"></i>
							<span>Edgar Herrera</span>
						</SocialMedia>
						<SocialMedia
							onClick={() => window.open("https://github.com/edgarherrera03")}>
							<i className="fa-brands fa-github"></i>
							<span>@edgarherrera03</span>
						</SocialMedia>
					</SocialMediaContainer>
					<Button
						buttonType="work"
						onClick={() => scrollToSection("portfolio")}>
						{language === "en" ? "Visit my works" : "Voir mes projets"}
					</Button>
				</TextAboutMeContainer>
			</AboutContainer>
			<Separator />
			<LanguageContainer>
				<LanguageText>
					<span>{language === "en" ? "Languages" : "Langues"}</span>

					<p>
						{language === "en"
							? "As an international student, I had the opportunity to live abroad for my studies, which allowed me to immerse myself in different cultures and develop strong language skills. These experiences have taught me how to adapt quickly to new environments, work effectively with people from diverse backgrounds, and remain open-minded in unfamiliar situations."
							: "En tant qu'étudiant international, j'ai eu l'opportunité de vivre à l'étranger pour mes études, ce qui m'a permis de m'immerger dans différentes cultures et de développer de solides compétences linguistiques. Ces expériences m'ont appris à m'adapter rapidement à de nouveaux environnements, à travailler efficacement avec des personnes d'horizons variés, et à rester ouvert d'esprit face à des situations inconnues."}
					</p>
				</LanguageText>
				<Languages>
					{language === "en"
						? languageListEn.map(({ title, performance }) => (
								<Language key={title}>
									<p>{title}</p>
									<ProgressBar skillType="language" percentage={performance} />
								</Language>
						  ))
						: languageListFr.map(({ title, performance }) => (
								<Language key={title}>
									<p>{title}</p>
									<ProgressBar skillType="language" percentage={performance} />
								</Language>
						  ))}
				</Languages>
			</LanguageContainer>
		</div>
	);
};

export default About;
