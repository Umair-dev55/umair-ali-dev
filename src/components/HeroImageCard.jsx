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
          sizes="h-full"
          fill
          quality={75}
          className="rounded-full object-cover"
        />
        {/* overlay */}
        <div className="absolute top-0 right-0 w-full h-full bg-pink/30 opacity-50 rounded-full z-10"></div>
      </div>
    </div>
  );
};

export default HeroImageCard;
