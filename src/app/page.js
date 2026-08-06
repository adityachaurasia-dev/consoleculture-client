"use client";

import Navbar from "@/components/Navbar/Navbar";
import ProductCard from "@/components/ProductCard";
import Slider from "@/components/Slider";
import { HomeData } from "@/data/HomePage";

const Home = () => {
  const products = [
    {
      title: "Baseball cap with rubberized Ferrari logo",
      slug: "baseball-cap-with-rubberized-ferrari-logo",
      originalPrice: 349.99,
      discountPrice: 279.99,
      images: [
        "/product/product-1.avif",
        "/product/product-2.avif",
        "/product/product-3.avif",
        "/product/product-4.avif",
      ],
    },
    {
      title: "Multicolored metal and leather keyring with charm",
      slug: "multicolored-metal-and-leather-keyring-with-charm",
      originalPrice: 129.99,
      discountPrice: 99.99,
      images: [
        "/product/product-01.avif",
        "/product/product-02.avif",
        "/product/product-03.avif",
        "/product/product-04.avif",
      ],
    },
    {
      title: "Cotton T-shirt with Prancing Horse print",
      slug: "cotton-t-shirt-with-prancing-horse-print",
      originalPrice: 159.99,
      discountPrice: 119.99,
      images: [
        "/product/product-001.jpg",
        "/product/product-002.jpg",
        "/product/product-003.jpg",
        "/product/product-004.jpg",
      ],
    },
    {
      title: "Cotton Piqué T-shirt with Ferrari Embroidery",
      slug: "cotton-pique-t-shirt-with-ferrari-embroidery",
      originalPrice: 189.99,
      discountPrice: 149.99,
      images: [
        "/product/product-01.avif",
        "/product/product-02.avif",
        "/product/product-03.avif",
        "/product/product-04.avif",
      ],
    },
    {
      title: "Cargo pants in vintage-effect technical gabardine",
      slug: "cargo-pants-in-vintage-effect-technical-gabardine",
      originalPrice: 89.99,
      discountPrice: 69.99,
      images: [
        "/product/product-001.jpg",
        "/product/product-002.jpg",
        "/product/product-003.jpg",
        "/product/product-004.jpg",
      ],
    },
  ];
  return (
    <>
      <Slider items={HomeData.HOME_PAGE_SLIDER}></Slider>
      <div className="m-4 flex flex-col gap-2 my-12">
        <span>New In</span>
        <span className="opacity-80 text-xs">
          Upgrade your closet with everything trendy and new
        </span>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {products.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
