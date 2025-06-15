import styled from "styled-components";
import { buttonBackground, colorBorderLight } from "../../assets/_variables";
export const TitleSectionContainer = styled.div`
	display: flex;
	height: 150px;
	justify-content: center;
	align-items: center;
	padding: 0px 100px 0 100px;
	margin-bottom: 50px;
	border-top: 1px solid ${colorBorderLight};
	border-bottom: 1px solid ${colorBorderLight};
	h2 {
		color: ${buttonBackground};
		font-family: "Montserrat", sans-serif;
		font-weight: bold;
	}
`;
