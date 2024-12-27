import React from "react";

function Skills() {
  return (
    <div className=" flex flex-col items-center gap-20 mb-20">
      <p className="font-medium text-[48px] leading-[58.09px] tracking-[0.1em]">
        Skills
      </p>
      <div className="flex gap-6">
        <img src="src/assets/js.png" />
        <img src="src/assets/react.png" />
        <img src="src/assets/redux.png" />
        <img src="src/assets/node.png" />
        <img src="src/assets/vscode.png" />
        <img src="src/assets/figma.png" />
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

export default Skills;
