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
`;

export const TitleContainer = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
	width: auto;
	height: 300px;
	margin-bottom: 40px;
	font-family: "Montserrat", sans-serif;

	h1 {
		color: white;
		font-weight: 900;
		font-size: 70px;
		&:nth-child(2) {
			margin-bottom: 20px;
		}
	}
	h2 {
		color: ${colorFontLightBlue};
		justify-items: center;
	}
`;
