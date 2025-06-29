import {
	NavigationContainer,
	PhotoContainer,
	NavLinks,
	NavLink,
	MobileMenu,
} from "./navigation.styles";

import { navigationMenuList } from "../../assets/objects-list";
import BurgerMenu from "../../components/burger-menu/burger-menu.component";
import { useMenu } from "../../context/mobile/menu.context";
import { useEffect } from "react";

const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};

const Navigation = () => {
	const { isMenuOpen, setIsMenuOpen, menuHeight, setMenuHeight } = useMenu();

	const handleNavClick = (id) => {
		scrollToSection(id);
		setIsMenuOpen(false);
	};

	useEffect(() => {
		const updateMenuHeight = () => {
			const isMobile = window.innerWidth <= 515;
			setMenuHeight(isMobile ? 60 : 80);
		};

		updateMenuHeight();
		window.addEventListener("resize", updateMenuHeight);
		return () => window.removeEventListener("resize", updateMenuHeight);
	}, [setMenuHeight]);

	const scrollToSection = (id) => {
		const section = document.getElementById(id);
		if (section) {
			const sectionTop = section.getBoundingClientRect().top + window.scrollY;
			const offsetTop = sectionTop - menuHeight;

			window.scrollTo({
				top: offsetTop,
				behavior: "smooth",
			});
		}
	};
	return (
		<div id="navigation">
			<NavigationContainer menuHeight={menuHeight}>
				<PhotoContainer
					style={{
						backgroundImage: `url(https://i.ibb.co/Rpb3r3RC/logo-ehs.png)`,
					}}
					onClick={scrollToTop}
				/>
				<BurgerMenu />
				<NavLinks>
					{navigationMenuList.map((menuOption) => (
						<NavLink onClick={() => handleNavClick(menuOption.id)}>
							{menuOption.title}
						</NavLink>
					))}
				</NavLinks>
				<MobileMenu $open={isMenuOpen}>
					{navigationMenuList.map((menuOption) => (
						<NavLink onClick={() => handleNavClick(menuOption.id)}>
							{menuOption.title}
						</NavLink>
					))}
				</MobileMenu>
			</NavigationContainer>
		</div>
	);
};

export default Navigation;
