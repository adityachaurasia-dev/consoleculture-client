"use client";
import { useState } from "react";

const ProductDetail = () => {
  const [size, setSize] = useState(null);

  return (
    <div>
      {["XS", "S", "M", "L", "XL"].map((item) => (
        <button
          key={item}
          onClick={() => setSize(item)}
          className={`inline-flex items-center justify-center border px-5 py-3 text-xs cursor-pointer hover:border-black ${
            size === item ? "border-black" : "border-gray-300"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ProductDetail;
