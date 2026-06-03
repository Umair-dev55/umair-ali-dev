"use client";
import { motion } from "framer-motion";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // ← Added (for navigation)
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

const projects = [
  // ================== FRONTEND DEVELOPMENT ==================
  {
    id: 1,
    category: "Frontend Development",
    title: "Business Landing Page",
    description:
      "Responsive business landing page with modern UI and smooth user experience.",
    image: "/assets/work/thumb1.png",
    link: "/",
    github: "https://github.com/yourusername/business-landing",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    category: "Frontend Development",
    title: "Restaurant Website",
    description:
      "Multi-section restaurant website with menu showcase and responsive design.",
    image: "/assets/work/thumb2.png",
    link: "/",
    github: "https://github.com/yourusername/restaurant-website",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    category: "Frontend Development",
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with modern layouts and animations.",
    image: "/assets/work/thumb3.png",
    link: "/",
    github: "https://github.com/yourusername/portfolio-website",
    tech: ["HTML", "Tailwind CSS", "GSAP"],
  },

  // ================== REACT / NEXT.JS ==================
  {
    id: 4,
    category: "React / Next",
    title: "SaaS Landing Page",
    description:
      "High-converting SaaS landing page built with React and reusable components.",
    image: "/assets/work/thumb4.png",
    link: "/",
    github: "https://github.com/yourusername/saas-landing",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 5,
    category: "React / Next",
    title: "E-Commerce Store",
    description:
      "Modern e-commerce application with product listings and cart functionality.",
    image: "/assets/work/thumb5.png",
    link: "/",
    github: "https://github.com/yourusername/ecommerce-store",
    tech: ["Next.js", "Tailwind", "Shadcn UI"],
  },
  {
    id: 6,
    category: "React / Next",
    title: "Admin Dashboard",
    description:
      "Interactive dashboard with analytics, charts, and responsive layouts.",
    image: "/assets/work/thumb6.png",
    link: "/",
    github: "https://github.com/yourusername/admin-dashboard",
    tech: ["Next.js", "Recharts", "Tailwind CSS"],
  },

  // ================== WORDPRESS ==================
  {
    id: 7,
    category: "Wordpress",
    title: "Corporate Business Website",
    description:
      "Professional company website with custom pages and service sections.",
    image: "/assets/work/thumb7.png",
    link: "/",
    github: "https://github.com/yourusername/corporate-wordpress",
    tech: ["WordPress", "Elementor", "Yoast SEO"],
  },
  {
    id: 8,
    category: "Wordpress",
    title: "Blog & Magazine Website",
    description:
      "SEO-friendly blog website optimized for content publishing and performance.",
    image: "/assets/work/thumb8.png",
    link: "/",
    github: "https://github.com/yourusername/blog-wordpress",
    tech: ["WordPress", "Elementor", "PHP"],
  },
  {
    id: 9,
    category: "Wordpress",
    title: "WooCommerce Store",
    description:
      "Fully functional WooCommerce store with product management and checkout flow.",
    image: "/assets/work/thumb9.png",
    link: "/",
    github: "https://github.com/yourusername/woocommerce-store",
    tech: ["WordPress", "WooCommerce", "Elementor"],
  },
];
const work = () => {
  const categories = Array.from(new Set(projects.map((p) => p.category)));

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
      }}
      className="py-24  min-h-screen flex items-center"
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        <h2 className="h2  max-w-[600px]">
          My Latest <span className="text-accent">Work</span>
        </h2>

        <Tabs defaultValue={categories[0]} className="w-full flex flex-col">
          <TabsList className="">
            {categories.map((category) => (
              <TabsTrigger
                className="custom-border px-4 py-2 border-accent rounded-full"
                key={category}
                value={category}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => {
            const filteredProjects = projects.filter(
              (p) => p.category === category,
            );
            const projectCount = filteredProjects.length;
            const showNavigation = projectCount === 1 || projectCount === 2;

            return (
              <TabsContent
                key={category}
                value={category}
                className="mt-8 lg:mt-4 w-full"
              >
                <Swiper
                  modules={[
                    Pagination,
                    ...(showNavigation ? [Navigation] : []),
                  ]}
                  spaceBetween={20}
                  slidesPerView={1}
                  breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  navigation={showNavigation}
                  className="mySwiper"
                >
                  {filteredProjects.map((project) => (
                    <SwiperSlide key={project.id} className="h-full">
                      <div className="h-full custom-border p-2 rounded-2xl overflow-hidden flex flex-col">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-40 object-cover"
                        />

                        <div className="p-3 flex-1 flex flex-col h-30">
                          {/* heading  */}
                          <div>
                            <h3 className="h3">{project.title}</h3>
                          </div>
                          {/* paragraph  */}
                          <div>
                            <p className=" flex-1 p">{project.description}</p>
                          </div>
                          {/* Tech Stack  */}
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, i) => (
                              <span
                                key={i}
                                className="text-xs px-3 py-1.5 bg-secondary rounded-full font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          {/* Buttons  */}
                          <div className="flex flex-wrap gap-3 mt-auto p">
                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                className=" flex-1 text-center bg-primary py-3 rounded-xl transition"
                              >
                                Live Preview
                              </a>
                            )}

                            {/* ✅ View Code button always show */}
                            <a
                              href={project.github || "#"}
                              target={project.github ? "_blank" : undefined}
                              className="flex-1 text-center border py-3 rounded-xl  transition flex items-center justify-center gap-2"
                            >
                              <FaGithub className="text-lg" />
                              View Code
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </motion.section>
  );
};

export default work;
