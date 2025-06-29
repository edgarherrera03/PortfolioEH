import { BurgerMenuContainer } from "./burger-menu.styles";
import { useMenu } from "../../context/mobile/menu.context";

const BurgerMenu = () => {
	const { isMenuOpen, toggleMenu } = useMenu();
	const openHandler = () => toggleMenu();

	return (
		<BurgerMenuContainer open={isMenuOpen} onClick={openHandler}>
			<div />
			<div />
			<div />
		</BurgerMenuContainer>
	);
};

export default BurgerMenu;
