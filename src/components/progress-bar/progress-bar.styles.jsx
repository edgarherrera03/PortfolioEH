import styled, { keyframes } from "styled-components";
import {
	backgroundDarkBlack,
	backgroundDarkBlue,
	colorBorderLight,
	colorProgressSkillBar,
	colorProgressSkillBarClear,
} from "../../assets/_variables";

export const ProgressContainer = styled.div`
	display: flex;
	align-items: center;
	span {
		color: ${backgroundDarkBlue};
		margin-left: 15px;
		font-weight: 500;
		font-size: 1.2rem;
		@media (max-width: 900px) {
			font-size: 1.1rem;
		}

		@media (max-width: 685px) {
			font-size: 1rem;
		}

		@media (max-width: 515px) {
			font-size: 0.9rem;
		}
	}
`;

export const ProgressBarContainer = styled.div`
	position: relative;
	width: 100%;
	height: 10px;
	border-radius: 5px;
	background-color: ${colorBorderLight};

	@media (max-width: 900px) {
		height: 9px;
	}

	@media (max-width: 685px) {
		height: 8.5px;
	}

	@media (max-width: 515px) {
		height: 8px;
	}
`;

const growBar = (width) => keyframes`
  from { width: 0%; }
  to { width: ${width}%; }
`;

export const ProgressBarFilled = styled.div`
	position: relative;
	height: 10px;
	border-radius: 5px;
	background-color: ${colorProgressSkillBar};
	animation: ${({ animateWidth, width }) =>
			animateWidth ? growBar(width) : "none"}
		1.8s ease-out forwards;
	&:hover {
		transform: scale(1.01);
		background-color: ${colorProgressSkillBarClear};
	}
`;

export const ProgressBarFilledLanguage = styled.div`
	position: relative;
	height: 10px;
	border-radius: 5px;
	background-color: ${backgroundDarkBlack};
	animation: ${({ animateWidth, width }) =>
			animateWidth ? growBar(width) : "none"}
		1.8s ease-out forwards;
	&:hover {
		transform: scale(1.01);
		background-color: ${backgroundDarkBlue};
	}

	@media (max-width: 900px) {
		height: 9px;
	}

	@media (max-width: 685px) {
		height: 8px;
	}

	@media (max-width: 515px) {
		height: 7px;
	}
`;
