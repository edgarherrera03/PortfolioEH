import { useEffect, useRef, useState } from "react";
import {
	BaseExperience,
	CardWrapper,
	CardInner,
	CardFront,
	CardBack,
} from "./experience-card.styles";

import Button from "../button/button.component";
import { useLanguage } from "../../context/language/language.context";

const ExperienceCard = ({ experienceCard, title, description, imgURL }) => {
	const [flipped, setFlipped] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const { language } = useLanguage();

	const ref = useRef(null); // for IntersectionObserver
	const cardRef = useRef(null); // for outside click detection

	// Detect visibility
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

	// Flip back when clicking outside the card
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (cardRef.current && !cardRef.current.contains(event.target)) {
				setFlipped(false);
			}
		};

		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	const flipHandler = () => setFlipped((prev) => !prev);

	return (
		<BaseExperience ref={ref} className={isVisible ? "visible" : ""}>
			<CardWrapper ref={cardRef} className={isVisible ? "slide-up" : ""}>
				<CardInner $flipped={flipped}>
					<CardFront>
						<div>
							<img src={imgURL} alt="logo" />
						</div>
						<h3>{experienceCard}</h3>
						<span>{title}</span>
						<Button buttonType="work" onClick={flipHandler}>
							{language === "en" ? "View details" : "Voir les détails"}
						</Button>
					</CardFront>
					<CardBack onClick={flipHandler}>
						<div className="description-box">
							<p>{description}</p>
						</div>
					</CardBack>
				</CardInner>
			</CardWrapper>
		</BaseExperience>
	);
};

export default ExperienceCard;
