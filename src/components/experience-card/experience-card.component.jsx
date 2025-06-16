import { useEffect, useRef, useState } from "react";
import {
	BaseExperience,
	CardWrapper,
	CardInner,
	CardFront,
	CardBack,
} from "./experience-card.styles";

import Button from "../button/button.component";

const ExperienceCard = ({ experienceCard, title, description, imgURL }) => {
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
		<BaseExperience ref={ref} className={isVisible ? "visible" : ""}>
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
		</BaseExperience>
	);
};

export default ExperienceCard;
