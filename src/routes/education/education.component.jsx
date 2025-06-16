import TitleSection from "../../components/title-section/title-section.component";
// import TimeLine from "../../components/time-line/time-line.component";
import {
	EducationContainer,
	EducationDegree,
	DegreeContainer,
	DatesContainer,
} from "./education.styles";

const Education = () => {
	return (
		<div id="education">
			<EducationContainer>
				<TitleSection>Education</TitleSection>
				<DegreeContainer>
					<EducationDegree>
						<i class="fa-solid fa-graduation-cap"></i>
						<DatesContainer>
							<span className="date">2024 - 2026</span>
							<span className="degree">Master in Innovation Management</span>
							<span className="school">EmLyon Business School</span>
							<span>Lyon, France</span>
							<p>
								Currently pursuing a double degree in Business Mediation at
								EmLyon Business School as part of the Programme Grande École.
								This experience allows me to bridge the gap between technical
								expertise and business strategy.
							</p>
						</DatesContainer>
					</EducationDegree>
					<EducationDegree>
						<i class="fa-solid fa-graduation-cap"></i>
						<DatesContainer>
							<span className="date">Sept 2024 - Jan 2025</span>
							<span className="degree">
								Academic Exchange in Software Security
							</span>
							<span className="school">University of Twente</span>
							<span>Enschede, Netherlands</span>
							<p>
								Academic exchange focused on Software Security, gaining insight
								into European approaches to cybersecurity and secure software
								design.
							</p>
						</DatesContainer>
					</EducationDegree>
					<EducationDegree>
						<i class="fa-solid fa-graduation-cap"></i>
						<DatesContainer>
							<span className="date">2022 - 2025</span>
							<span className="degree">
								Master of Computer and Microelectronics Engineering
							</span>
							<span className="school">École des Mines Saint-Étienne</span>
							<span>Gardanne, France</span>
							<p>
								Engineering studies with a specialization in Computer Science
								and Microelectronics. I have developed strong technical skills
								in programming, project management, and cybersecurity while
								actively engaging in student associations.
							</p>
						</DatesContainer>
					</EducationDegree>
					<EducationDegree>
						<i class="fa-solid fa-graduation-cap"></i>
						<DatesContainer>
							<span className="date">2020 - 2022</span>
							<span className="degree">
								Preparatory class for engineering school (CPGE MPSI/MP)
							</span>
							<span className="school">Lycée Jean Moulin</span>
							<span>Forbach, France</span>
							<p>
								Completed a two-year intensive preparatory program in
								Mathematics and Physics (MPSI/MP), designed to prepare students
								for entrance into top engineering schools in France.
							</p>
						</DatesContainer>
					</EducationDegree>
				</DegreeContainer>
			</EducationContainer>
		</div>
	);
};

export default Education;
