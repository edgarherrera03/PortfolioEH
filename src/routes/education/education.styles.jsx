import styled from "styled-components";
import { backgroundDarkBlue } from "../../assets/_variables";

export const EducationContainer = styled.div`
	display: flex;
	flex-flow: column;
	height: 70vh;
	justify-content: center;
	color: ${backgroundDarkBlue};
`;

export const DegreeContainer = styled.div`
	display: flex;
	height: auto;
	justify-content: center;
	align-items: center;
	margin: 15px 0 20px 0;
`;
export const DatesContainer = styled.div`
	display: flex;
	flex-flow: column;
	align-items: start;
	width: 360px;
	height: auto;
	padding: 0 30px 0 0;
	p {
		height: 40px;
		font-weight: 500;
	}
	span {
		margin: 7px 0 7px 0;
		font-family: "Montserrat", sans-serif;
		font-size: 14px;
		font-weight: 500;
	}
`;
