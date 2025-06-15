import styled from "styled-components";
import { backgroundDarkBlue, BackgroundLight } from "../../assets/_variables";

export const FooterContainer = styled.div`
	width: 100%;
	height: 100px;
	background-color: ${backgroundDarkBlue};
	display: flex;
	justify-content: center;
	align-items: center;
	& p {
		color: ${BackgroundLight};
	}
`;
