function Skill({ skill }) {
  return (
    <div>
      <div className="flex gap-6 flex-col items-center">
        <img src={skill.img} />
        <h2 className="text-[#777777] font-medium text-[24px] leading-[36px]">
          {skill.name}
        </h2>
      </div>
      <img
        className="absolute bottom-[-250px]  left-0"
        src="src/assets/Rectangle 22.png"
      />
      <div className="w-[121px] h-[121px] border-[21px] border-[#D9D9D9] rounded-full bg-transparent absolute bottom-[130px]  right-[430px]"></div>
      <div className="w-[121px] h-[121px] border-[21px] border-[#EA2678] rounded-full bg-transparent absolute bottom-[-440px]  right-[-60px]"></div>
    </div>
  );
}

export default Skill;
