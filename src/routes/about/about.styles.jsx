import styled from "styled-components";
import { backgroundDarkBlack, buttonBackground } from "../../assets/_variables";
import { colorBorderLight, backgroundDarkBlue } from "../../assets/_variables";
export const AboutContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: auto;
	margin: 100px 0 50px 0;
	@media (max-width: 1380px) {
		flex-direction: column;
	}
`;
export const ProfilePhotoContainer = styled.div`
	width: 350px;
	height: 350px;
	background-size: cover;
	background-position: center;
	margin: 0 40px 100px 0;
	border-radius: 180px;

	@media (max-width: 768px) {
		width: 300px;
		height: 300px;
		margin-right: 0;
	}
`;
export const TextAboutMeContainer = styled.div`
	display: flex;
	flex-flow: column;
	width: 50%;
	color: ${buttonBackground};
	font-family: "Montserrat", sans-serif;
	span {
		margin-bottom: 5px;
		font-size: 1.3rem;
		@media (max-width: 900px) {
			font-size: 1.2rem;
		}

		@media (max-width: 685px) {
			font-size: 1rem;
		}

		@media (max-width: 515px) {
			font-size: 0.9rem;
		}
	}
	p {
		line-height: 2rem;
		margin-bottom: 1rem;
		margin-right: 1rem;
		color: ${backgroundDarkBlue};
		& span {
			font-weight: 800;
			color: ${buttonBackground};
		}
	}

	@media (max-width: 1380px) {
		width: 80%;
	}
`;

export const PersonalInformationContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	width: auto;
	color: ${backgroundDarkBlue};

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
	}
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

	@media (max-width: 515px) {
		span {
			font-size: 0.8rem;
		}
	}
`;

export const LanguageContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 4rem;
	width: 100%;
	padding: 0 5rem;
	margin-top: 40px;
	@media (max-width: 1080px) {
		flex-direction: column;
		align-items: center;
		padding: 0 0.1rem;
		gap: 1rem;
	}
`;

export const LanguageText = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	color: ${backgroundDarkBlue};

	span {
		font-size: 1.6rem;
		font-weight: 600;
		@media (max-width: 900px) {
			font-size: 1.4rem;
		}

		@media (max-width: 685px) {
			font-size: 1.2rem;
		}

		@media (max-width: 515px) {
			font-size: 1.15rem;
		}
	}
	p {
		line-height: 2rem;
	}

	@media (max-width: 1080px) {
		width: 95%;
		margin-top: 15px;
		p {
			line-height: 1.5rem;
		}
	}
`;

export const Languages = styled.div`
	width: 90%;
`;

export const Language = styled.div`
	color: ${backgroundDarkBlue};
	p {
		margin: 5px 0;
		font-weight: 500;
	}
`;
