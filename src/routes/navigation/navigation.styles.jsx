import styled from "styled-components";
import { backgroundDarkBlue } from "../../assets/_variables";

export const NavigationContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	width: 100%;
	background-color: ${backgroundDarkBlue};
	z-index: 999;
	padding: 0 20px;

	@media (max-width: 515px) {
		height: 60px;
	}
`;

export const PhotoContainer = styled.div`
	height: 58px;
	width: 58px;
	border-radius: 50px;
	background-size: cover;
	background-position: center;
	cursor: pointer;
	@media (max-width: 768px) {
		height: 55px;
		width: 55px;
	}

	@media (max-width: 515px) {
		height: 45px;
		width: 45px;
	}
`;

export const NavLinks = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 60%;

	@media (max-width: 1000px) {
		display: none;
	}
`;

export const NavLink = styled.span`
	font-family: "Inter", sans-serif;
	font-weight: bold;
	font-size: 18px;
	cursor: pointer;
	color: white;
	margin: 10px 0;
`;

export const BurgerMenu = styled.div`
	display: none;
	flex-direction: column;
	cursor: pointer;
	gap: 5px;
	width: 25px;
	height: 20px;
	justify-content: center;

	div {
		width: 25px;
		height: 3px;
		background: white;
		border-radius: 5px;
		transition: all 0.3s ease;
		transform-origin: center;
	}

	@media (max-width: 1000px) {
		display: flex;
	}

	/* Animate the lines to form a cross when open */
	div:nth-child(1) {
		width: ${({ open }) =>
			open ? `${Math.sqrt(25 * 25 + 13 * 13)}px` : `25px`};
		transform: ${({ open }) =>
			open ? "rotate(45deg) translate(5px, 5px)" : "rotate(0)"};
	}

	div:nth-child(2) {
		opacity: ${({ open }) => (open ? 0 : 1)};
		transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
	}

	div:nth-child(3) {
		width: ${({ open }) =>
			open ? `${Math.sqrt(25 * 25 + 13 * 13)}px` : `25px`};

		transform: ${({ open }) =>
			open ? "rotate(-45deg) translate(5px, -5px)" : "rotate(0)"};
	}
`;

export const MobileMenu = styled.div`
	position: absolute;
	top: 80px;
	right: 0;
	width: 100%;
	background-color: ${backgroundDarkBlue};
	display: ${({ $open }) => ($open ? "flex" : "none")};
	flex-direction: column;
	align-items: center;
	padding: 10px 0;

	@media (min-width: 1001px) {
		display: none;
	}

	@media (max-width: 515px) {
		top: 60px;
	}
`;
