import ProjectLink from "../../components/project_link/project_link.component";
import TitleSection from "../../components/title-section/title-section.component";
import { useState } from "react";
import {
	PortfolioContainer,
	ProjectsContainer,
	ProjectContainer,
	ProjectsWrapper,
	SlidingProjects,
} from "./portfolio.styles";
import ProjectButton from "../../components/switch-project-button/project-button.component";

const projects = [
	{
		id: 1,
		languageType: "python",
		title: "Hospital Managament Data Encryption",
		link: "https://github.com/edgarherrera03/Hospital-Management-System",
	},
	{
		id: 2,
		languageType: "react",
		title: "QGIS automation",
		link: "https://github.com/edgarherrera03/OutilsExtractions",
	},
	{
		id: 3,
		languageType: "html",
		title: "Cryptography - Encryption algorithm",
		link: "https://github.com/edgarherrera03/ASCON128",
	},
	{
		id: 4,
		languageType: "c",
		title: "Web Development - Portfolio",
		link: "https://github.com/edgarherrera03/portfolio",
	},
	{ id: 5, languageType: "cpp", title: "VBA Development" },
];

const Portfolio = () => {
	const [startIndex, setStartIndex] = useState(0);

	const handleScroll = (direction) => {
		setStartIndex((prev) => {
			const max = projects.length - 3;
			if (direction === "right") return Math.min(prev + 1, max);
			if (direction === "left") return Math.max(prev - 1, 0);
			return prev;
		});
	};

	return (
		<div id="portfolio">
			<PortfolioContainer>
				<TitleSection>Portfolio</TitleSection>
				<ProjectsContainer>
					<ProjectContainer>
						<ProjectButton
							buttonType="left"
							onClick={() => handleScroll("left")}
							disabled={startIndex === 0}
						/>
						<ProjectsWrapper>
							<SlidingProjects $startindex={startIndex}>
								{projects.map((project) => (
									<ProjectLink
										key={project.id}
										languageType={project.languageType}
										title={project.title}
										onClick={() => window.open(project.link)}
									/>
								))}
							</SlidingProjects>
						</ProjectsWrapper>
						<ProjectButton
							buttonType="right"
							onClick={() => handleScroll("right")}
							disabled={startIndex === projects.length - 3}
						/>
					</ProjectContainer>
				</ProjectsContainer>
			</PortfolioContainer>
		</div>
	);
};

export default Portfolio;
