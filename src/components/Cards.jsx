function Cards({ item }) {
  return (
    <div
      className="w-[500px] h-[668px] top-[1936px] left-[193px] rounded-[12px] px-10 flex flex-col gap-[20px]"
      style={{ backgroundColor: item.backgroundColor }}
    >
      <h2 className="font-playfair-display font-bold text-[29px] leading-[38.66px] tracking-[5%] mt-[50px]">
        {item.name}
      </h2>
      <p className="font-normal text-[16px] leading-[24px] w-[368px] h-[100px] mb-[90px]">
        {item.description}
      </p>
      <div className="flex gap-[10px] w-[280px] flex-wrap mb-2 ">
        {item.tags.map((tag, index) => (
          <div
            key={index}
            className="w-[81px] h-[32px] rounded-[76px] p-[6px_20px_10px_16px]  bg-white font-bold text-[16px] leading-[16px] "
          >
            {tag}
          </div>
        ))}
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
      <img className="mt-[-105px] w-[596px] h-[485px]" src={item.img} />
    </div>
  );
}

export default Cards;
