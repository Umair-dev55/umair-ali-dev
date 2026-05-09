"use client";
import { motion } from "framer-motion";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import HeroImageCard from "@/components/HeroImageCard";
const contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
      }}
      className="py-15 sm:py-0"
    >
      <div className="grid p-5 sm:grid-cols-2 min-h-screen place-items-center">
        {/* 1st div */}
        <div className="">
          <HeroImageCard />
        </div>
        {/* 2nd div */}

        <div className="text-center md:text-left">
          <div className="flex justify-evenly flex-col items-center md:items-start gap-6">
            <h1 className="h1">
              Hi ! I Am Umair Ali,
              <br />
            </h1>{" "}
            <h1 className="h1  text-accent font-extrabold"></h1>
            <p className="para">
              Passionate contact building fast, intuitive, and visually stunning
              web experiences using modern technologies.
            </p>
            <div className="hidden">
              <div className="md:flex gap-4 text-lg">
                {/* Phone */}
                <div className="flex gap-2 justify-center lg:justify-start">
                  <span className="text-accent"></span>
                  <span>+92 308 6754044</span>
                </div>
                {/* mail */}
                <div className="hidden lg:flex gap-2">
                  <span className="text-accent"></span>
                  <span className="">umair.dev55@gmail.com</span>
                </div>
              </div>
            </div>
            {/* Socials */}
            <div className="md:absolute md:p-5 top-1/2 right-0 transform -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default contact;
