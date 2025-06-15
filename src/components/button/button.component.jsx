import { BaseButton, ContactButton, WorksButton } from "./button.styles";
export const BUTTON_TYPE_CLASSES = {
	base: "base",
	contact: "contact",
	work: "work",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
	({
		[BUTTON_TYPE_CLASSES.base]: BaseButton,
		[BUTTON_TYPE_CLASSES.contact]: ContactButton,
		[BUTTON_TYPE_CLASSES.work]: WorksButton,
	}[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
	const CustomButton = getButton(buttonType);
	return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
