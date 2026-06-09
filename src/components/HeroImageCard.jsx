"use client";
import HeroImage from "./HeroImage";
import Image from "next/image";
const HeroImageCard = () => {
  return (
    <div className="">
      <div className="relative z-20 w-full h-full">
        {/* blob */}
        <HeroImage />
        {/* img */}
        <Image
          src="/assets/myImg.png"
          alt="image"
          sizes="(max-width: 768px) 100vw, 50vw"
          fill
          quality={75}
          className="object-contain object-center pb-6"
        />
        <div
          className="relative -top-4
        h-5 bg-accent/20 opacity-20"
        ></div>
      </div>
    </div>
  );
};

export default HeroImageCard;
