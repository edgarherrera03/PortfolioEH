import {
	ProgressBarContainer,
	ProgressBarFilled,
	ProgressContainer,
	ProgressBarFilledLanguage,
} from "./progress-bar.styles";

import { useInView } from "react-intersection-observer";

const SKILL_CLASSES = {
	skill: "skill",
	language: "language",
};
const getSkill = (skillType) => {
	const components = {
		[SKILL_CLASSES.skill]: ProgressBarFilled,
		[SKILL_CLASSES.language]: ProgressBarFilledLanguage,
	};

	return components[skillType] || null;
};

const ProgressBar = ({ skillType, percentage, delay }) => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.3,
	});

	const CustomSkill = getSkill(skillType);

	return (
		<ProgressContainer ref={ref}>
			<ProgressBarContainer>
				<CustomSkill
					skillType={skillType}
					width={percentage}
					animateWidth={inView}
				/>
			</ProgressBarContainer>
			<span>{percentage}%</span>
		</ProgressContainer>
	);
};

export default ProgressBar;
