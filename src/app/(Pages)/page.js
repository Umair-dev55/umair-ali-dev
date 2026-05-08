"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { MoveUpRight, PhoneCall, MailPlus } from "lucide-react";
import Image from "next/image";
import HeroImage from "../../components/HeroImage";
import Socials from "../../components/Socials";
import Pattern from "../../components/Pattern";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 1, ease: "easeIn" },
      }}
      className="py-15 sm:py-0"
    >
      {/* Pattern */}
      <Pattern />
      <div className="grid p-5 sm:grid-cols-2 min-h-screen place-items-center">
        <div className="text-center md:text-left">
          <div className="flex justify-evenly flex-col items-center md:items-start gap-6">
            <h1 className="h1">
              Hi ! I Am Umair Ali,
              <br />
            </h1>{" "}
            <h1 className="h1  text-accent font-extrabold">
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  1000,
                  "Next JS Developer",
                  1000,
                  "React JS Developer",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="para">
              Passionate about building fast, intuitive, and visually stunning
              web experiences using modern technologies.
            </p>
            {/* button center in small and left in large */}
            <button className="min-w-full flex-x-center md:min-w-0 pb-6">
              {/* <div className="btn btn-lg btn-accent max-w-15  gap-2 ">
                <span className="">Let's Talk.</span>
                <MoveUpRight />
              </div> */}
              <a
                href="https://wa.me/923086754944"
                target="_blank"
                className="btn btn-lg btn-accent max-w-15 gap-2 flex items-center"
              >
                <span>Let's Talk.</span>
                <MoveUpRight />
              </a>
            </button>
            <div className="hidden">
              <div className="md:flex gap-4 text-lg">
                {/* Phone */}
                <div className="flex gap-2 justify-center lg:justify-start">
                  <span className="text-accent">
                    <PhoneCall />
                  </span>
                  <span>+92 308 6754044</span>
                </div>
                {/* mail */}
                <div className="hidden lg:flex gap-2">
                  <span className="text-accent">
                    <MailPlus />
                  </span>
                  <span className="">umair.dev55@gmail.com</span>
                </div>
              </div>
            </div>
            {/* Socials */}
            <div className="md:absolute md:p-5 top-1/2 right-0 transform -translate-y-1/2">
              <Socials
                containerStyles=" flex gap-4 md:flex-col justify-center"
                iconStyles="p-2 bg-accent rounded-full cursor-pointer"
              />
            </div>
          </div>
        </div>
        {/* 2nd div */}
        <div className="">
          <div>
            <div className=" flex-1  relative z-20 ">
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
              <div className="absolute top-0 right-0 w-full h-full bg-primary/20 opacity-50 rounded-full z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
