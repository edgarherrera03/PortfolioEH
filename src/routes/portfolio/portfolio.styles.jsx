import styled from "styled-components";

export const PortfolioContainer = styled.div``;

export const ProjectsContainer = styled.div`
	width: 100%;
`;

export const ProjectContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ProjectsWrapper = styled.div`
	overflow: hidden;
	width: calc(350px * 3 + 20px * 2);

	@media (max-width: 1300px) {
		width: calc(300px * 2 + 20px * 1);
	}

	@media (max-width: 768px) {
		width: 350px;
	}

	@media (max-width: 500px) {
		width: 225px;
	}
`;

export const SlidingProjects = styled.div`
	display: flex;
	gap: 20px;
	transform: ${({ $startindex, $cardwidth }) =>
		`translateX(calc(-${$startindex} * (${$cardwidth}px + 20px)))`};
	transition: transform 0.5s ease-in-out;

	& > * {
		flex: 0 0 ${({ $cardwidth }) => `${$cardwidth}px`};
	}
`;
