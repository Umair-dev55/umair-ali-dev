"use client";
import HeroImage from "./HeroImage";
import Image from "next/image";
const HeroImageCard = () => {
  return (
    <div className="">
      <div className=" relative z-20 ">
        {/* blob */}
        <HeroImage />
        {/* img */}
        <Image
          src="/assets/png.png"
          alt="image"
          width={400}
          height={300}
          quality={75}
          className="absolute top-0 left-0 rounded-full"
        />
        {/* overlay */}
        <div className="absolute top-0 right-0 w-full h-full bg-pink/30 opacity-50 rounded-full z-10"></div>
      </div>
    </div>
  );
};

export default HeroImageCard;
