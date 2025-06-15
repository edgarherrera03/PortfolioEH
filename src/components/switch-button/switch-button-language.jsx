// import { useState } from "react";
import {
	SwitchButtonContainer,
	StyledSwitchButton,
	LanguageSelector,
	Label,
} from "./switch-button-language.styles";
import { useLanguage } from "../../context/language/language.context";

const SwitchButton = () => {
	const { language, toggleLanguage } = useLanguage();
	const toggled = language === "en";

	return (
		<SwitchButtonContainer>
			<StyledSwitchButton onClick={toggleLanguage}>
				{!toggled && <Label position="right">FR</Label>}
				{toggled && <Label position="left">EN</Label>}
				<LanguageSelector toggled={toggled} />
			</StyledSwitchButton>
		</SwitchButtonContainer>
	);
};

export default SwitchButton;
