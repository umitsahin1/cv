import { useSelector } from "react-redux";
import { languageData } from "../data/language";

function Profile() {
  const { language } = useSelector((state) => state.language);
  const { isDarkMode } = useSelector((state) => state.theme);

  const texts = languageData[language];
  return (
    <div
      className={` h-[738px]  flex items-center justify-center flex-col w-full gap-20  ${
        isDarkMode ? "bg-[#2A262B]" : "bg-[#F4F4F4]"
      }`}
    >
      <p className="font-medium text-[36px] leading-[43.57px] tracking-[1px]">
        {texts.profile}
      </p>
      <div className="card w-[500px] h-[313px] rounded-[12px] flex flex-col   justify-center pl-[30px] absolute left-[340px] z-10  translate-y-[70px] bg-[#52525280]"></div>
      <div className="flex  items-center gap-10">
        <div
          className={`card w-[500px] h-[313px] rounded-[12px] flex flex-col   justify-center pl-[30px] z-20 ${
            isDarkMode ? "bg-[#525252]" : "bg-[#FFFFFF]"
          }`}
        >
          <p className="mb-[40px] text-[24px] leading-[31.99px] tracking-[0.02em] text-[#EA2678]">
            {texts.basic_information}
          </p>
          <div className="flex gap-[40px]">
            <div className="flex flex-col gap-4 font-semibold text-[18px] leading-[21.78px] tracking-[0.05em] ">
              <p>{texts.date_of_birth}</p>
              <p>{texts.city_of_residence}</p>
              <p>{texts.education_status}</p>
              <p>{texts.preferred_role}</p>
            </div>
            <div className="flex flex-col gap-6 w-[350px] text-[18px] leading-[21.78px] tracking-[0.1px]">
              <p>11.06.1991</p>
              <p>{texts.city_of_residence_answer}</p>
              <p>{texts.education_status_answer}</p>
              <p>Full Stack Developer</p>
            </div>
          </div>
        </div>
        <div className="w-[476px] h-[241px] flex flex-col gap-6 py-0 px-4 mt-[-50px]">
          <p className="font-normal text-[24px] leading-[31.99px] tracking-[1%] z-20 font-playfair">
            {texts.aboutMe}
          </p>
          <p className="font-normal text-[18px] leading-[27px] tracking-[1%]">
            {texts.profile_description_1}
          </p>
          <p className="font-normal text-[18px] leading-[27px] tracking-[1%]">
            {texts.profile_description_2}
          </p>
        </div>
      </div>
      <img
        className="absolute left-[880px]  z-10 translate-y-[-56px]"
        src="/Rectangle 39.png"
      />
    </div>
  );
}

export default Profile;
