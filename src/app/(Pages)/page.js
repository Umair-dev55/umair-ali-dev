"use client";
import { motion } from "framer-motion";
import HeroImage from "../Components/HeroImage";
import Image from "next/image";
import myImg from "../../../public/assets/png.png";
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
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus voluptate iure asperiores fuga. In blanditiis debitis
          vel praesentium nisi pariatur, laborum minima facilis eum libero hic
          iusto repellendus exercitationem deleniti necessitatibus beatae sunt
          nam magni, ab dolor. Deleniti officiis dolorem culpa commodi
          voluptates ratione illum nisi accusantium. Qui, incidunt. Magnam.
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
