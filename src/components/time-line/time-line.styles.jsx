import styled from "styled-components";
import { backgroundDarkBlue } from "../../assets/_variables";

export const TimeLineContainer = styled.div`
	display: flex;
	justify-content: center;

	padding: 0px 240px;
	i {
		color: ${backgroundDarkBlue};
		font-size: 12px;
	}
`;

export const LineContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const Line = styled.span`
	height: 1px;
	width: 348px;
	background-color: black;
`;
