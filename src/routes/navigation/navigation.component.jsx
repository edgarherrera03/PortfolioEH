import {
	NavigationContainer,
	PhotoContainer,
	NavLinks,
	NavLink,
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
	return (
		<div id="navigation">
			<NavigationContainer>
				<PhotoContainer
					style={{
						backgroundImage: `url(https://i.ibb.co/Rpb3r3RC/logo-ehs.png)`,
					}}
					onClick={scrollToTop}
				/>
				<NavLinks>
					<NavLink onClick={() => scrollToSection("about")}>About me</NavLink>
					<NavLink onClick={() => scrollToSection("education")}>
						Education
					</NavLink>
					<NavLink onClick={() => scrollToSection("experiences")}>
						Experiences
					</NavLink>
					<NavLink onClick={() => scrollToSection("skills")}>Skills</NavLink>
					<NavLink onClick={() => scrollToSection("portfolio")}>
						Portfolio
					</NavLink>
					<NavLink onClick={() => scrollToSection("contact")}>Contact</NavLink>
				</NavLinks>
			</NavigationContainer>
		</div>
	);
};

export default Navigation;
