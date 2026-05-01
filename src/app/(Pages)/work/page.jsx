"use client";
import { motion } from "framer-motion";
const work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      work
    </motion.section>
  );
};

export default work;
