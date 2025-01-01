import { useSelector } from "react-redux";
<<<<<<< HEAD
=======
import Skill from "../components/skill.jsx";
>>>>>>> 40cbcb70920b6ec15f3909b0906e1ce82f36c6e0
import { languageData } from "../data/language";
import { skillsData } from "../data/skillsData";
import Skill from "../components/skill";

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
