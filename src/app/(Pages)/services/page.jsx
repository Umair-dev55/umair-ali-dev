"use client";
import { motion } from "framer-motion";
import { FaReact, FaWordpress } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFramer } from "react-icons/si";
import { SiSitecore } from "react-icons/si";
import { GoArrowUpRight } from "react-icons/go";
import { MdArrowRightAlt } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Socials from "@/components/Socials";
import Pattern from "@/components/Pattern";
const UserData = [
  {
    title: "Frontend Developer",
    desc: "HTML, CSS, JavaScript, React JS, Next JS, Tailwind CSS",
    icon: FaReact,
  },
  {
    title: "React Developer",
    desc: "React JS, Hooks, State Management, API Integration",
    icon: FaReact,
  },
  {
    title: "Next.js Developer",
    desc: "SSR, SSG, API Routes, App Router",
    icon: SiNextdotjs,
  },
  {
    title: "Sitecore Developer",
    desc: "Headless CMS, SXA, Components, JSS",
    icon: SiSitecore,
  },

  {
    title: "UI Developer",
    desc: "Tailwind CSS, Responsive Design, UI Systems",
    icon: SiTailwindcss,
  },
  {
    title: "WordPress Developer",
    desc: "Themes, Plugins, Customization, Elementor",
    icon: FaWordpress,
  },
  {
    title: "Animation Developer",
    desc: "GSAP, Framer Motion, Micro interactions",
    icon: SiFramer,
  },
];
const services = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
      }}
      className="pt-18 sm:pt-0 flex-y-center min-h-screen px-2"
    >
      <Pattern />
      <div className="container mx-auto w-full flex flex-col gap-16">
        {/* text */}
        <div className="flex flex-col xl:flex-row  gap-8 items-start xl:justify-between xl:items-center">
          {/* heading */}
          <h2 className="h2 max-w-[450px] text-left xl:mb-0">
            Custom <span className="text-accent">Web Solutions</span> to boost
            your business
          </h2>
          {/* btn  */}
          <button className="btn btn-lg btn-accent flex gap-2">
            All Services <MdArrowRightAlt />{" "}
          </button>
        </div>
        {/* slide  */}
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="w-full max-w-full overflow-hidden"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {UserData.map((item, index) => (
            <SwiperSlide key={index} className="h-[284px]">
              <div className="rounded-2xl custom-border h-[284px] flex  flex-col justify-between p-6">
                <div className="flex justify-between">
                  <item.icon className="w-12 h-12 text-accent" />
                  <GoArrowUpRight className="bg-accent size-12 rounded-full" />
                </div>
                <div>
                  <h2 className="h3">{item.title}</h2>
                </div>
                <div>
                  <p className="text-white/70 font-light text-sm leading-relaxed tracking-wide w-full">
                    {item.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Socials */}
      <div className="hidden xl:block xl:absolute xl:p-5 top-1/2 right-0 transform -translate-y-1/2">
        <Socials
          containerStyles="flex gap-4 xl:flex-col justify-center"
          iconStyles="p-2 bg-accent rounded-full cursor-pointer"
        />
      </div>
    </motion.section>
  );
};

export default services;
