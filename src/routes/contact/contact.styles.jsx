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
	/* background-color: ${colorProgressSkillBarClear}; */
	border-top: 1px solid ${colorBorderLight};
`;

export const FormContainer = styled.div`
	background: linear-gradient(to bottom, #1d1d1d 0%, #1b2542 100%);
	margin: 150px;
	width: 1000px;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
`;

export const Form = styled.form`
	display: flex;
	justify-content: space-between;
`;

export const FormTitle = styled.div`
	display: flex;
	flex-direction: column;
	padding: 70px 0 0 50px;
	& span {
		color: ${colorProgressSkillBarClear};
		font-size: 40px;
		font-weight: 700;
		font-family: "Montserrat", sans-serif;
		letter-spacing: 1.5px;
	}
`;

export const FormTextAreas = styled.div`
	display: flex;
	flex-flow: column;
	padding: 70px 50px 20px 50px;
	textarea {
		height: 250px;
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
`;
export const ButtonContainer = styled.div`
	display: flex;
	justify-content: right;
`;
