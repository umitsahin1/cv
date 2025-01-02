import { useSelector } from "react-redux";
import { languageData } from "../data/language";

function Profile() {
  const { language } = useSelector((state) => state.language);
  const { isDarkMode } = useSelector((state) => state.theme);

  const texts = languageData[language];
  return (
    <div
      className={`h-[46.125rem] flex items-center justify-center flex-col w-full gap-20  ${
        isDarkMode ? "bg-[#2A262B]" : "bg-[#F4F4F4]"
      }`}
    >
      <p className="font-medium text-[2.25rem] leading-[2.723125rem] tracking-[0.0625rem]">
        {texts.profile}
      </p>
      <div
        className="card w-[31.25rem] h-[19.5625rem] rounded-[0.75rem] flex flex-col justify-center pl-[1.875rem] absolute 
      left-[21.25rem] z-10  translate-y-[4.375rem] bg-[#52525280]"
      ></div>
      <div className="flex  items-center gap-10">
        <div
          className={`card w-[31.25rem] h-[19.5625rem] rounded-[0.75rem] flex flex-col justify-center pl-[1.875rem] z-20 ${
            isDarkMode ? "bg-[#525252]" : "bg-[#FFFFFF]"
          }`}
        >
          <p className="mb-[2.5rem] text-[1.5rem] leading-[2rem] tracking-[0.02em] text-[#EA2678]">
            {texts.basic_information}
          </p>
          <div className="flex gap-[2.5rem]">
            <div className="flex flex-col gap-4 font-semibold text-[1.125rem] leading-[1.36125rem] tracking-[0.05em] ">
              <p>{texts.date_of_birth}</p>
              <p>{texts.city_of_residence}</p>
              <p>{texts.education_status}</p>
              <p>{texts.preferred_role}</p>
            </div>
            <div className="flex flex-col gap-6 w-[350px] text-[1.125rem] leading-[1.36125rem] tracking-[0.1px]">
              <p>11.06.1991</p>
              <p>{texts.city_of_residence_answer}</p>
              <p>{texts.education_status_answer}</p>
              <p>Full Stack Developer</p>
            </div>
          </div>
        </div>
        <div className="w-[29.75rem] h-[15.0625rem] flex flex-col gap-6 py-0 px-4 mt-[-3.125rem]">
          <p className="font-normal text-[1.5rem] leading-[2rem] tracking-[1%] z-20 font-playfair">
            {texts.aboutMe}
          </p>
          <p className="font-normal text-[1.125rem] leading-[1.6875rem] tracking-[1%]">
            {texts.profile_description_1}
          </p>
          <p className="font-normal text-[1.125rem] leading-[1.6875rem] tracking-[1%]">
            {texts.profile_description_2}
          </p>
        </div>
      </div>
      <img
        className="absolute left-[55rem] z-10 translate-y-[-3.5rem]"
        src="/Rectangle 39.png"
      />
    </div>
  );
}

export default Profile;
