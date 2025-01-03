import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage, setTheme } from "../store/actions";
import { languageData } from "../data/language";

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
      className={`lg:h-[46.125rem] h-[75rem] flex items-center lg:justify-center flex-col w-full ${
        isDarkMode ? "bg-[#2A262B]" : "bg-[#F4F4F4]"
      }`}
    >
      <div className=" flex lg:gap-5 gap-3 justify-end items-center lg:w-[69.1875rem] w-[30rem] lg:mt-[0.625rem] mt-[6rem] mb-[3.125rem] text-[#777777]">
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
          className={`text-[0.9375rem] leading-[1.134375rem]] tracking-[0.1em] font-bold w-[6.875rem] ${
            isDarkMode ? "text-[#D9D9D9]" : "text-[#777777]"
          }`}
        >
          {isDarkMode ? "LIGHT MODE" : "DARK MODE"}
        </p>
        <p>|</p>
        <p
          onClick={toggleLanguage}
          className="font-bold w-[11.125rem] lg:mr-0 mr-[-3.5rem] hover:scale-105 transition-transform duration-200 cursor-pointer  "
        >
          <span className="text-[15px] leading-[1.134375rem] tracking-[0.1em] text-[#E92577]">
            {language === "en" ? "TÜRKÇE’YE " : "SWITCH TO "}
          </span>
          {language === "en" ? "GEÇ" : "ENGLISH"}
        </p>
      </div>
      <img
        className="absolute top-0 lg:left-[34.375rem] left-10 "
        src={isDarkMode ? "/Ellipse 10-darkmode.png" : "/Ellipse 10.png"}
      />
      <img
        className="absolute lg:bottom-[300px] bottom-[100px]  right-0"
        src="/Rectangle 18.svg"
      />
      <div className=" flex flex-col lg:w-[69.1875rem] w-[30rem] h-[30.8125rem] m-0 lg:flex-row  ">
        <div className="lg:w-[42.4375rem] relative">
          <p className="font-Inter font-normal text-[1.875rem] leading-[2.269375rem] tracking-[0.1em] mb-8">
            {texts.welcome}
          </p>
          <img
            className="absolute left-[-20px] z-10 lg:translate-y-[40px]  translate-y-[35px]"
            src="/Rectangle 2.png"
          />
          <p
            className="font-inter font-medium lg:text-[2.625rem] text-[2.2rem] leading-[4rem] tracking-[0.01em] 
          lg:pr-[6.25rem] pr-4  z-20 absolute"
          >
            {texts.welcome_description}
          </p>
          <div className="mt-[21.25rem]">
            <div className="flex gap-5 mb-4">
              <a href="https://www.linkedin.com/in/umitsahin1/" target="_blank">
                <img
                  className="w-[1.9375rem] h-[2.0625rem]"
                  src={isDarkMode ? "/LinkedIn-darkmode.png" : "/LinkedIn.png"}
                />
              </a>
              <a href="https://github.com/umitsahin1" target="_blank">
                <img
                  className="w-[1.9375rem] h-[2.0625rem]"
                  src={isDarkMode ? "/github.-darkmodepng.png" : "/github.svg"}
                />
              </a>
            </div>
            <p
              className=" span w-[30rem] text-[1.125rem] leading-[2rem]"
              dangerouslySetInnerHTML={{
                __html: texts.freelancing_text,
              }}
            />
          </div>
        </div>
        <div className="relative mt-10">
          <img
            className="z-10 left-[3rem] absolute lg:relative lg:left-0  xs:left-[3rem]"
            src="/Rectangle 3.png"
          />
          <img
            className="w-[21.3125rem] h-[21.3125rem] rounded-[1.375rem] z-20 absolute top-0 lg:left-[3.125rem] left-[6rem] transform translate-x-[-1.875rem] translate-y-[1.25rem]"
            src="/2022-05-25 14-03-49.JPG"
          />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
