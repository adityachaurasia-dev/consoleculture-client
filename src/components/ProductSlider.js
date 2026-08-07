"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";

const ProductSlider = ({ items }) => {
  return (
    <Swiper
      className="w-full h-auto hero-slider  [--swiper-pagination-color:#ffffff] [--swiper-pagination-bullet-inactive-color:#9ca3af] [--swiper-pagination-bullet-inactive-opacity:1]"
      modules={[Pagination]}
      slidesPerView={1}
      loop={true}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={item} alt="banner" className="w-full  object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;
