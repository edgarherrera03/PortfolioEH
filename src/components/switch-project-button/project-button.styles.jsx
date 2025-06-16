import styled from "styled-components";
import { buttonBackground, BackgroundLight } from "../../assets/_variables";
export const BaseButton = styled.button`
	margin: 20px;
	width: 3rem;
	height: 3rem;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 30px;
	border: solid ${buttonBackground};
	& i {
		font-size: 1.2rem;
		color: ${buttonBackground};
		transition: transform 0.2s ease;
	}

	&:hover {
		border: none;
		background-color: ${buttonBackground};
		& i {
			color: ${BackgroundLight};
			transform: scale(1.2);
		}
	}
	&:disabled {
		cursor: not-allowed;
		opacity: 0.3;
	}

	@media (max-width: 768px) {
		width: 2.2rem;
		height: 2.2rem;
		& i {
			font-size: 1rem;
		}
	}
`;

export const RightButton = styled(BaseButton)``;

export const LeftButton = styled(BaseButton)``;
