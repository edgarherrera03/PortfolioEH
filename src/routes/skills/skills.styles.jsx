import styled from "styled-components";
import { backgroundDarkBlue } from "../../assets/_variables";

export const SkillsContainer = styled.div`
	display: flex;
	flex-flow: column;
	min-height: 70vh;
	justify-content: center;
	color: ${backgroundDarkBlue};
`;

export const SkillsLevelContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	margin: 20px 250px;
`;

export const Skill = styled.div`
	margin: 15px 20px;
	h4 {
		margin-bottom: 15px;
	}
`;
