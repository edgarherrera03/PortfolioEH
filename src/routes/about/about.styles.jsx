import styled from "styled-components";
import { backgroundDarkBlack, buttonBackground } from "../../assets/_variables";
import { colorBorderLight, backgroundDarkBlue } from "../../assets/_variables";
export const AboutContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 600px;
`;
export const ProfilePhotoContainer = styled.div`
	width: 350px;
	height: 350px;
	background-size: cover;
	background-position: center;
	margin-right: 40px;
	border-radius: 180px;
`;
export const TextAboutMeContainer = styled.div`
	display: flex;
	flex-flow: column;
	width: 50%;
	color: ${buttonBackground};
	font-family: "Montserrat", sans-serif;
	span {
		margin-bottom: 5px;
	}
	p {
		line-height: 25px;
		margin-bottom: 15px;
		color: ${backgroundDarkBlue};
		& span {
			font-weight: 800;
			color: ${buttonBackground};
		}
	}
`;

export const PersonalInformationContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	width: auto;
	color: ${backgroundDarkBlue};
`;

export const Info = styled.div`
	display: flex;
	align-items: center;
	& span {
		font-weight: 700;
		margin: 0 20px 0 0;
	}
`;

export const Separator = styled.div`
	width: 100%;
	height: 1px;
	background-color: ${colorBorderLight};
	margin: 20px 0;
`;

export const SocialMediaContainer = styled.div`
	display: flex;
	color: ${backgroundDarkBlue};

	margin-bottom: 20px;
`;

export const SocialMedia = styled.div`
	display: flex;
	cursor: pointer;
	align-items: center;
	justify-items: center;
	margin-right: 20px;
	transform: transform 0.2s ease;
	i {
		font-size: 18px;
		margin-right: 5px;
	}
	span {
		margin: 0;
	}

	&:hover {
		transform: scale(1.02);
		color: ${backgroundDarkBlack};
	}
`;

export const LanguageContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 3rem;
	width: 100%;
`;

export const LanguageText = styled.div`
	display: flex;
	flex-direction: column;
	width: 35%;
	color: ${backgroundDarkBlue};

	span {
		font-size: 25px;
		font-weight: 600;
	}
	p {
		line-height: 1.6rem;
	}
`;

export const Languages = styled.div``;

export const Language = styled.div`
	width: 700px;
	color: ${backgroundDarkBlue};
	p {
		margin: 5px 0;
		font-weight: 500;
	}
`;
