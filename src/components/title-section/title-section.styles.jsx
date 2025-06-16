import styled from "styled-components";
import { buttonBackground, colorBorderLight } from "../../assets/_variables";
export const TitleSectionContainer = styled.div`
	display: flex;
	height: 150px;
	width: 100%;
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
		@media (max-width: 900px) {
			font-size: 35px;
		}

		@media (max-width: 685px) {
			font-size: 30px;
		}

		@media (max-width: 515px) {
			font-size: 25px;
		}
	}
	@media (max-width: 900px) {
		height: 130px;
		padding: 0px 90px;
	}

	@media (max-width: 685px) {
		height: 110px;
		padding: 0px 85px;
	}

	@media (max-width: 515px) {
		padding: 0px 80px;
		height: 100px;
	}
`;
