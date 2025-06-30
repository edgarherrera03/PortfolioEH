import styled from "styled-components";
import {
	colorBorderLight,
	colorProgressSkillBarClear,
} from "../../assets/_variables";

export const ContactContainer = styled.div`
	display: flex;
	flex-flow: column;
	width: 100%;
	min-height: 70vh;
	justify-content: center;
	align-items: center;
	margin-top: 100px;
	background-color: ${colorProgressSkillBarClear};
	border-top: 1px solid ${colorBorderLight};
`;

export const FormContainer = styled.div`
	background: linear-gradient(to bottom, #1d1d1d 0%, #1b2542 100%);
	margin: 10rem;
	width: 60rem;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);

	@media (max-width: 1050px) {
		width: 45rem;
	}

	@media (max-width: 768px) {
		width: 35rem;
	}

	@media (max-width: 590px) {
		width: 20rem;
	}
`;

export const Form = styled.form`
	display: flex;
	justify-content: space-between;

	@media (max-width: 1050px) {
		flex-direction: column;
	}
`;

export const FormTitle = styled.div`
	display: flex;
	flex-direction: column;
	padding: 70px 0 0 50px;
	& span {
		color: ${colorProgressSkillBarClear};
		font-size: 3rem;
		font-weight: 700;
		font-family: "Montserrat", sans-serif;
		letter-spacing: 1.5px;
		margin-bottom: 0.7rem;
	}
	@media (max-width: 1050px) {
		flex-direction: row;
		gap: 1rem;
	}

	@media (max-width: 768px) {
		& span {
			font-size: 2rem;
		}
	}

	@media (max-width: 590px) {
		& span {
			font-size: 1.5rem;
		}
	}
`;

export const FormTextAreas = styled.div`
	display: flex;
	flex-flow: column;
	padding: 70px 50px 20px 50px;
	textarea {
		height: 15rem;
	}

	@media (max-width: 1050px) {
		& textarea {
			height: 12rem;
		}
	}

	@media (max-width: 768px) {
		& textarea {
			height: 10rem;
		}
	}

	@media (max-width: 590px) {
		& textarea {
			height: 8rem;
		}
	}
`;
export const ScreenHeader = styled.div`
	display: flex;
	align-items: center;
	height: 45px;
	width: 100%;
	background-color: #4d4d4f;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
	padding: 10px 20px;
	.screen-header-button {
		display: inline-block;
		width: 11px;
		height: 11px;
		margin-right: 5px;
		border-radius: 8px;
		background: white;
	}

	.screen-header-button.close {
		background: #ff605c;
	}

	.screen-header-button.maximize {
		background: #ffbd44;
	}

	.screen-header-button.minimize {
		background: #00ca4e;
	}

	.screen-header-right {
		display: flex;
		margin-left: auto;
	}
	.screen-header-ellipsis {
		width: 3px;
		height: 3px;
		margin-left: 2px;
		border-radius: 8px;
		background: #999;
	}
`;
export const InfoSenderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	input {
		width: 49%;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		input {
			width: 100%;
		}
	}
`;
export const ButtonContainer = styled.div`
	display: flex;
	justify-content: right;
`;
