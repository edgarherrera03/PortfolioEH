import ProgressBar from "../../components/progress-bar/progress-bar.component";
import TitleSection from "../../components/title-section/title-section.component";
import { SkillsContainer, SkillsLevelContainer, Skill } from "./skills.styles";
import { skillList } from "../../assets/objects-list";
import { useLanguage } from "../../context/language/language.context";

const Skills = () => {
	const { language } = useLanguage();
	return (
		<div id="skills">
			<SkillsContainer>
				<TitleSection>
					{language === "en" ? "Skills" : "Compétences"}
				</TitleSection>
				<SkillsLevelContainer>
					{skillList.map(({ id, title, performance }) => (
						<Skill key={id}>
							<h4>{title}</h4>
							<ProgressBar skillType="skill" percentage={performance} />
						</Skill>
					))}
				</SkillsLevelContainer>
			</SkillsContainer>
		</div>
	);
};

export default Skills;
