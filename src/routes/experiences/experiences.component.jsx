import ExperienceCard from "../../components/experience-card/experience-card.component";
import TitleSection from "../../components/title-section/title-section.component";
import {
	ExperiencesContainer,
	Experience,
	ScrollWrapper,
	ScrollButtons,
} from "./experiences.styles";
import ProjectButton from "../../components/switch-project-button/project-button.component";
import { useRef, useState, useEffect } from "react";
import {
	experiencesListEn,
	experiencesListFr,
} from "../../assets/objects-list";
import { useLanguage } from "../../context/language/language.context";

const Experiences = () => {
	const [startIndex, setStartIndex] = useState(0);
	const [cardsPerPage] = useState(1);
	const [cardWidth, setCardWidth] = useState(22); // in rem
	const { language } = useLanguage();
	const scrollRef = useRef();

	const handleScroll = (direction) => {
		setStartIndex((prev) => {
			const max = experiencesListEn.length - cardsPerPage;
			if (direction === "right") return Math.min(prev + 1, max);
			if (direction === "left") return Math.max(prev - 1, 0);
			return prev;
		});
	};

	useEffect(() => {
		const updateLayout = () => {
			const width = window.innerWidth;

			if (width <= 515) {
				setCardWidth(18);
			} else if (width <= 1000) {
				setCardWidth(22);
			}
		};

		updateLayout();
		window.addEventListener("resize", updateLayout);
		return () => window.removeEventListener("resize", updateLayout);
	}, []);

	return (
		<div id="experiences">
			<ExperiencesContainer>
				<TitleSection>
					{language === "en" ? "Experiences" : "Expériences"}
				</TitleSection>

				<ScrollWrapper>
					<Experience
						ref={scrollRef}
						startindex={startIndex}
						cardwidth={cardWidth}>
						{language === "en"
							? experiencesListEn.map((experience) => (
									<ExperienceCard
										key={experience.company}
										experienceCard={experience.company}
										title={experience.title}
										description={experience.description}
										imgURL={experience.imgURL}
										startIndex={startIndex}
										cardWidth={cardWidth}
									/>
							  ))
							: experiencesListFr.map((experience) => (
									<ExperienceCard
										key={experience.company}
										experienceCard={experience.company}
										title={experience.title}
										description={experience.description}
										imgURL={experience.imgURL}
										startIndex={startIndex}
										cardWidth={cardWidth}
									/>
							  ))}
					</Experience>
				</ScrollWrapper>

				<ScrollButtons>
					<ProjectButton
						buttonType="left"
						onClick={() => handleScroll("left")}
						disabled={startIndex === 0}
					/>
					<ProjectButton
						buttonType="right"
						onClick={() => handleScroll("right")}
						disabled={startIndex >= experiencesListEn.length - cardsPerPage}
					/>
				</ScrollButtons>
			</ExperiencesContainer>
		</div>
	);
};

export default Experiences;
