"use client";
import { motion } from "framer-motion";
import HeroImage from "../Components/HeroImage";
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
        <div className="w-full xl:w-[550px]">Text</div>
        <div className="hidden xl:block flex-1 relative z-20">
          {/* blob */}
          <HeroImage />
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
