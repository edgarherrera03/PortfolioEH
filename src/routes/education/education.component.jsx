import TitleSection from "../../components/title-section/title-section.component";
import { useLanguage } from "../../context/language/language.context";
import {
	EducationContainer,
	EducationDegree,
	DegreeContainer,
	DatesContainer,
} from "./education.styles";

const Education = () => {
	const { language } = useLanguage();
	return (
		<div id="education">
			<EducationContainer>
				<TitleSection>
					{language === "en" ? "Education" : "Éducation"}
				</TitleSection>
				<DegreeContainer>
					<EducationDegree>
						<i className="fa-solid fa-graduation-cap"></i>
						<DatesContainer>
							<span className="date">2024 - 2026</span>
							<span className="degree">
								{language === "en"
									? "Master in Innovation Management"
									: "Programme Grande École - Business Mediation"}
							</span>
							<span className="school">EmLyon Business School</span>
							<span>Lyon, France</span>
							<p>
								{language === "en"
									? "Currently pursuing a double degree in Business Mediation at EmLyon Business School as part of the Programme Grande École. This experience allows me to bridge the gap between technical expertise and business strategy."
									: "Actuellement en double diplôme à l’EmLyon Business School dans le cadre du Programme Grande École. Cette expérience me permet de faire le lien entre expertise technique et stratégie d’entreprise."}
							</p>
						</DatesContainer>
					</EducationDegree>
					<EducationDegree>
						<i className="fa-solid fa-graduation-cap"></i>
						<DatesContainer>
							<span className="date">Sept 2024 - Jan 2025</span>
							<span className="degree">
								{language === "en"
									? "Academic Exchange in Software Security"
									: "Échange académique en Cybersécurité"}
							</span>
							<span className="school">University of Twente</span>
							<span>Enschede, Netherlands</span>
							<p>
								{language === "en"
									? "Academic exchange focused on Software Security, gaining insight into European approaches to cybersecurity and secure software design."
									: "Échange académique axé sur la sécurité des logiciels, permettant d’acquérir une compréhension des approches européennes en cybersécurité et en conception de logiciels sécurisés."}
							</p>
						</DatesContainer>
					</EducationDegree>
					<EducationDegree>
						<i className="fa-solid fa-graduation-cap"></i>
						<DatesContainer>
							<span className="date">2022 - 2025</span>
							<span className="degree">
								{language === "en"
									? "Master of Computer and Microelectronics Engineering"
									: "Ingénierie en informatique et microélectronique"}
							</span>
							<span className="school">École des Mines Saint-Étienne</span>
							<span>Gardanne, France</span>
							<p>
								{language === "en"
									? "Engineering studies with a specialization in Computer Science and Microelectronics. I have developed strong technical skills in programming, project management, and cybersecurity while actively engaging in student associations."
									: "Études d’ingénierie avec une spécialisation en informatique et microélectronique. J’ai développé de solides compétences techniques en programmation, en gestion de projet et en cybersécurité, tout en m’impliquant activement dans des associations étudiantes."}
							</p>
						</DatesContainer>
					</EducationDegree>
					<EducationDegree>
						<i className="fa-solid fa-graduation-cap"></i>
						<DatesContainer>
							<span className="date">2020 - 2022</span>
							<span className="degree">
								{language === "en"
									? "Preparatory class for engineering school (CPGE MPSI/MP)"
									: "Classe préparatoire aux Grandes Écoles (MPSI/MP)"}
							</span>
							<span className="school">Lycée Jean Moulin</span>
							<span>Forbach, France</span>
							<p>
								{language === "en"
									? "Completed a two-year intensive preparatory program in Mathematics and Physics (MPSI/MP), designed to prepare students for entrance into top engineering schools in France."
									: "J'ai suivi un programme intensif de deux ans en Mathématiques et Physique (MPSI/MP), conçu pour préparer les étudiants aux concours des meilleures écoles d’ingénieurs en France."}
							</p>
						</DatesContainer>
					</EducationDegree>
				</DegreeContainer>
			</EducationContainer>
		</div>
	);
};

export default Education;
