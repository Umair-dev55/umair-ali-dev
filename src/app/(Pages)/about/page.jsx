"use client";
import { motion } from "framer-motion";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import HeroImageCard from "@/components/HeroImageCard";
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
      <div className="grid p-2 sm:grid-cols-2 min-h-screen place-items-center">
        {/* 1st div */}
        <div className="">
          <HeroImageCard />
        </div>
        {/* 2nd div */}

        <div className="text-center md:text-left">
          <div className="flex justify-evenly flex-col items-center md:items-start gap-6">
            <ScrollArea className="h-[500px] w-full p-4">
              <div className="">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <p>About Me</p>
                </div>
                <h2 className="h2 mb-6">
                  <span className="text-accent">Umair</span>/Dev
                </h2>
                <p className="">
                  I am a frontend web developer specializing in building modern,
                  responsive, and user-friendly interfaces. I am passionate
                  about web development and continuously strive to improve my
                  skills and knowledge in the ever-evolving field of web
                  technologies.
                </p>
                <div className="flex w-full  h-[2px] bg-gray-400">
                  <div className="w-1/2 ">State</div>
                  <div className="w-1/2 ">Testimonial</div>
                  <div className="w-1/2 ">Info</div>
                  <div className="w-1/2 ">Journey</div>
                </div>
              </div>
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default about;
