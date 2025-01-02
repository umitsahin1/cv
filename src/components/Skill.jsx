import { useSelector } from "react-redux";
import Rectangle22 from "/Rectangle 22.png"

function Skill({ skill }) {
  const { isDarkMode } = useSelector((state) => state.theme);
  return (
    <div>
      <div className="flex gap-6 flex-col items-center">
        <img src={skill.img} />
        <h2
          className={`${
            isDarkMode ? "text-white" : "#777777"
          } font-medium text-[24px] leading-[36px]`}
        >
          {skill.name}
        </h2>
      </div>
      <img
        className="absolute bottom-[-250px]  left-0"
        src={Rectangle22}
      />
      <div
        className={`w-[121px] h-[121px] border-[21px] ${
          isDarkMode ? "border-[#525252]" : "border-[#D9D9D9]"
        }  rounded-full bg-transparent absolute bottom-[130px]  right-[430px]`}
      ></div>
      <div className="w-[121px] h-[121px] border-[21px] border-[#EA2678] rounded-full bg-transparent absolute bottom-[-440px]  right-[-60px]"></div>
    </div>
  );
}

export default Skill;
