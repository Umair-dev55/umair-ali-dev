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
        transition: { delay: 2.2, duration: 1, ease: "easeIn" },
      }}
      className=""
    >
      <div className="grid  p-5  sm:grid-cols-2 min-h-screen place-items-center">
        <div className="">
          <div className="*:pb-4">
            <h1 className="h1">
              Hi, I Am Umair Ali,
              <br />
            </h1>{" "}
            <h1 className="h1 text-5xl text-accent font-extrabold">
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  1000,
                  "Backend Developer",
                  1000,
                  "Next JS Developer",
                  1000,
                  "React JS Developer",
                  1000,
                  "Mern Stack Developer",
                  1000,
                  "JavaScript Developer",
                  1000,
                  "Full Stack Developer",
                  1000,
                  "PhP Developer",
                  1000,
                  "JavaScript Developer",
                  1000,
                  "Raect Native Developer",
                  1000,
                  "Web Developer",
                  1000,
                  "Web App Developer",
                  1000,
                  "Mobile App Developer",
                  1000,
                  "WordPress Developer",
                  1000,
                  "Custom Web Developer",
                  1000,
                  "UI/UX Developer",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[22px]">
              Passionate about building fast, intuitive, and visually stunning
              web experiences using modern technologies.
            </p>
          </div>
        </div>
        <div className="">
          <div>
            <div className=" flex-1 relative z-20">
              {/* blob */}
              <HeroImage />
              {/* img */}
              <Image
                src={myImg}
                alt="image"
                width={400}
                height={300}
                quality={100}
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
