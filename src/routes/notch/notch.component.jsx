import styled from "styled-components";
import { backgroundDarkBlue } from "../../assets/_variables";

const NotchBackground = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: env(safe-area-inset-top);
	background-color: ${backgroundDarkBlue};
	z-index: 9999;
	pointer-events: none;
`;

export default NotchBackground;
