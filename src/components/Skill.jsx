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
      <img
        className="absolute lg:bottom-[-15.625rem] bottom-[-83rem] left-0"
        src="/Rectangle 22.png"
      />
    </div>
  );
}

export default Skill;
