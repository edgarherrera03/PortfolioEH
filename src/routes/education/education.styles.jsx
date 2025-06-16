import styled from "styled-components";
import {
	backgroundDarkBlue,
	colorProgressSkillBarClear,
} from "../../assets/_variables";

export const EducationContainer = styled.div`
	display: flex;
	flex-flow: column;
	height: auto;
	justify-content: center;
	color: ${backgroundDarkBlue};
	margin-top: 100px;
	margin-bottom: 3rem;
`;

export const DegreeContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	height: auto;
	padding: 2rem 5rem;

	@media (max-width: 1000px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr;
	}

	@media (max-width: 600px) {
		padding: 1.5rem 3rem;
	}
`;

export const DatesContainer = styled.div`
	display: flex;
	flex-flow: column;
	padding: 0 3rem 2rem 3rem;
	margin-left: 2rem;
	border-left: 1px solid black;
	font-family: "Montserrat", sans-serif;
	& .date {
		border-radius: 50rem;
		background-color: #d5d4d4;
		padding: 0.4rem 1.2rem;
		font-size: 1rem;
		color: ${backgroundDarkBlue};
		display: inline-block;
		width: fit-content;
		font-weight: 700;
	}
	& .degree {
		font-size: 1.2rem;
		font-weight: 700;
		margin: 0.6rem 0;
		height: auto;
	}

	& .school {
		margin: 0.5rem 0;
		font-size: 1rem;
		font-weight: 400;
	}
	p {
		font-weight: 500;
		line-height: 1.4rem;
	}

	@media (max-width: 600px) {
		padding: 0 2rem 1rem 2rem;
	}
`;

export const EducationDegree = styled.div`
	display: flex;
	justify-content: center;
	position: relative;

	& i {
		position: absolute;
		height: 3.5rem;
		width: 3.5rem;
		border-radius: 50%;
		line-height: 3.5rem;
		text-align: center;
		font-size: 1.5rem;
		font-weight: 900;
		left: 0.25rem;
		color: ${backgroundDarkBlue};
		background-color: ${colorProgressSkillBarClear};
		top: 0;
	}

	@media (max-width: 1000px) {
		&:nth-child(1) {
			order: 1;
		}
		&:nth-child(2) {
			order: 3;
		}
		&:nth-child(3) {
			order: 2;
		}
		&:nth-child(4) {
			order: 4;
		}
	}

	@media (max-width: 600px) {
		& i {
			height: 3.3rem;
			width: 3.3rem;
			line-height: 3.3rem;
			font-size: 1.3rem;
		}
	}
`;
