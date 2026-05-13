"use client";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper modules
import { Pagination, Autoplay } from "swiper/modules";

// Styles
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
      "My website speed improved significantly after the redesign. Everything feels smooth and optimized.",
  },
  {
    id: 4,
    name: "Hamza Ali",
    role: "Ecommerce Store Owner",
    review:
      "The entire project was delivered on time and the final result exceeded expectations.",
  },
  {
    id: 5,
    name: "Bilal Ahmed",
    role: "React Developer",
    review:
      "Great developer to work with. The UI was pixel perfect and performance was excellent.",
  },
];

const AboutTestimonials = () => {
  return (
    <section className="flex overflow-x-hidden py-12">
      <div className="max-w-2xl px-4 ">
        {/* heading */}
        <div className="text-center mb-10">
          <h2 className="h2 text-3xl md:text-4xl font-bold text-white">
            Client Testimonials
          </h2>

          <p className="text-gray-400 mt-3 para">
            Feedback from clients and developers I have worked with.
          </p>
        </div>

        {/* swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          spaceBetween={20}
          className="max-w-60  xl:max-w-95 mx-auto pb-14"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="rounded-4xl border-tertiary bg-tertiary hover:border-tertiary-hover  p-8 text-center min-h-[260px] flex flex-col justify-between">
                {/* review */}
                <p className="para text-gray-300 leading-relaxed text-[16px]">
                  "{testimonial.review}"
                </p>

                {/* user */}
                <div className="mt-8">
                  <h3 className="h3 text-xl font-semibold text-white">
                    {testimonial.name}
                  </h3>

                  <p className="para text-gray-400 mt-1">{testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AboutTestimonials;
