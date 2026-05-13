"use client";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper modules
import { Pagination, Autoplay } from "swiper/modules";

// styles
import "swiper/css";
import "swiper/css/pagination";
const testimonials = [
  {
    id: 1,
    name: "Ali Khan",
    role: "Frontend Developer",
    review:
      "Amazing work. The website looks modern, fast, and fully responsive on every device.",
  },
  {
    id: 2,
    name: "Ahmed Raza",
    role: "UI Designer",
    review:
      "Very professional experience. Clean code, smooth animations, and great attention to detail.",
  },
  {
    id: 3,
    name: "Usman Tariq",
    role: "Business Owner",
    review:
      "My website speed improved a lot after the redesign. Everything feels smooth and optimized.",
  },
  {
    id: 4,
    name: "Hamza Ali",
    role: "Ecommerce Store Owner",
    review:
      "The whole project was completed on time and the final result exceeded expectations.",
  },
  {
    id: 5,
    name: "Bilal Ahmed",
    role: "React Developer",
    review:
      "Great developer to work with. The UI was pixel perfect and the performance was excellent.",
  },
];

const AboutTestimonials = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      className="h-full w-[300px]  "
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id} className="py-8">
          <div className="text-center bg-tertiary-hover p-4 rounded-2xl h-full">
            <p className="text-[15px]">{testimonial.review}</p>
            <h3 className="text-[16px] mt-4">{testimonial.name}</h3>
            <p className="text-sm">{testimonial.role}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AboutTestimonials;
