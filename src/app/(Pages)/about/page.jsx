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
      <div className="grid sm:grid-cols-2 min-h-screen place-items-center h-screen flex-col md:flex-row">
        {/* 2nd div (Content) - Show first on mobile */}
        <div className="text-left order-1 sm:order-2 p-4">
          <ScrollArea className="h-[500px] w-full">
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
                <p className="">
                  Frontend Web Developer with expertise in building modern,
                  responsive, and high-performance web applications. Passionate
                  about creating exceptional user experiences with React and
                  latest web technologies.
                </p>
              </div>
              <div className="h-[2px] max-w-full bg-gray-400"></div>
              <div className="flex flex-col gap-8 justify-center sm:justify-start sm:items-start items-center  w-full">
                <div className="">
                  <AboutStats />
                </div>
                <div className="h-full p-4  w-full">
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

        {/* 1st div (Hero Image) - Show second on mobile */}
        <div className="flex justify-center py-10 order-2 sm:order-1">
          <HeroImageCard />
        </div>
      </div>
    </motion.section>
  );
};

export default about;
