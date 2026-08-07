"use client";

import { useState } from "react";

const ProductDetail = ({ sizeVariation = [] }) => {
  const [size, setSize] = useState(null);

  return (
    <div className="flex gap-1 flex-wrap">
      {["XS", "S", "M", "L", "XL", "XXL"].map((item) => {
        const available = sizeVariation.includes(item);

        return (
          <button
            key={item}
            disabled={!available}
            onClick={() => setSize(item)}
            className={`relative overflow-hidden inline-flex items-center justify-center border px-4 py-2 md:px-5 md:py-3 text-xs transition
    ${
      available
        ? "cursor-pointer hover:border-black"
        : "cursor-not-allowed text-gray-400"
    }
    ${size === item ? "border-black" : "border-gray-300"}
  `}
          >
            {!available && (
              <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="absolute w-[140%] border-t border-gray-300 rotate-45"></span>
              </span>
            )}

            <span className="relative z-10">{item}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ProductDetail;
