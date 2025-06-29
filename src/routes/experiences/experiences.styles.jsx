import styled from "styled-components";

export const ExperiencesContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	margin-bottom: 3rem;
`;

export const ScrollButtons = styled.div`
	display: flex;
	gap: 1rem;

	@media (min-width: 1000px) {
		display: none;
	}
`;

export const ScrollWrapper = styled.div`
	width: 100%;
	overflow: hidden;
	height: 37rem;

	@media (max-width: 1000px) {
		width: 22rem;
		height: 35rem;
		border-radius: 5px;
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	}

	@media (max-width: 515px) {
		width: 18rem;
		height: 31rem;
		border-radius: 5px;
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	}
`;

export const Experience = styled.div`
	display: flex;
	justify-content: center;
	gap: 3rem;

	transform: ${({ startindex, cardwidth }) =>
		`translateX(calc(-${startindex} * (${cardwidth}rem + 3rem)))`};
	transition: transform 0.5s ease-in-out;

	@media (max-width: 1000px) {
		justify-content: flex-start;
	}
`;
