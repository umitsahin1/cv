function Profile() {
  return (
    <div className="bg-[#F4F4F4] h-[738px]  flex items-center justify-center flex-col w-full gap-20">
      <p className="font-medium text-[36px] leading-[43.57px] tracking-[1px]">
        Profile
      </p>
      <div className="flex  items-center gap-10">
        <div className="card w-[500px] h-[313px] bg-white rounded-[12px] flex flex-col   justify-center pl-[30px]">
          <p className="mb-[40px] text-[24px] leading-[31.99px] tracking-[0.02em] text-[#EA2678]">
            Basic Information
          </p>
          <div className="flex gap-[40px]">
            <div className="flex flex-col gap-4 font-semibold text-[18px] leading-[21.78px] tracking-[0.05em]">
              <p>Doğum tarihi</p>
              <p>İkamet Şehri</p>
              <p className="mb-[23px]">Eğitim Durumu</p>
              <p>Tercih Ettiği Rol</p>
            </div>
            <div className="flex flex-col gap-4 w-[207px] text-[18px] leading-[21.78px] tracking-[0.1px]">
              <p>24.03.1996</p>
              <p>Ankara</p>
              <p>Hacettepe Ünv. Biyoloji Lisans, 2016</p>
              <p>Frontend, UI</p>
            </div>
          </div>
        </div>
        <div className="w-[476px] h-[241px] flex flex-col gap-10">
          <p className="text-[24px] leading-[31.99px] tracking-[1%] z-20 font-playfair">
            About me
          </p>
          <p className="text-[18px] leading-[27px] tracking-[1%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia.
          </p>
          <p className="text-[18px] leading-[27px] tracking-[1%]">
            Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
            deserunt quam temporibus cumque magnam!
          </p>
        </div>
      </div>
      <img
        className="absolute left-[860px]  z-10 translate-y-[-32px]"
        src="src/assets/Rectangle 39.png"
      />
    </div>
  );
}

export default Profile;
