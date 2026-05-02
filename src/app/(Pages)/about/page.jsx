"use client";
import { motion } from "framer-motion";
const about = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      about
    </motion.section>
  );
};

export default about;
