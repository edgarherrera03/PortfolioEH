import { RightButton, LeftButton } from "./project-button.styles";
export const BUTTON_DIRECTION = {
	right: "right",
	left: "left",
};

const getButton = (buttonType = BUTTON_DIRECTION.base) =>
	({
		[BUTTON_DIRECTION.right]: RightButton,
		[BUTTON_DIRECTION.left]: LeftButton,
	}[buttonType]);

const ProjectButton = ({ buttonType, onClick, disabled }) => {
	const CustomButton = getButton(buttonType);
	const isRight = buttonType === BUTTON_DIRECTION.right;
	return (
		<CustomButton onClick={onClick} disabled={disabled}>
			<i
				className={`fa-solid ${
					isRight ? "fa-arrow-right" : "fa-arrow-left"
				} `}></i>
		</CustomButton>
	);
};

export default ProjectButton;
