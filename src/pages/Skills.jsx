import { useSelector } from "react-redux";
import { languageData } from "../data/language";
import { skillsData } from "../data/skillsData";
import Skill from "../components/Skill.jsx";

function Skills() {
  const { language } = useSelector((state) => state.language);
  const texts = languageData[language];
  return (
    <div className="flex flex-col items-center gap-20 mb-20">
      <h1 className="font-medium text-[48px] leading-[58.09px] tracking-[0.1em]">
        {texts.skills}
      </h1>
      <div className="flex gap-10 ">
        {skillsData.map((skill, index) => (
          <Skill key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
