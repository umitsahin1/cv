import { useSelector } from "react-redux";


function Skill({ skill }) {
  const { isDarkMode } = useSelector((state) => state.theme);
  return (
    <div>
      <div className="flex gap-6 flex-col items-center">
        <img src={skill.img} />
        <h2
          className={`${
            isDarkMode ? "text-white" : "#777777"
          } font-medium text-[1.5rem] leading-[2.25rem]`}
        >
          {skill.name}
        </h2>
      </div>
      <img className="absolute bottom-[-15.625rem] left-0" src="/Rectangle 22.png" />
      <div
        className={`w-[7.5625rem] h-[7.5625rem] border-[1.3125rem] ${
          isDarkMode ? "border-[#525252]" : "border-[#D9D9D9]"
        }  rounded-full bg-transparent absolute bottom-[8.125rem] right-[26.875rem]`}
      ></div>
      <div
        className="w-[7.5625rem] h-[7.5625rem] border-[1.3125rem] border-[#EA2678] rounded-full bg-transparent absolute 
      bottom-[-27.5rem] right-[-3.75rem]"
      ></div>
    </div>
  );
}

export default Skill;
