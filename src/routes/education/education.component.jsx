import TitleSection from "../../components/title-section/title-section.component";
import TimeLine from "../../components/time-line/time-line.component";
import {
	EducationContainer,
	DegreeContainer,
	DatesContainer,
} from "./education.styles";

const Education = () => {
	return (
		<div id="education">
			<EducationContainer>
				<TitleSection>Education</TitleSection>
				<DegreeContainer>
					<DatesContainer>
						<h4>2024 - 2026</h4>
						<p>Master in Innovation Management</p>
					</DatesContainer>
					<DatesContainer>
						<h4>2022 - 2025</h4>
						<p>Master of Computer and Microelectronics Engineering</p>
					</DatesContainer>
					<DatesContainer>
						<h4>Sept 2024 - Jan 2025</h4>
						<p>Academic Exchange in Software Security</p>
					</DatesContainer>
					<DatesContainer>
						<h4>2020 - 2022</h4>
						<p>Preparatory class for engineering school (CPGE MPSI/MP)</p>
					</DatesContainer>
				</DegreeContainer>
				<TimeLine />
				<DegreeContainer>
					<DatesContainer>
						<h4>EmLyon Business School</h4>
						<span>Lyon, France</span>
						<p>
							Currently pursuing a double degree in Business Mediation at EmLyon
							Business School as part of the Programme Grande École. This
							experience allows me to bridge the gap between technical expertise
							and business strategy.
						</p>
					</DatesContainer>
					<DatesContainer>
						<h4>École des Mines Saint-Étienne</h4>
						<span>Gardanne, France</span>
						<p>
							Engineering studies with a specialization in Computer Science and
							Microelectronics. I have developed strong technical skills in
							programming, project management, and cybersecurity while actively
							engaging in student associations.
						</p>
					</DatesContainer>
					<DatesContainer>
						<h4>University of Twente</h4>
						<span>Enschede, Netherlands</span>
						<p>
							Academic exchange focused on Software Security, gaining insight
							into European approaches to cybersecurity and secure software
							design.
						</p>
					</DatesContainer>
					<DatesContainer>
						<h4>Lycée Jean Moulin</h4>
						<span>Forbach, France</span>
						<p>
							Completed a two-year intensive preparatory program in Mathematics
							and Physics (MPSI/MP), designed to prepare students for entrance
							into top engineering schools in France.
						</p>
					</DatesContainer>
				</DegreeContainer>
			</EducationContainer>
		</div>
	);
};

export default Education;
