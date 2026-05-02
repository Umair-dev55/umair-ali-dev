"use client";
import { motion } from "framer-motion";
import HeroImage from "../Components/HeroImage";
import Image from "next/image";
import myImg from "../../../public/assets/png.png";
import { TypeAnimation } from "react-type-animation";
const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      <div className="flex flex-col xl:flex-row items-center justify-between w-full">
        <div className="w-full xl:w-[550px]">
          <h1 className="h1">
            Hi, I Am Umair Ali,
            <br />
          </h1>{" "}
          <h1 className="h1 text-5xl text-accent font-extrabold">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1000,
                "MERN Stack Developer",
                1000,
                "Next JS Developer",
                1000,
              ]}
              speed={100}
              repeat={Infinity}
            />
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore,
            excepturi odit. Corrupti eum commodi fugiat aut, rem consequatur
            tempora nostrum.
          </p>
        </div>
        <div className="hidden xl:block flex-1 relative z-20">
          {/* blob */}
          <HeroImage />
          {/* img */}
          <Image
            src={myImg}
            alt="image"
            width={400}
            height={300}
            quality={100}
            className="absolute top-20 right-10 rounded-full"
          />
          {/* overlay */}
          <div className="absolute top-0 right-0 w-full h-full bg-primary/20 opacity-50 rounded-full z-10"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
