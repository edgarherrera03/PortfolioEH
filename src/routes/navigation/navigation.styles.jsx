import styled from "styled-components";
import { backgroundDarkBlue } from "../../assets/_variables";

export const NavigationContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: ${({ menuHeight }) => `${menuHeight}px`};
	width: 100%;
	background-color: ${backgroundDarkBlue};
	z-index: 999;
	padding: 0 20px;
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

	@media (max-width: 1150px) {
		width: 70%;
	}
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
	@media (max-width: 1000px) {
		font-size: 1.4rem;
	}
	@media (max-width: 515px) {
		font-size: 1.2rem;
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
