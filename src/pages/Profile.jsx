function Profile() {
  return (
    <div className="bg-[#F4F4F4] h-[738px]  flex items-center justify-center flex-col w-full gap-20">
      <p className="font-medium text-[36px] leading-[43.57px] tracking-[1px]">
        Profile
      </p>
      <div className="card w-[500px] h-[313px] bg-white rounded-[12px] flex flex-col   justify-center pl-[30px] absolute left-[340px] z-10  translate-y-[70px] bg-[#52525280]"></div>
      <div className="flex  items-center gap-10">
        <div className="card w-[500px] h-[313px] bg-white rounded-[12px] flex flex-col   justify-center pl-[30px] z-20">
          <p className="mb-[40px] text-[24px] leading-[31.99px] tracking-[0.02em] text-[#EA2678]">
            Basic Information
          </p>
          <div className="flex gap-[40px]">
            <div className="flex flex-col gap-4 font-semibold text-[18px] leading-[21.78px] tracking-[0.05em] ">
              <p>Date of birth</p>
              <p>City of Residence</p>
              <p>Education Status</p>
              <p>Preferred Role</p>
            </div>
            <div className="flex flex-col gap-6 w-[350px] text-[18px] leading-[21.78px] tracking-[0.1px]">
              <p>11.06.1991</p>
              <p>Istanbul</p>
              <p>Istanbul Technical University Mechanical Engineering 2017</p>
              <p>Full Stack Developer</p>
            </div>
          </div>
        </div>
        <div className="w-[476px] h-[241px] flex flex-col gap-6 py-0 px-4 mt-[-50px]">
          <p className="font-normal text-[24px] leading-[31.99px] tracking-[1%] z-20 font-playfair">
            About me
          </p>
          <p className="font-normal text-[18px] leading-[27px] tracking-[1%]">
            Hello, I'm Umit. With my passion for software development and
            innovative approach, I deliver sustainable solutions while
            prioritizing user experience. As a Full Stack Developer, I ensure
            seamless frontend and backend integration.
          </p>
          <p className="font-normal text-[18px] leading-[27px] tracking-[1%]">
            My interest in technology allows me to build high-performance
            software. I am committed to continuous learning and growth in the
            software world.
          </p>
        </div>
      </div>
      <img
        className="absolute left-[880px]  z-10 translate-y-[-56px]"
        src="src/assets/Rectangle 39.png"
      />
    </div>
  );
}

export default Profile;
