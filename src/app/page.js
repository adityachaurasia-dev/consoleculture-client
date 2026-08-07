"use client";

import Navbar from "@/components/Navbar/Navbar";
import ProductCard from "@/components/ProductCard";
import Slider from "@/components/Slider";
import { HomeData } from "@/data/HomePage";

const Home = () => {
  return (
    <>
      <Slider items={HomeData.HOME_PAGE_SLIDER}></Slider>
      <div className="m-4 flex flex-col gap-2 my-10">
        <span>New In</span>
        <span className="text-gray-500 text-2xs md:3xs  ">
          Upgrade your closet with everything trendy and new
        </span>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {HomeData.NEW_IN.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
