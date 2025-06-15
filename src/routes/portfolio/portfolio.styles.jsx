import styled from "styled-components";

export const PortfolioContainer = styled.div``;

export const ProjectsContainer = styled.div``;

export const ProjectContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50vh;
`;

export const ProjectsWrapper = styled.div`
	overflow: hidden;
	width: calc(350px * 3 + 20px * 2); /* or 100% if it's responsive */
`;

export const SlidingProjects = styled.div`
	display: flex;
	gap: 20px;
	transform: ${({ $startindex }) =>
		`translateX(calc(-${$startindex} * (350px + 20px)))`};
	transition: transform 0.5s ease-in-out;

	& > * {
		flex: 0 0 350px;
	}
`;
