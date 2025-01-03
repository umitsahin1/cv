import { useSelector } from "react-redux";
import { languageData } from "../data/language";
import { skillsData } from "../data/skillsData";
import Skill from "../components/Skill.jsx";

function Skills() {
  const { language } = useSelector((state) => state.language);
  const { isDarkMode } = useSelector((state) => state.theme);
  const texts = languageData[language];
  return (
    <div className="flex flex-col items-center gap-20 mb-20 w-full relative z-10 lg:static">
      <h1 className="font-medium text-[3rem] leading-[3.630625rem] tracking-[0.1em]">
        {texts.skills}
      </h1>
      <div className="lg:flex gap-10 lg:flex-row grid grid-cols-3  ">
        {skillsData.map((skill, index) => (
          <Skill key={index} skill={skill} />
        ))}
      </div>
      <div
        className="w-[7.5625rem] h-[7.5625rem] border-[1.3125rem] border-[#EA2678] rounded-full bg-transparent absolute 
      lg:bottom-[-27.5rem] lg:right-[-3.75rem] bottom-[-89rem] right-[-3.75rem] z-20 xs:bottom-[-14rem] "
      ></div>
      <div
        className={`w-[7.5625rem] h-[7.5625rem] border-[1.3125rem] ${
          isDarkMode ? "border-[#525252]" : "border-[#D9D9D9]"
        }  rounded-full bg-transparent absolute lg:bottom-[8.125rem] lg:right-[26.875rem] bottom-[-40.5rem] right-[8rem] xs:right-[6rem] xs:bottom-[35rem]`}
      ></div>
    </div>
  );
}

export default Skills;
