import { TitleSectionContainer } from "./title-section.styles";

const TitleSection = ({ children }) => {
	return (
		<TitleSectionContainer>
			<h2>{children}</h2>
		</TitleSectionContainer>
	);
};

export default TitleSection;
