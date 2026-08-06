"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Slider = ({ items }) => {
  return (
    <Swiper
      className="w-full h-screen hero-slider  [--swiper-pagination-color:#ffffff] [--swiper-pagination-bullet-inactive-color:#9ca3af] [--swiper-pagination-bullet-inactive-opacity:1]"
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      // pagination={{ clickable: true, dynamicBullets: true }}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          return `
            <span class="${className}">
              <span class="progress"></span>
            </span>
          `;
        },
      }}
      loop={true}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <img
            src={item.image}
            alt="banner"
            className="w-full h-screen object-cover hidden md:block"
          />

          <img
            src={item.mobileImage}
            alt="banner"
            className="w-full h-screen object-cover block md:hidden"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
