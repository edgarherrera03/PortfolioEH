import styled from "styled-components";
import { buttonBackground, BackgroundLight } from "../../assets/_variables";
export const BaseButton = styled.button`
	margin: 20px;
	width: 50px;
	height: 50px;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 30px;
	border: solid ${buttonBackground};
	& i {
		font-size: 20px;
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
`;

export const RightButton = styled(BaseButton)``;

export const LeftButton = styled(BaseButton)``;
