import styled from "styled-components";

export const BurgerMenuContainer = styled.div`
	display: none;
	flex-flow: column nowrap;
	cursor: pointer;
	width: 2rem;
	height: 2rem;
	justify-content: space-around;

	div {
		width: 2rem;
		height: 0.25rem;
		background: white;
		border-radius: 10px;
		transition: all 0.3s linear;
		transform-origin: 1px;
	}

	@media (max-width: 1000px) {
		display: flex;
	}

	/* Animate the lines to form a cross when open */
	div:nth-child(1) {
		transform: ${({ open }) => (open ? "rotate(45deg) " : "rotate(0)")};
	}

	div:nth-child(2) {
		opacity: ${({ open }) => (open ? 0 : 1)};
		transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
	}

	div:nth-child(3) {
		transform: ${({ open }) => (open ? "rotate(-45deg) " : "rotate(0)")};
	}
`;
