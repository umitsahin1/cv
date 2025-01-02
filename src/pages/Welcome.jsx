import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage, setTheme } from "../store/actions";
import { languageData } from "../data/language";
import Rectangle18 from "/Rectangle 18.svg"
import Ellipse10dark from "/Ellipse 10-darkmode.png"
import Ellipse10 from "/Ellipse 10.png"
import Rectangle2 from "/Rectangle 2.png"
import LinkedIndarkmode from "/LinkedIn-darkmode.png"
import LinkedIn from "/LinkedIn.png"   
import githubdarkmodepng from "/github.-darkmodepng.png" 
import github from "/github.svg" 
import Rectangle3 from "/Rectangle 3.png"  
     

function Welcome() {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state) => state.theme);
  const { language } = useSelector((state) => state.language);

  const texts = languageData[language];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedLanguage = localStorage.getItem("language");

    if (savedTheme) {
      dispatch(setTheme(savedTheme === "dark"));
    }
    if (savedLanguage) {
      dispatch(setLanguage(savedLanguage));
    }
  }, [dispatch]);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    dispatch(setTheme(!isDarkMode));
  };

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "tr" : "en";
    dispatch(setLanguage(newLanguage));
    localStorage.setItem("language", newLanguage);
  };

  return (
    <div
      className={`h-[738px] flex items-center justify-center flex-col w-full ${
        isDarkMode ? "bg-[#2A262B]" : "bg-[#F4F4F4]"
      }`}
    >
      <div className="flex gap-5 justify-end items-center w-[1107px] mt-[10px] mb-[50px] text-[#777777]">
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
        <label
          htmlFor="checkbox"
          className={`checkbox-label ${
            isDarkMode ? "bg-[#000000]" : "bg-[#e92577]"
          }`}
        >
          <span className="ball"></span>
          <span
            className={`ball-dark ${isDarkMode ? "bg-[#000000]" : ""}`}
          ></span>
        </label>

        <p
          className={`text-[15px] leading-[18.15px] tracking-[0.1em] font-bold w-[110px] ${
            isDarkMode ? "text-[#D9D9D9]" : "text-[#777777]"
          }`}
        >
          {isDarkMode ? "LIGHT MODE" : "DARK MODE"}
        </p>
        <p>|</p>
        <p
          onClick={toggleLanguage}
          className="font-bold  w-[178px] hover:scale-105 transition-transform duration-200 cursor-pointer  "
        >
          <span className="text-[15px] leading-[18.15px] tracking-[0.1em] text-[#E92577]  ">
            {language === "en" ? "TÜRKÇE’YE " : "SWITCH TO "}
          </span>
          {language === "en" ? "GEÇ" : "ENGLISH"}
        </p>
      </div>
      <img
        className="absolute top-0 left-[550px]"
        src={
          isDarkMode
            ? {Ellipse10dark}
            : {Ellipse10}
        }
      />
      <img
        className="absolute bottom-[300px] right-0"
        src={Rectangle18}
      />
      <div className="flex w-[1107px] h-[493px] m-0 ">
        <div className="w-[679px] relative">
          <p className="font-Inter font-normal text-[30px] leading-[36.31px] tracking-[0.1em] mb-8">
            {texts.welcome}
          </p>
          <img
            className="absolute left-[-20px] z-10 translate-y-[40px]"
            src={Rectangle2}
          />
          <p className="font-inter font-medium text-[42px] leading-[64px] tracking-[0.01em] pr-[100px] z-20 absolute">
            {texts.welcome_description}
          </p>
          <div className="mt-[340px]">
            <div className="flex gap-5 mb-4">
              <a href="https://www.linkedin.com/in/umitsahin1/" target="_blank">
                <img
                  className="w-[31px] h-[33px]"
                  src={
                    isDarkMode
                      ? {LinkedIndarkmode}
                      : {LinkedIn}
                  }
                />
              </a>
              <a href="https://github.com/umitsahin1" target="_blank">
                <img
                  className="w-[31px] h-[33px]"
                  src={
                    isDarkMode
                      ? "/github.-darkmodepng.png"
                      : "/github.svg"
                  }
                />
              </a>
            </div>
            <p
              className=" span w-[480px] text-[18px] leading-[32px]"
              dangerouslySetInnerHTML={{
                __html: texts.freelancing_text,
              }}
            />
          </div>
        </div>
        <div className="relative mt-10">
          <img className="z-10" src={Rectangle3} />
          <img
            className="w-[341px] h-[341px] rounded-[22px] z-20 absolute top-0 left-[50px] transform translate-x-[-30px] translate-y-[20px]"
            src="/2022-05-25 14-03-49.JPG"
          />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
