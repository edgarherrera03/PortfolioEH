import styled from "styled-components";

export const SwitchButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledSwitchButton = styled.button`
	margin: 20px 0;
	font-weight: bold;
	border: none;
	border-radius: 20px;
	cursor: pointer;
	background-color: #535272;
	color: white;
	width: 70px;
	height: 35px;
	position: relative;

	@media (max-width: 768px) {
		width: 60px;
		height: 30px;
	}
	@media (max-width: 515px) {
		width: 3.4rem;
		height: 1.6rem;
	}
`;

export const LanguageSelector = styled.div`
	height: 28px;
	width: 28px;
	background-color: white;
	cursor: pointer;
	border-radius: 99px;
	position: absolute;
	transform: translateX(0);
	transition: left 0.15s ease;
	left: ${({ toggled }) => (toggled ? "37px" : "4px")};
	top: 50%;
	transform: translateY(-50%);

	@media (max-width: 768px) {
		width: 1.5rem;
		height: 1.5rem;
		left: ${({ toggled }) => (toggled ? "31px" : "4px")};
	}
	@media (max-width: 515px) {
		width: 1.3rem;
		height: 1.3rem;
	}
`;

export const Label = styled.span`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	color: white;
	font-size: 12px;
	font-weight: 600;
	pointer-events: none;

	left: ${({ position }) => (position === "left" ? "10px" : "auto")};
	right: ${({ position }) => (position === "right" ? "10px" : "auto")};

	@media (max-width: 768px) {
		font-size: 1rem;
	}
	@media (max-width: 515px) {
		font-size: 0.7rem;
	}
`;
