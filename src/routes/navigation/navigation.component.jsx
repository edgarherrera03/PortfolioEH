import { useState } from "react";
import {
	NavigationContainer,
	PhotoContainer,
	NavLinks,
	NavLink,
	BurgerMenu,
	MobileMenu,
} from "./navigation.styles";

export const scrollToSection = (id) => {
	const section = document.getElementById(id);
	section.scrollIntoView({ behavior: "smooth" });
};

const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};

const Navigation = () => {
	const [open, setOpen] = useState(false);

	const handleNavClick = (id) => {
		scrollToSection(id);
		setOpen(false); // Close mobile menu
	};

	return (
		<div id="navigation">
			<NavigationContainer>
				<PhotoContainer
					style={{
						backgroundImage: `url(https://i.ibb.co/Rpb3r3RC/logo-ehs.png)`,
					}}
					onClick={scrollToTop}
				/>
				<BurgerMenu open={open} onClick={() => setOpen(!open)}>
					<div />
					<div />
					<div />
				</BurgerMenu>
				<NavLinks>
					<NavLink onClick={() => handleNavClick("about")}>About me</NavLink>
					<NavLink onClick={() => handleNavClick("education")}>
						Education
					</NavLink>
					<NavLink onClick={() => handleNavClick("experiences")}>
						Experiences
					</NavLink>
					<NavLink onClick={() => handleNavClick("skills")}>Skills</NavLink>
					<NavLink onClick={() => handleNavClick("portfolio")}>
						Portfolio
					</NavLink>
					<NavLink onClick={() => handleNavClick("contact")}>Contact</NavLink>
				</NavLinks>
				<MobileMenu $open={open}>
					<NavLink onClick={() => handleNavClick("about")}>About me</NavLink>
					<NavLink onClick={() => handleNavClick("education")}>
						Education
					</NavLink>
					<NavLink onClick={() => handleNavClick("experiences")}>
						Experiences
					</NavLink>
					<NavLink onClick={() => handleNavClick("skills")}>Skills</NavLink>
					<NavLink onClick={() => handleNavClick("portfolio")}>
						Portfolio
					</NavLink>
					<NavLink onClick={() => handleNavClick("contact")}>Contact</NavLink>
				</MobileMenu>
			</NavigationContainer>
		</div>
	);
};

export default Navigation;
