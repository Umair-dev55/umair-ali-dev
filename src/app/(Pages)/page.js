"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { PhoneCall, MailPlus } from "lucide-react";
import Socials from "../../components/Socials";
import HeroImageCard from "@/components/HeroImageCard";
import { FaWhatsapp } from "react-icons/fa6";
const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0, duration: 0.2, ease: "easeIn" },
      }}
      className="py-15 sm:py-0 overflow-x-hidden"
    >
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
                  "React Developer",
                  1000,
                  "Next js Developer",
                  1000,
                  "WordPress Developer",
                  1000,
                  "Sitecore Developer",
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
            <button className="min-w-full flex-x-center md:min-w-0 pb-6">
              <a
                href="https://wa.me/923086754944"
                target="_blank"
                className="btn btn-lg btn-accent max-w-15 gap-2 flex items-center"
              >
                <span>Let's Talk.</span>
                <FaWhatsapp size={28} />
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
          <HeroImageCard />
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
