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
          src="/assets/png3.png"
          alt="image"
          sizes="(max-width: 768px) 100vw, 50vw"
          fill
          quality={75}
          className="object-contain object-center"
        />
      </div>
    </div>
  );
};

export default HeroImageCard;
