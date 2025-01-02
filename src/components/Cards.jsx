import { useSelector } from "react-redux";
import { languageData } from "../data/language";

function Cards({ item }) {
  const darkModeColors = ["#495351", "#2D3235"];

  const { isDarkMode } = useSelector((state) => state.theme);

  const { language } = useSelector((state) => state.language);
  const texts = languageData[language];

  const colorIndex = item.id % darkModeColors.length;
  const backgroundColor = isDarkMode
    ? darkModeColors[colorIndex]
    : item.backgroundColor;

  return (
    <div
      className="w-[500px] h-[668px] top-[1936px] left-[193px] rounded-[12px] px-10 flex flex-col gap-[20px]"
      style={{ backgroundColor }}
    >
      <h2 className="font-playfair-display font-bold text-[29px] leading-[38.66px] tracking-[5%] mt-[50px]">
        {item.name}
      </h2>
      <p className="font-normal text-[16px] leading-[24px] w-[368px] h-[100px] mb-[90px]">
        {item.description}
      </p>
      <div className="flex gap-[10px] w-[280px] flex-wrap mb-2 ">
        {item.tags.map((tag, index) => (
          <div
            key={index}
            className={`w-[5.0625rem] h-[2rem] rounded-[4.75rem] p-[0.375rem_1.25rem_0.625rem_1rem] ${
              isDarkMode ? "bg-[#525252]" : "bg-white"
            } font-bold text-[1rem] leading-[1rem]`}
          >
            {tag}
          </div>
        ))}
      </div>
      <div className="font-semibold text-[1.25rem] leading-[1.875rem] flex justify-between z-10">
        <a href={item.github} target="_blank">
          {texts.view_on_github}
        </a>
        <div className="flex">
          <a href={item.vercel} target="_blank">
            {texts.go_to_app}
          </a>
          <img
            src={
              isDarkMode
                ? "/arrow-darkmode-right.svg"
                : "/arrow-right.svg"
            }
          />
        </div>
      </div>
      <img
        className="mt-[-6.5625rem] w-[37.25rem] h-[30.3125rem]"
        src={item.img}
      />
    </div>
  );
}

export default Cards;
