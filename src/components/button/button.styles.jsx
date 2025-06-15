import styled from "styled-components";
import {
	backgroundDarkBlue,
	BackgroundLight,
	buttonBackground,
	colorProgressSkillBar,
	colorProgressSkillBarClear,
} from "../../assets/_variables";

export const BaseButton = styled.button`
	width: 230px;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 20px 0 20px;
	font-size: 15px;
	background-color: ${buttonBackground};
	color: white;
	text-transform: uppercase;
	font-family: "Montserrat", sans-serif;
	font-weight: 700;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	border-radius: 5px;
`;

export const ContactButton = styled(BaseButton)`
	font-size: 18px;
	width: auto;
	padding: 0 15px 0 0;
	background-color: transparent;
	color: ${colorProgressSkillBarClear};
	&:hover {
		color: ${colorProgressSkillBar};
	}
`;

export const WorksButton = styled(BaseButton)`
	position: relative;
	overflow: hidden;
	background-color: ${buttonBackground};
	color: ${BackgroundLight};
	border-radius: 5px;
	width: 170px;
	padding: 0 5px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 0;

	&::before {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 0%;
		background-color: ${backgroundDarkBlue};
		z-index: -1;
		transition: width 0.5s ease-in-out;
	}

	&:hover::before {
		width: 100%;
	}
`;
