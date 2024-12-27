function Footer() {
  return (
    <div className="w-[758px] h-[137px]  mt-[50px] mb-[50px] flex justify-around items-center ">
      <p className="font-medium text-[42px] leading-[63px] w-[450px] text-right z-20">
        Let’s work together on your next product.
      </p>
      <div className="w-[248px] h-[15px] rounded-sm bg-[#82BBFF] absolute left-[650px]  z-10 translate-y-[-15px] "></div>
      <div className="w-[158px] h-[137px] flex flex-col">
        <a
          className="font-medium text-[16px] leading-[36px] text-[#1769FF]"
          href="https://github.com/umitsahin1"
          target="_blank"
        >
          Github
        </a>
        <a
          className="font-medium text-[16px] leading-[36px] text-[##0A0A14]"
          href=""
        >
          Personal Blog
        </a>
        <a
          className="font-medium text-[16px] leading-[36px] text-[#0077B5]"
          href="https://www.linkedin.com/in/umitsahin1/"
          target="_blank"
        >
          Linkedin
        </a>
        <a
          className="font-medium text-[16px] leading-[36px] text-[#AF0C48]"
          href=""
        >
          Email
        </a>
      </div>
    </div>
  );
}

export default Footer;
