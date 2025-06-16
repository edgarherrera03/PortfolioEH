import ProjectLink from "../../components/project_link/project_link.component";
import TitleSection from "../../components/title-section/title-section.component";
import { useEffect, useState } from "react";
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
		languageType: "hospital",
		title: "Hospital Managament Data Encryption",
		link: "https://github.com/edgarherrera03/Hospital-Management-System",
	},
	{
		id: 2,
		languageType: "automation",
		title: "QGIS automation",
		link: "https://github.com/edgarherrera03/OutilsExtractions",
	},
	{
		id: 3,
		languageType: "crypto",
		title: "Cryptography - Encryption algorithm",
		link: "https://github.com/edgarherrera03/ASCON128",
	},
	{
		id: 4,
		languageType: "portfolio",
		title: "Web Development - Portfolio",
		link: "https://github.com/edgarherrera03/PortfolioEH",
	},
	{ id: 5, languageType: "vba", title: "VBA Development" },
];

const Portfolio = () => {
	const [startIndex, setStartIndex] = useState(0);
	const [cardsPerPage, setCardsPerPage] = useState(3);
	const [cardWidth, setCardWidth] = useState(350);

	useEffect(() => {
		const updateLayout = () => {
			const width = window.innerWidth;

			if (width <= 500) {
				setCardsPerPage(1);
				setCardWidth(225);
			} else if (width <= 768) {
				setCardsPerPage(1);
				setCardWidth(350);
			} else if (width <= 1300) {
				setCardsPerPage(2);
				setCardWidth(300);
			} else {
				setCardsPerPage(3);
				setCardWidth(350);
			}
		};

		updateLayout();
		window.addEventListener("resize", updateLayout);
		return () => window.removeEventListener("resize", updateLayout);
	}, []);

	const handleScroll = (direction) => {
		setStartIndex((prev) => {
			const max = projects.length - cardsPerPage;
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
							<SlidingProjects $startindex={startIndex} $cardwidth={cardWidth}>
								{projects.map((project) => (
									<ProjectLink
										key={project.id}
										languageType={project.languageType}
										title={project.title}
										onClick={() => project.link && window.open(project.link)}
									/>
								))}
							</SlidingProjects>
						</ProjectsWrapper>
						<ProjectButton
							buttonType="right"
							onClick={() => handleScroll("right")}
							disabled={startIndex >= projects.length - cardsPerPage}
						/>
					</ProjectContainer>
				</ProjectsContainer>
			</PortfolioContainer>
		</div>
	);
};

export default Portfolio;
