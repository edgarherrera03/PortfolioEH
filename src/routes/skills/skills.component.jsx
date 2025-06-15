import ProgressBar from "../../components/progress-bar/progress-bar.component";
import TitleSection from "../../components/title-section/title-section.component";
import { SkillsContainer, SkillsLevelContainer, Skill } from "./skills.styles";

const Skills = () => {
	return (
		<div id="skills">
			<SkillsContainer>
				<TitleSection>Skills</TitleSection>
				<SkillsLevelContainer>
					<Skill>
						<h4>React</h4>
						<ProgressBar skillType="skill" percentage={80} />
					</Skill>
					<Skill>
						<h4>HTML5</h4>
						<ProgressBar skillType="skill" percentage={85} />
					</Skill>
					<Skill>
						<h4>Sass</h4>
						<ProgressBar skillType="skill" percentage={75} />
					</Skill>
					<Skill>
						<h4>Rust</h4>
						<ProgressBar skillType="skill" percentage={65} />
					</Skill>
					<Skill>
						<h4>Python</h4>
						<ProgressBar skillType="skill" percentage={85} />
					</Skill>
					<Skill>
						<h4>C</h4>
						<ProgressBar skillType="skill" percentage={85} />
					</Skill>
					<Skill>
						<h4>C++</h4>
						<ProgressBar skillType="skill" percentage={70} />
					</Skill>
					<Skill>
						<h4>SQL</h4>
						<ProgressBar skillType="skill" percentage={60} />
					</Skill>
				</SkillsLevelContainer>
			</SkillsContainer>
		</div>
	);
};

export default Skills;
