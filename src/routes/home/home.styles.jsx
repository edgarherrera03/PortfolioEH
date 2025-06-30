import styled from "styled-components";
import { colorFontLightBlue } from "../../assets/_variables";

export const AnimateCircle = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	width: 120px;
	height: 120px;
	background-color: radial-gradient(circle, #34eb7d 0%, #00000000 80%);
	border-radius: 50%;
	transform: translate(-50%, -50%);
	z-index: 0;
	filter: blur(30px);
	opacity: 0.6;
`;

export const IntroContainer = styled.div`
	display: flex;
	flex-flow: column;
	width: 100%;
	height: 100vh;
	align-items: center;
	justify-content: center;
	background: linear-gradient(to bottom, #1d1d1d 0%, #1b2542 100%);
	padding: 0 20px;

	@media (max-width: 768px) {
		padding: 40px 20px;
	}

	@media (max-width: 515px) {
		padding: 40px 20px;
	}
`;

export const TitleContainer = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
	width: auto;
	height: 300px;
	margin-bottom: 2.5rem;
	font-family: "Montserrat", sans-serif;

	h1 {
		color: white;
		font-weight: 900;
		margin-bottom: 1.2rem;
		margin-top: 1.2rem;
	}

	& .ChangingTitle {
		display: inline; /* behave like text */
		color: ${colorFontLightBlue};
		font-weight: 600;
		font-size: 2.5rem;
		line-height: 1.3;

		@media (max-width: 900px) {
			font-size: 1.9rem;
		}

		@media (max-width: 685px) {
			font-size: 1.45rem;
		}

		@media (max-width: 515px) {
			font-size: 1.2rem;
		}

		.TypeWrapper {
			display: inline-block;
			white-space: pre-line; /* allows \n to create line breaks */
			max-width: 100%;
		}
	}
`;
