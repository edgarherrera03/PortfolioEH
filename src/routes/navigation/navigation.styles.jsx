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
	z-index: 1;
`;

export const PhotoContainer = styled.div`
	height: 60px;
	width: 60px;
	border-radius: 50px;
	background-size: cover;
	background-position: center;
	margin-left: 50px;
	cursor: pointer;
`;

export const NavLinks = styled.div`
	display: flex;
	width: 40%;
	height: 100%;
	justify-content: space-around;
	align-items: center;
	margin-right: 100px;
`;

export const NavLink = styled.span`
	font-family: "Inter", sans-serif;
	font-weight: bold;
	font-size: 18px;
	cursor: pointer;
	color: white;
`;
