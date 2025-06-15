import styled, { keyframes } from "styled-components";
import { backgroundDarkBlue } from "../../assets/_variables";

// This remains as your base container
export const BaseExperience = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: ${backgroundDarkBlue};
	perspective: 1000px;
`;

export const LollierExperience = styled(BaseExperience)``;
export const PatheExperience = styled(BaseExperience)``;
export const BdeExperience = styled(BaseExperience)``;

const slideUp = keyframes`
	from {
		transform: translateY(100px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
`;

export const CardWrapper = styled.div`
	width: 350px;
	height: 550px;
	cursor: pointer;
	opacity: 0;
	transform: translateY(100px);
	transition: transform 0.8s ease, opacity 0.8s ease;

	&.slide-up {
		animation: ${slideUp} 0.8s ease forwards;
	}
`;

export const CardInner = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	transition: transform 0.8s;
	transform-style: preserve-3d;
	transform: ${({ $flipped }) =>
		$flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const cardFaceStyles = `
	position: absolute;
	width: 100%;
	height: 100%;
	backface-visibility: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	background-color: white;
	border-radius: 5px;
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	padding: 20px;
`;

export const CardFront = styled.div`
	${cardFaceStyles}

	& div {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 350px;
		height: 350px;
		background-color: white;
	}

	& img {
		max-width: 100%;
		max-height: 100%;
	}

	& h3 {
		margin: 15px 0 10px 0;
		font-size: 25px;
	}

	& span {
		font-size: 16px;
		margin-bottom: 35px;
	}
`;

export const CardBack = styled.div`
	${cardFaceStyles}
	transform: rotateY(180deg);

	.description-box {
		max-height: 90%; /* adjust as needed */
		overflow-y: auto;
		width: 100%;
		height: 100%;
		padding: 0 10px;
		text-align: left;
	}

	& p {
		font-size: 16px;
		line-height: 1.5;
		padding: 0 20px;
		white-space: pre-line;
	}
`;
