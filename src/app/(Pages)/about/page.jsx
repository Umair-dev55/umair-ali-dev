"use client";
import { motion } from "framer-motion";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import HeroImageCard from "@/components/HeroImageCard";
import AboutStats from "@/components/AboutStats";
import AboutTestimonials from "@/components/AboutTestimonials";
import AboutInfo from "@/components/AboutInfo";
import AboutSkills from "@/components/AboutSkills";
import Journey from "@/components/Journey";

const about = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0, duration: 0.2, ease: "easeIn" },
      }}
      className=" sm:py-0  px-2"
    >
      <div className="grid sm:grid-cols-2 place-items-center sm:h-screen flex-col md:flex-row mx-auto">
        {/* 2nd div (Content) - Show first on mobile */}
        <div className="text-left order-1 sm:order-2 p-4 w-full">
          <ScrollArea className="h-auto sm:h-[calc(100vh-90px)] w-full">
            <div className="flex justify-evenly flex-col items-start gap-6">
              <div className="text-center sm:text-start *:py-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span className="">About Me</span>
                </div>
                <h2 className="">
                  <span className="h1 text-accent">Umair</span>
                  <span>/Dev</span>
                </h2>
                <p className="para">
                  Frontend Web Developer with expertise in building modern,
                  responsive, and high-performance web applications. Passionate
                  about creating exceptional user experiences with React and
                  latest web technologies.
                </p>
              </div>
              <div className="flex flex-col gap-8 justify-center sm:justify-start sm:items-start items-center  w-full">
                <div className="">
                  <AboutStats />
                </div>
                <div className=" ">
                  <AboutTestimonials />
                </div>
                <div className="flex">
                  <AboutSkills />
                </div>
                <div className="">
                  <Journey />
                </div>
                <div className="">
                  <AboutInfo />
                </div>
              </div>
            </div>
            <ScrollBar orientation="vertical" />
          </ScrollArea>
        </div>

        {/* 1st div (Hero Image) - Show second on mobile */}
        <div className="flex justify-center py-10 order-2 sm:order-1 ">
          <HeroImageCard />
        </div>
      </div>
    </motion.section>
  );
};

export default about;
