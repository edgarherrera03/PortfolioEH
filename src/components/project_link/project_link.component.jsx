import {
	PythonProject,
	ReactProject,
	HtmlProject,
	CProject,
	CppProject,
} from "./project_link.styles";

export const LANGUAGE_CLASSES = {
	python: "python",
	react: "react",
	html: "html",
	c: "c",
	cpp: "cpp",
};

const getLanguage = (languageType) =>
	({
		[LANGUAGE_CLASSES.python]: PythonProject,
		[LANGUAGE_CLASSES.react]: ReactProject,
		[LANGUAGE_CLASSES.html]: HtmlProject,
		[LANGUAGE_CLASSES.c]: CProject,
		[LANGUAGE_CLASSES.cpp]: CppProject,
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
