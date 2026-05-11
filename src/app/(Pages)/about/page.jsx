"use client";
import { motion } from "framer-motion";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import HeroImageCard from "@/components/HeroImageCard";
import AboutStats from "@/components/AboutStats";
import AboutTestimonials from "@/components/AboutTestimonials";
import AboutInfo from "@/components/AboutInfo";
import AboutSkills from "@/components/AboutSkills";
const about = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
      }}
      className="py-15 sm:py-0"
    >
      <div className="grid  sm:grid-cols-2 min-h-screen place-items-center">
        {/* 1st div */}
        <div className="relative py-10">
          <HeroImageCard />
        </div>
        {/* 2nd div */}

        <div className="text-left ">
          <ScrollArea className="h-[500px] w-full">
            <div className="flex justify-evenly flex-col items-start gap-6">
              <div className="text-start *:py-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>About Me</span>
                </div>
                <h2 className="">
                  <span className="h1 text-accent">Umair</span>
                  <span>/Dev</span>
                </h2>
                <p className="">
                  I am a frontend web developer specializing in building modern,
                  responsive, and user-friendly interfaces. I am passionate
                  about web development and continuously strive to improve my
                  skills and knowledge in the ever-evolving field of web
                  technologies.
                </p>
              </div>
              <div className="h-[2px] w-full bg-gray-400"></div>
              <div className="flex flex-col ">
                <div className="">
                  <AboutStats />
                </div>
                <div className="">
                  <AboutTestimonials />
                </div>
                <div className="">
                  <AboutInfo />
                </div>
                <div className="">
                  <AboutSkills />
                </div>
              </div>
            </div>
            <ScrollBar orientation="vertical" />
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
};

export default about;
