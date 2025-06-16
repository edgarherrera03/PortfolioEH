import {
	HospitalProject,
	AutomationProject,
	CryptoProject,
	PortfolioProject,
	VbaProject,
} from "./project_link.styles";

export const LANGUAGE_CLASSES = {
	hospital: "hospital",
	automation: "automation",
	crypto: "crypto",
	portfolio: "portfolio",
	vba: "vba",
};

const getLanguage = (languageType) =>
	({
		[LANGUAGE_CLASSES.hospital]: HospitalProject,
		[LANGUAGE_CLASSES.automation]: AutomationProject,
		[LANGUAGE_CLASSES.crypto]: CryptoProject,
		[LANGUAGE_CLASSES.portfolio]: PortfolioProject,
		[LANGUAGE_CLASSES.vba]: VbaProject,
	}[languageType]);

const ProjectLink = ({ languageType, title, onClick }) => {
	const CustomLanguage = getLanguage(languageType);
	return (
		<CustomLanguage onClick={onClick}>
			<span className="project-title">{title}</span>
		</CustomLanguage>
	);
};

export default ProjectLink;
