import { useEffect, useRef, useState } from "react";
import {
	LollierExperience,
	PatheExperience,
	BdeExperience,
	CardWrapper,
	CardInner,
	CardFront,
	CardBack,
} from "./experience-card.styles";

import Button from "../button/button.component";

export const EXPERIENCES_CARD = {
	lollier: "Lollier Ingénierie",
	pathe: "Pathé Cinéma",
	bde: "BDE EMSE CGCP",
};

const getExperience = (experienceCard) =>
	({
		[EXPERIENCES_CARD.lollier]: LollierExperience,
		[EXPERIENCES_CARD.pathe]: PatheExperience,
		[EXPERIENCES_CARD.bde]: BdeExperience,
	}[experienceCard]);

const ExperienceCard = ({ experienceCard, title, description, imgURL }) => {
	const CustomExperience = getExperience(experienceCard);
	const [flipped, setFlipped] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const currentRef = ref.current;

		const observer = new IntersectionObserver(
			([entry]) => setIsVisible(entry.isIntersecting),
			{ threshold: 0.2 }
		);

		if (currentRef) observer.observe(currentRef);

		return () => {
			if (currentRef) observer.unobserve(currentRef);
		};
	}, []);

	return (
		<CustomExperience ref={ref} className={isVisible ? "visible" : ""}>
			<CardWrapper className={isVisible ? "slide-up" : ""}>
				<CardInner $flipped={flipped}>
					<CardFront>
						<div>
							<img src={imgURL} alt="logo" />
						</div>
						<h3>{experienceCard}</h3>
						<span>{title}</span>
						<Button
							buttonType="work"
							onClick={() => setFlipped((prev) => !prev)}>
							View details
						</Button>
					</CardFront>
					<CardBack onClick={() => setFlipped((prev) => !prev)}>
						<div className="description-box">
							<p>{description}</p>
						</div>
					</CardBack>
				</CardInner>
			</CardWrapper>
		</CustomExperience>
	);
};

export default ExperienceCard;
