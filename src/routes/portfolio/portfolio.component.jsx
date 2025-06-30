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
import { projectsListEn, projectsListFr } from "../../assets/objects-list";
import { useLanguage } from "../../context/language/language.context";

const Portfolio = () => {
	const [startIndex, setStartIndex] = useState(0);
	const [cardsPerPage, setCardsPerPage] = useState(3);
	const [cardWidth, setCardWidth] = useState(350);
	const { language } = useLanguage();

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
			const max = projectsListEn.length - cardsPerPage;
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
								{language === "en"
									? projectsListEn.map((project) => (
											<ProjectLink
												key={project.id}
												languageType={project.languageType}
												title={project.title}
												onClick={() =>
													project.link && window.open(project.link)
												}
											/>
									  ))
									: projectsListFr.map((project) => (
											<ProjectLink
												key={project.id}
												languageType={project.languageType}
												title={project.title}
												onClick={() =>
													project.link && window.open(project.link)
												}
											/>
									  ))}
							</SlidingProjects>
						</ProjectsWrapper>
						<ProjectButton
							buttonType="right"
							onClick={() => handleScroll("right")}
							disabled={startIndex >= projectsListEn.length - cardsPerPage}
						/>
					</ProjectContainer>
				</ProjectsContainer>
			</PortfolioContainer>
		</div>
	);
};

export default Portfolio;
