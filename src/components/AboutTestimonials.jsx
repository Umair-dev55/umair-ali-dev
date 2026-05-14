"use client";
// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
//import swiper styles
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
// icon
import { FaQuoteLeft } from "react-icons/fa";
const AboutTestimonials = () => {
  const testimonials = [
    {
      name: "Michael Carter",
      role: "CEO at NovaTech",
      image:
        "https://images.pexels.com/photos/8872492/pexels-photo-8872492.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 5,
      review:
        "Umair delivered a fast, modern, and highly responsive website. The attention to detail and smooth animations exceeded our expectations.",
    },
    {
      name: "Sophia Williams",
      role: "UI/UX Designer",
      image:
        "https://images.pexels.com/photos/10417390/pexels-photo-10417390.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 5,
      review:
        "Working with Umair was smooth and professional. He perfectly translated my designs into a pixel-perfect, animated website.",
    },
    {
      name: "Daniel Thompson",
      role: "Founder of BrightLabs",
      image:
        "https://images.pexels.com/photos/31869537/pexels-photo-31869537.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 5,
      review:
        "Excellent work! Delivered on time with clean code, great performance, and beautiful responsiveness across all devices.",
    },

    {
      name: "James Anderson",
      role: "Frontend Engineer",
      image:
        "https://images.pexels.com/photos/14589344/pexels-photo-14589344.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 5,
      review:
        "As a developer myself, I was impressed by the code quality and modern animations. Really strong in React & Next.js.",
    },
    {
      name: "Olivia Martinez",
      role: "Marketing Manager",
      image:
        "https://images.pexels.com/photos/31880922/pexels-photo-31880922.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 5,
      review:
        "The website feels alive with smooth animations and perfect responsiveness. Our engagement has noticeably increased.",
    },
  ];
  return (
    <div>
      <div className="mb-8 text-center p-4">
        <h2 className="h2 font-bold"> Trusted By Clients </h2>
        <p className="para mt-2">
          Feedback from clients on project quality, communication, and delivery.
        </p>
      </div>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full max-w-[300px] md:max-w-[500px] bg-secondary rounded-3xl p-6"
      >
        {testimonials.map((person, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-3  py-8 px-4 rounded-3xl  custom-border">
                <div className="flex gap-3 items-center justify-between px-[4px] mb-20">
                  <FaQuoteLeft className="text-accent text-4xl" />
                  <div className="flex p-2 custom-border rounded-4xl">
                    <img
                      className="size-10 rounded-full"
                      src={person.image}
                      alt={person.name}
                    />
                    <div>
                      <div className="text-[12px] font-bold">{person.role}</div>
                      <div className="text-[12px]">{person.name}</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="">{person.review}</div>
                </div>
                <div>
                  {Array.from({ length: person.rating }).map((_, i) => (
                    <span key={i} className="text-white text-xl">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default AboutTestimonials;
