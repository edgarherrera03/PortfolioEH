import styled from "styled-components";

export const BaseProject = styled.div`
	display: flex;
	width: 350px;
	height: 450px;
	background-size: cover;
	background-position: center;
	border-radius: 10px;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	overflow: hidden;
	cursor: pointer;
	justify-content: center;
	align-items: center;
	position: relative;
	& .project-title {
		padding: 10px;
		text-align: center;
		font-family: "Anton", sans-serif;
		font-size: 30px;
		font-weight: 500;
		color: white;
	}

	&:hover {
		transform: scale(1.03);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	}
`;

export const PythonProject = styled(BaseProject)`
	background-image: url("https://i.ibb.co/215byFYq/Hospital-management.jpg");

	&::before {
		content: "";
		position: absolute;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.2); /* darkens the image only */
		z-index: 0;
		pointer-events: none;
	}
	* {
		position: relative;
		z-index: 1;
	}
`;

export const ReactProject = styled(BaseProject)`
	background-image: url("https://i.ibb.co/rfFL8ZnP/Automation-python.jpg");
`;
export const HtmlProject = styled(BaseProject)`
	background-image: url("https://i.ibb.co/TD0RR0jL/encryption.png");
`;
export const CProject = styled(BaseProject)`
	background-image: url("https://i.ibb.co/KpxQ2sZd/portfolio.png");
	&::before {
		content: "";
		position: absolute;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.4); /* darkens the image only */
		z-index: 0;
		pointer-events: none;
	}
	* {
		position: relative;
		z-index: 1;
	}
`;

export const CppProject = styled(BaseProject)`
	background-image: url("https://i.ibb.co/Z17SG8BH/excel.png");
	&::before {
		content: "";
		position: absolute;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.4); /* darkens the image only */
		z-index: 0;
		pointer-events: none;
	}
	* {
		position: relative;
		z-index: 1;
	}
`;

// https://i.ibb.co/TD0RR0jL/encryption.png
// https://i.ibb.co/rfFL8ZnP/Automation-python.jpg
// https://i.ibb.co/KpxQ2sZd/portfolio.png
// https://i.ibb.co/Z17SG8BH/excel.png
