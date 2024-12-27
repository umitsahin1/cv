function Cards() {
  return (
    <div className="w-[1064px] h-[792px] flex flex-col justify-between ">
      <h1 className="font-[500] text-[36px] leading-[43.57px] flex  justify-center">
        Projects
      </h1>
      <div className="flex justify-between">
        <div className="w-[500px] h-[668px] top-[1936px] left-[193px] rounded-[12px] bg-[#DDEEFE] px-10 flex flex-col gap-[30px]  ">
          <h2 className="font-playfair-display font-bold text-[29px] leading-[38.66px] tracking-[5%] mt-[80px]">
            Are you bored?
          </h2>
          <p className="font-normal text-[16px] leading-[24px] w-[368px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia.
          </p>
          <div className="flex gap-[10px] w-[280px] flex-wrap ">
            <div className="w-[81px] h-[32px] rounded-[76px] p-[6px_20px_10px_16px]  bg-white font-bold text-[16px] leading-[16px] ">
              react
            </div>
            <div className="w-[81px] h-[32px] rounded-[76px] p-[6px_20px_10px_16px]  bg-white font-bold text-[16px] leading-[16px]">
              vercel
            </div>
            <div className="w-[81px] h-[32px] rounded-[76px] p-[6px_20px_10px_16px]  bg-white font-bold text-[16px] leading-[16px]">
              axios
            </div>
            <div className="w-[81px] h-[32px] rounded-[76px] p-[6px_20px_10px_16px]  bg-white font-bold text-[16px] leading-[16px]">
              router
            </div>
          </div>
          <div className="font-semibold text-[20px] leading-[30px] flex justify-between">
            <a href="https://github.com/umitsahin1" target="_blank">
              <p>View on Github</p>
            </a>
            <div className="flex">
              <a href="">
                <p>Go to app</p>
              </a>
              <img src="src/assets/arrow-right.svg" />
            </div>
          </div>
          <img className="mt-[50px]" src="src/assets/Rectangle 37.png" />
          <img
            className="absolute left-[410px]  z-10 translate-y-[478px] w-[296px] h-[185px]"
            src="src/assets/Screenshot 2024-12-27 at 18.42.50.png"
            alt=""
          />
        </div>
        <div className="w-[500px] h-[668px] top-[1936px] left-[193px] rounded-[12px] bg-[#D9F6F1]">
          <div className="w-[500px] h-[668px] top-[1936px] left-[193px] rounded-[12px] bg-[#DDEEFE] px-10 flex flex-col gap-[30px]  ">
            <h2 className="font-playfair-display font-bold text-[29px] leading-[38.66px] tracking-[5%] mt-[80px]">
              Random Jokes
            </h2>
            <p className="font-normal text-[16px] leading-[24px] w-[368px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia.
            </p>
            <div className="flex gap-[10px] w-[280px] flex-wrap ">
              <div className="w-[81px] h-[32px] rounded-[76px] p-[6px_20px_10px_18px]  bg-white font-bold text-[16px] leading-[16px] ">
                react
              </div>
              <div className="w-[81px] h-[32px] rounded-[76px] p-[6px_20px_10px_18px]  bg-white font-bold text-[16px] leading-[16px]">
                vercel
              </div>
              <div className="w-[81px] h-[32px] rounded-[76px] p-[6px_20px_10px_18px]  bg-white font-bold text-[16px] leading-[16px]">
                axios
              </div>
              <div className="w-[81px] h-[32px] rounded-[76px] p-[6px_20px_10px_18px]  bg-white font-bold text-[16px] leading-[16px]">
                router
              </div>
              <div className="w-[81px] h-[32px] rounded-[76px] p-[6px_20px_10px_18px]  bg-white font-bold text-[16px] leading-[16px]">
                redux
              </div>
            </div>
            <div className="font-semibold text-[20px] leading-[30px] flex justify-between">
              <a href="https://github.com/umitsahin1" target="_blank">
                <p>View on Github</p>
              </a>
              <div className="flex">
                <a href="">
                  <p>Go to app</p>
                </a>
                <img src="src/assets/arrow-right.svg" />
              </div>
            </div>
            <img className="mt-[50px]" src="src/assets/Rectangle 37.png" />
            <img
              className="absolute left-[974px]  z-10 translate-y-[478px] w-[296px] h-[185px]"
              src="src/assets/Screenshot 2024-12-27 at 18.42.50.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
