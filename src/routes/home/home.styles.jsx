import styled from "styled-components";
import { colorFontLightBlue } from "../../assets/_variables";

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
		height: 80vh;
		padding: 40px 20px;
	}

	@media (max-width: 515px) {
		height: 70vh;
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
		color: ${colorFontLightBlue};
		justify-items: center;
		font-weight: 600;
		font-size: 2.5rem;
		@media (max-width: 900px) {
			font-size: 1.9rem;
		}

		@media (max-width: 685px) {
			font-size: 1.45rem;
		}

		@media (max-width: 515px) {
			font-size: 1rem;
		}
	}
`;
