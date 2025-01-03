import { useSelector } from "react-redux";
import { languageData } from "../data/language";

function Footer() {
  const { language } = useSelector((state) => state.language);
  const { isDarkMode } = useSelector((state) => state.theme);

  const texts = languageData[language];
  return (
    <div className="lg:w-[47.375rem] h-[8.5625rem] mt-[3.125rem] mb-[3.125rem] flex justify-around items-center  xs:w-[30rem] xs:gap-5 ">
      <p className="font-medium text-[2.625rem] leading-[3.9375rem] w-[28.125rem] text-right z-20 xs:text-[2rem]">
        {texts.footer_description}
      </p>
      <div
        className="w-[15.5rem] h-[0.9375rem] rounded-sm  absolute lg:left-[40.625rem] left-[8rem]  z-10 
      lg:translate-y-[-0.9375rem] translate-y-[-1rem] xs:left-[4.5rem]"
        style={{
          backgroundColor: isDarkMode ? "#295387" : "#82BBFF",
        }}
      ></div>
      <div className="w-[9.875rem] h-[8.5625rem] flex flex-col text-[1rem] xs:text-[0.8rem]">
        <a
          className="font-medium leading-[2.25rem] text-[#1769FF]"
          href="https://github.com/umitsahin1"
          target="_blank"
        >
          Github
        </a>
        <a className="font-medium leading-[2.25rem] text-[#0A0A14]" href="">
          Personal Blog
        </a>
        <a
          className="font-medium  leading-[2.25rem] text-[#0077B5]"
          href="https://www.linkedin.com/in/umitsahin1/"
          target="_blank"
        >
          Linkedin
        </a>
        <a className="font-medium leading-[2.25rem] text-[#AF0C48]" href="">
          Email
        </a>
      </div>
    </div>
  );
}

export default Footer;
