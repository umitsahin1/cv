import { useSelector } from "react-redux";
import { languageData } from "../data/language";

function Footer() {
  const { language } = useSelector((state) => state.language);

  const texts = languageData[language];
  return (
    <div className="w-[47.375rem] h-[8.5625rem] mt-[3.125rem] mb-[3.125rem] flex justify-around items-center ">
      <p className="font-medium text-[2.625rem] leading-[3.9375rem] w-[28.125rem] text-right z-20">
        {texts.footer_description}
      </p>
      <div className="w-[15.5rem] h-[0.9375rem] rounded-sm bg-[#82BBFF] absolute left-[40.625rem]  z-10 translate-y-[-0.9375rem] "></div>
      <div className="w-[9.875rem] h-[8.5625rem] flex flex-col">
        <a
          className="font-medium text-[1rem] leading-[2.25rem] text-[#1769FF]"
          href="https://github.com/umitsahin1"
          target="_blank"
        >
          Github
        </a>
        <a
          className="font-medium text-[1rem] leading-[2.25rem] text-[#0A0A14]"
          href=""
        >
          Personal Blog
        </a>
        <a
          className="font-medium text-[1rem] leading-[2.25rem] text-[#0077B5]"
          href="https://www.linkedin.com/in/umitsahin1/"
          target="_blank"
        >
          Linkedin
        </a>
        <a
          className="font-medium text-[1rem] leading-[2.25rem] text-[#AF0C48]"
          href=""
        >
          Email
        </a>
      </div>
    </div>
  );
}

export default Footer;
